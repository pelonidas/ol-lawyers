import clsx from 'clsx';
import { IoRibbon } from 'react-icons/io5';

interface RibbonSegmentProps {
  variant: 'dark' | 'light' | 'darker';
  className?: string;
}

const RibbonSegment = ({ variant, className }: RibbonSegmentProps) => {
  return (
    <div className={`relative flex h-[40px] w-full items-center ${className}`}>
      <hr
        className={`w-full border-dashed ${clsx({
          'border-primary': variant === 'light',
          'border-white': variant === 'dark' || variant === 'darker',
        })}`}
      />
      <IoRibbon
        color={variant === 'light' ? '#1E2D3D' : '#fff'}
        className={`absolute inset-0 mx-auto h-full shrink-0 px-1 text-4xl ${clsx(
          {
            'bg-white': variant === 'light',
            'bg-primary': variant === 'dark',
            'bg-primaryDarker': variant === 'darker',
          }
        )}`}
      />
    </div>
  );
};

export default RibbonSegment;

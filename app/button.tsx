import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
}

const Button = ({ children, variant = 'lg', className }: ButtonProps) => {
  return (
    <button
      className={`${className} h-[55px] w-full bg-secondary font-lato font-bold uppercase xl:h-[60px] ${clsx(
        {
          'xl:text-xl': variant === 'lg',
          'xl:text-sm': variant === 'sm',
        }
      )}`}
    >
      {children}
    </button>
  );
};

export default Button;

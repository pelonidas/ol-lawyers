import { BsCheckCircleFill } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';

interface CampaignCardProps {
  iconVariant: 'success' | 'error';
  title: string;
  bulletPoints: string[];
}

const CampaignCard = ({
  bulletPoints,
  iconVariant,
  title,
}: CampaignCardProps) => {
  return (
    <div
      className={
        'flex h-[315px] items-center justify-center bg-primary shadow-[0_17px_18px_rgba(0,0,0,0.25)] xl:h-[425px]'
      }
    >
      <div className={'relative flex h-[95%] w-[95%] border border-white'}>
        {/* Top right */}
        <div
          className={
            'absolute top-[10px] right-[10px] h-[70px] w-10 border-t border-r border-white'
          }
        >
          <div
            className={
              'absolute top-[10px] right-[10px] h-8 w-3 border-t border-r'
            }
          />
        </div>
        {/* Bottom left */}
        <div
          className={
            'absolute bottom-[10px] left-[10px] h-[70px] w-10 border-b border-l border-white'
          }
        >
          <div
            className={
              'absolute bottom-[10px] left-[10px] h-8 w-3 border-b border-l'
            }
          />
        </div>

        <div className={'m-auto'}>
          <h3 className={'te font-playfair text-2xl font-semibold xl:text-3xl'}>
            {title}
          </h3>
          <ul className={'mt-6 flex flex-col gap-3'}>
            {bulletPoints.map((text, key) => (
              <li key={key} className={'flex items-center gap-2 font-raleway'}>
                {iconVariant === 'success' ? (
                  <>
                    <BsCheckCircleFill
                      color={'#0BD89F'}
                      className={'text-xl '}
                    />
                    <span className={'font-medium xl:text-xl'}>{text}</span>
                  </>
                ) : (
                  <>
                    <MdCancel
                      color={'#D94741'}
                      className={'text-xl xl:text-[25px]'}
                    />
                    <span className={'font-light xl:text-xl'}>{text}</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;

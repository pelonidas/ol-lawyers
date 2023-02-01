import { FaInstagram } from 'react-icons/fa';
import { ImFacebook, ImLinkedin2, ImTwitter, ImYoutube } from 'react-icons/im';
import RibbonSegment from './ribbon';

const Footer = () => {
  return (
    <footer
      className={
        'container flex flex-col py-8 xl:w-full xl:max-w-[1235px] xl:flex-row xl:items-center xl:justify-between xl:py-10'
      }
    >
      <RibbonSegment variant={'dark'} className={'xl:hidden'} />
      <div>
        <h3
          className={
            'mt-4 text-center font-playfair text-3xl xl:mt-0 xl:text-4xl'
          }
        >
          <span className={'font-bold'}>online</span>launch
        </h3>
        <span className={'hidden xl:mt-4 xl:block xl:text-center'}>
          ©2023 onlinelaunch
        </span>
      </div>

      <div
        className={
          'mx-auto my-6 flex gap-8 font-raleway xl:mx-0 xl:my-0 xl:text-xl'
        }
      >
        <span>Kontakt</span>
        <span>GDPR</span>
      </div>
      <RibbonSegment variant={'dark'} className={'xl:hidden'} />
      <span className={'mt-6 text-center font-raleway xl:hidden'}>
        ©2023 onlinelaunch
      </span>
      <div
        className={
          'mx-auto mt-8 flex max-w-[195px] gap-8 xl:order-first xl:mx-0 xl:mt-0'
        }
      >
        <ImFacebook />
        <ImLinkedin2 />
        <ImTwitter />
        <ImYoutube />
        <FaInstagram />
      </div>
    </footer>
  );
};


export default Footer;

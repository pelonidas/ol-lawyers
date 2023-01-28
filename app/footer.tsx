import { FaInstagram } from 'react-icons/fa';
import { ImFacebook, ImLinkedin2, ImTwitter, ImYoutube } from 'react-icons/im';
import { RibbonSegment } from './page';

const Footer = () => {
  return (
    <footer className={'container flex flex-col py-8'}>
      <RibbonSegment variant={'dark'} />
      <h3 className={'mt-4 text-center font-playfair text-3xl'}>
        <span className={'font-bold'}>online</span>launch
      </h3>
      <div className={'mx-auto my-6 flex gap-8 font-raleway'}>
        <span>Kontakt</span>
        <span>GDPR</span>
      </div>
      <RibbonSegment variant={'dark'} />
      <span className={'mt-6 text-center font-raleway'}>
        ©2023 onlinelaunch
      </span>
      <div className={'mx-auto mt-8 flex max-w-[195px] gap-8'}>
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

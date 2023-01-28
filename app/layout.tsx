import { Lato, Playfair_Display, Raleway } from '@next/font/google';
import './globals.css';
import Header from './header';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  display: 'optional',
  subsets: ['latin'],
});

const raleway = Raleway({
  variable: '--font-raleway',
  display: 'optional',
  subsets: ['latin'],
});

const lato = Lato({
  variable: '--font-lato',
  display: 'swap',
  subsets: ['latin-ext'],
  weight: ['700'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${raleway.variable} ${lato.variable}`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={'bg-primary text-white'}>
        <Header />
        {children}
      </body>
    </html>
  );
}

'use client';
import { useScrollLock } from '@mantine/hooks';
import { mdiSeal } from '@mdi/js';
import Icon from '@mdi/react';
import clsx from 'clsx';
import { motion, Variants } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useState } from 'react';

const links = [
  { label: 'online marketing', href: '/' },
  { label: 'o nás', href: '/' },
  { label: 'bezplatné konzultácie', href: '/' },
];

const variants: Variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: '-100%' },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [_, setScrollLocked] = useScrollLock();

  return (
    <nav className={'container sticky top-0 bg-primary'}>
      <div className={'flex h-[65px] items-center justify-between'}>
        <h3 className={'font-playfair text-xl'}>
          <span className={'font-bold'}>online</span>launch
        </h3>
        <Hamburger toggled={isOpen} toggle={(val) => {
          setScrollLocked((c) => !c)
          setIsOpen(val)
        }} size={24} />
      </div>
      {/* height of navbar 65px + sum of dividing borders 2px + mt-4 separating top segment and ul */}
      <motion.div
        transition={{ ease: 'easeInOut', duration: 0.55 }}
        variants={variants}
        animate={isOpen ? 'open' : 'closed'}
        className={`mt-4 flex h-[calc(100vh-67px-16px)] flex-col pb-8 ${clsx({
          hidden: !isOpen,
        })}`}
      >
        <ul
          role={'list'}
          className={
            'font-base flex flex-col divide-y divide-dashed font-raleway uppercase'
          }
        >
          {links.map(({ label, href }, key) => (
            <li key={key} className={'py-4 text-xl'}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
        <div className={'relative mt-auto flex h-[40px] items-center'}>
          <hr className={'w-full border-dashed'} />
          <Icon
            path={mdiSeal}
            className={
              'absolute inset-0 mx-auto h-full shrink-0 bg-primary px-1'
            }
            size={'40px'}
          />
        </div>
        <button
          className={'mt-6 h-[55px] bg-secondary transitio font-lato font-bold uppercase'}
        >
          Získať ONLINE stratégiu
        </button>
      </motion.div>
    </nav>
  );
}

'use client';

import { useMediaQuery } from '@mantine/hooks';

export default function RoundText({ className }: { className?: string }) {
  const isWide = useMediaQuery('(min-width: 1280px)');

  return (
    <svg
      viewBox="0 0 100 100"
      width={`${isWide ? '170' : '120'}`}
      height={`${isWide ? '170' : '120'}`}
      className={`fill-white ${className}`}
    >
      <defs>
        <path
          id="circle"
          d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
        />
      </defs>
      <text fontSize="9.5">
        <textPath xlinkHref="#circle">
          Viac info o nás • Viac info o nás • Viac info o nás •
        </textPath>
      </text>
    </svg>
  );
}

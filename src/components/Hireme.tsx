import React from 'react';
import { CircularText } from './icons';
import Link from 'next/link';
const Hireme = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden ">
      <div className="w-44 h-auto flex items-center justify-center relative">
        <CircularText className={'fill-dark animate-spin-slow'} />
        <Link
          href="mailto:sachinsapkota773@gmail.com"
          className="flex items-center justify-center absolute inset-0 m-auto bg-dark rounded-full text-light text-center text-base font-medium w-1/2 h-1/2 shadow-md "
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Hireme;

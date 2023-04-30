import React from 'react';
import Layout from './Layout';
import Link from 'next/link';
import { BuyMeCoffee, TwitterIcon } from './icons';
const Footer = () => {
  return (
    <footer className="w-full font-medium text-lg mt-10 px-32 dark:text-light">
      <Layout className="py-8 flex items-center justify-around border-t-2 border-solid border-dark dark:border-light dark:border-opacity-60 ">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <Link href="/" target="_blank">
          Sachin Sapkota
        </Link>
        <Link
          href="https://www.buymeacoffee.com/sachinsapkD"
          target="_blank"
          className="flex gap-2 "
        >
          <div className="w-6 h-6 ">
            <BuyMeCoffee className="text-white" />
          </div>
          <span className="">Buy me a Coffee!</span>
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;

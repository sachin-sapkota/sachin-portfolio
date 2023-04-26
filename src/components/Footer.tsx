import React from 'react';
import Layout from './Layout';
import Link from 'next/link';
import { BuyMeCoffee, TwitterIcon } from './icons';
const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <Link href="/">Sachin Sapkota</Link>
        <Link href="/" className="flex gap-2 ">
          <div className="w-6 h-6 ">
            <BuyMeCoffee />
          </div>
          <span className=" ">Buy me a Coffee!</span>
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;

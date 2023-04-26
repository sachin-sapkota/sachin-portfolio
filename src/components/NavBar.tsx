import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

const CustomLink = ({ href, title, className = '' }: CustomLinkProps) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className="h-[1px] inline-block w-8 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300">
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="relative w-full px-32 py-8 font-medium flex justify-between">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>

        <Link href="/articles">Articles</Link>
      </nav>
      <div
        className="absolute "
        style={{ left: '50%', translate: 'translate(-50%, 0)' }}
      >
        <Logo />
      </div>
      <div>
        <Link href="/" target={'_blank'}>
          T
        </Link>
        <Link href="/" target={'_blank'}>
          T
        </Link>
        <Link href="/" target={'_blank'}>
          T
        </Link>
        <Link href="/" target={'_blank'}>
          T
        </Link>
      </div>
    </header>
  );
};

export default NavBar;

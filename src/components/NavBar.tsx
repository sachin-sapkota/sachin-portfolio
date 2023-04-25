import React from 'react';
import Link from 'next/link';
const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>

        <Link href="/articles">Articles</Link>
      </nav>
      <h2>Logo</h2>
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
    </header>
  );
};

export default NavBar;

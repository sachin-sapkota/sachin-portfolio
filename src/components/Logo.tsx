import React from 'react';
import Link from 'next/link';
export const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2  ">
      <Link href="/" className="w-16 h-16">
        SS
      </Link>
    </div>
  );
};

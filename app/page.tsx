import type { Metadata } from 'next';
import HomePage from './home-page';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Stunning portfolio with Next.js, Tailwind CSS, and Framer Motion.',
};

export default function Page() {
  return <HomePage />;
}

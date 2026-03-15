import type { Metadata } from 'next';
import AboutPage from './about-page';

export const metadata: Metadata = {
  title: 'SS | About Me',
  description: 'About Sachin Sapkota.',
};

export default function Page() {
  return <AboutPage />;
}

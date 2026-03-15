import type { Metadata } from 'next';
import ArticlesPage from './articles-page';

export const metadata: Metadata = {
  title: 'SS | Articles',
  description: 'Articles by Sachin Sapkota.',
};

export default function Page() {
  return <ArticlesPage />;
}

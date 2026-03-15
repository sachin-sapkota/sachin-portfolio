import type { Metadata } from 'next';
import ProjectsPage from './projects-page';

export const metadata: Metadata = {
  title: 'SS | My Projects',
  description: 'Projects built by Sachin Sapkota.',
};

export default function Page() {
  return <ProjectsPage />;
}

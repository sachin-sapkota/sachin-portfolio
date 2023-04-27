import AnimatedText from '@/src/components/AnimatedText';
import Layout from '@/src/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import article1 from '../public/images/article1.png';
import article2 from '../public/images/article2.png';
import { motion } from 'framer-motion';

const FramerImage = motion(Image);
interface articleType {
  img: any;
  title: string;
  time: string;
  summary: string;
  link: string;
}
const FeatureArticle = ({ img, title, time, summary, link }: articleType) => {
  return (
    <div className=" col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg inline-block "
      >
        <div
          className="absolute inset-0 left-3 -z-10  w-full top-2 -bottom-3 rounded-t-3xl rounded-bl-3xl rounded-b-2xl bg-dark  "
          style={{ zIndex: -10 }}
        />
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto "
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline ">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 font-medium">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </div>
  );
};
const articles = () => {
  return (
    <>
      <Head>
        <title>SS | About Me</title>
        <meta name="description" content="about me"></meta>
      </Head>

      <main className="flex w-full flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Words can change the world!"
            classname={'text-8xl mb-16'}
          />
          <ul className="grid grid-cols-2 gap-16 mb-16">
            <FeatureArticle
              title={
                'Build A Custom Pagination Component In Reactjs From Scratch'
              }
              time={'10 min read'}
              summary={
                'Learn how to build a custom pagination component in ReactJS from scratch.Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
              }
              img={article1}
              link={'/'}
            />
            <FeatureArticle
              title={
                'Build A Custom Pagination Component In Reactjs From Scratch'
              }
              time={'10 min read'}
              summary={
                'Learn how to build a custom pagination component in ReactJS from scratch.Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
              }
              img={article2}
              link={'/'}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;

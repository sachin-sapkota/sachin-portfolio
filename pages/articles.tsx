import AnimatedText from '@/src/components/AnimatedText';
import Layout from '@/src/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import article1 from '../public/images/article1.png';
import article2 from '../public/images/article2.png';
import article3 from '../public/images/article3.png';
import { motion, useMotionValue } from 'framer-motion';
import { useRef } from 'react';
// import React from 'react'

const FramerImage = motion(Image);
const MovingImg = ({ title, img, link }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<HTMLImageElement>(null);
  function handleMouse(event: any) {
    if (imgRef.current) {
      imgRef.current.style.display = 'inline-block';
    }
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event: any) {
    if (imgRef.current) {
      imgRef.current.style.display = 'none';
    }
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline ">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="w-96 h-auto hidden absolute rounded-lg z-10"
      />
    </Link>
  );
};
interface articleType {
  img: any;
  title: string;
  time?: string;
  summary?: string;
  date?: string;
  link: string;
}

const Article = ({ img, title, date, link }: articleType) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between text-dark dark:text-light bg-light dark:bg-dark border border-solid border-dark dark:border-light border-r-4 border-b-4"
    >
      <MovingImg title={title} img={img} link={link} />

      <span className="text-dark dark:text-light opacity-75  font-semibold pl-4 ">
        {date}
      </span>
    </motion.li>
  );
};

const FeatureArticle = ({ img, title, time, summary, link }: articleType) => {
  return (
    <div className=" col-span-1 w-full p-4 bg-light dark:bg-dark dark:border-light border border-solid border-dark rounded-2xl relative">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg inline-block "
      >
        <div
          className="absolute inset-0 left-3 -z-10  w-full top-2 -bottom-3 rounded-t-3xl rounded-bl-3xl rounded-b-2xl bg-dark dark:bg-light "
          style={{ zIndex: -10 }}
        />
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto "
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline ">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 font-medium">{summary}</p>
      <span className="text-dark dark:text-light opacity-75 font-semibold">
        {time}
      </span>
    </div>
  );
};
const articles = () => {
  return (
    <>
      <Head>
        <title>SS | Articles</title>
        <meta name="description" content="articles" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center overflow-hidden pb-32 dark:text-light ">
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
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article3}
              link="/"
              date="January 22, 2023"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article3}
              link="/"
              date="January 22, 2023"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article3}
              link="/"
              date="January 22, 2023"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;

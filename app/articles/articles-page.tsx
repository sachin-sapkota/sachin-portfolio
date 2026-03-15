"use client";

import { useRef, type MouseEvent } from 'react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue } from 'framer-motion';
import AnimatedText from '@/src/components/AnimatedText';
import article1 from '@/public/images/article1.png';
import article2 from '@/public/images/article2.png';
import article3 from '@/public/images/article3.png';

interface ArticleType {
  img: StaticImageData;
  title: string;
  time?: string;
  summary?: string;
  date?: string;
  link: string;
}

function MovingImg({ title, img, link }: ArticleType) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<HTMLDivElement>(null);

  const handleMouse = (event: MouseEvent<HTMLAnchorElement>) => {
    if (imgRef.current) {
      imgRef.current.style.display = 'inline-block';
    }

    x.set(event.pageX);
    y.set(-10);
  };

  const handleMouseLeave = () => {
    if (imgRef.current) {
      imgRef.current.style.display = 'none';
    }

    x.set(0);
    y.set(0);
  };

  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-base sm:text-lg md:text-xl font-semibold hover:underline">
        {title}
      </h2>
      <motion.div
        style={{ x, y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
        ref={imgRef}
        className="w-96 h-auto hidden absolute rounded-lg z-10 overflow-hidden"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </motion.div>
    </Link>
  );
}

function Article({ img, title, date, link }: ArticleType) {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex sm:flex-row flex-col sm:items-center sm:justify-between text-dark dark:text-light bg-light dark:bg-dark border border-solid border-dark dark:border-light border-r-4 border-b-4"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-dark dark:text-light opacity-75 font-semibold pt-2 sm:pl-4 md:text-base text-sm">
        {date}
      </span>
    </motion.li>
  );
}

function FeatureArticle({ img, title, time, summary, link }: ArticleType) {
  return (
    <div className="col-span-1 w-full p-4 bg-light dark:bg-dark dark:border-light border border-solid border-dark rounded-2xl relative">
      <Link
        href={link}
        target="_blank"
        rel="noreferrer"
        className="w-full cursor-pointer overflow-hidden rounded-lg inline-block"
      >
        <div
          className="absolute hidden sm:flex inset-0 left-3 -z-10 w-full top-2 -bottom-3 rounded-t-3xl rounded-bl-3xl rounded-b-2xl bg-dark dark:bg-light"
          style={{ zIndex: -10 }}
        />
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Image
            src={img}
            alt={title}
            className="w-full h-auto"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </motion.div>
      </Link>
      <Link href={link} target="_blank" rel="noreferrer">
        <h2 className="capitalize text-lg sm:text-xl md:text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-xs sm:text-sm mb-2 font-medium">{summary}</p>
      <span className="sm:text-base text-sm text-dark dark:text-light opacity-75 font-semibold">
        {time}
      </span>
    </div>
  );
}

export default function ArticlesPage() {
  return (
    <main className="flex w-full flex-col items-center justify-center overflow-hidden pb-32 dark:text-light">
      <div className="pt-12 px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 w-full h-full inline-block z-0">
        <AnimatedText
          text="Words can change the world!"
          classname="text-5xl sm:text-6xl md:text-7xl xl:text-8xl sm:mb-16 mb-8"
        />
        <ul className="grid lg:grid-cols-2 grid-cols-1 gap-16 mb-16">
          <FeatureArticle
            title="Build A Custom Pagination Component In Reactjs From Scratch"
            time="10 min read"
            summary="Learn how to build a custom pagination component in ReactJS from scratch.Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            img={article1}
            link="/"
          />
          <FeatureArticle
            title="Build A Custom Pagination Component In Reactjs From Scratch"
            time="10 min read"
            summary="Learn how to build a custom pagination component in ReactJS from scratch.Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            img={article2}
            link="/"
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
      </div>
    </main>
  );
}

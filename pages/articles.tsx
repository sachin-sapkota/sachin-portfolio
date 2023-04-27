import AnimatedText from '@/src/components/AnimatedText';
import Layout from '@/src/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const FeatureArticle = ({ img, title, time, summary, link }) => {
  return (
    <div className="">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto " />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 ">{title}</h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
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
          <ul className="grid grid-cols-2 gap-16">
            <li>Feature article 1</li>
            <li>Feature article 1</li>
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;

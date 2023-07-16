import Image from 'next/image';
import Head from 'next/head';
import Layout from '../src/components/Layout';
import sachinPic from '../public/images/sachinpic.png';
import AnimatedText from '../src/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/src/components/icons';
import Hireme from '@/src/components/Hireme';
import TransitionEffect from '@/src/components/TransitionEffect';
import bg_image from '../src/assets/herobg.png';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Stunning portfolio with Next.js , tailwind css and framer-motion"
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light  relative pt-20">
        <div className="absolute inset-0 ">
          <Image
            src={bg_image}
            alt=""
            width={2000}
            height={1200}
            className="  w-full h-full object-cover  "
            priority
          />
          <div className="absolute inset-0 bg-light dark:bg-transparent"></div>
        </div>
        <Layout className="h-full sm:px-8 px-4 md:px-12  lg:px-16 xl:px-20   ">
          <div className="flex items-start justify-between w-full flex-col lg:flex-row lg:justify-start   lg:items-center  ">
            <div className=" w-full flex justify-center  ">
              <Image
                src={sachinPic}
                alt=""
                className="lg:w-full  w-3/5 h-4/5 inline-block  sm:inline-block  "
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-full flex flex-col items-start  justify-start  text-center lg:text-left  h-full sm:pt-5 pt-3 bg-hero-pattern   ">
              <AnimatedText
                text="Turning Vision into reality with code and design."
                classname=" text-3xl text-center 2xl:text-7xl  lg:text-left lg:text-6xl  sm:text-5xl pb-1"
              />
              <p className="sm:my-4 my-2 text-sm md:text-base xl:text-lg font-medium text-center lg:text-left  ">
                Discover cutting-edge web applications crafted from your ideas
                by a proficient full-stack developer.Check out my recent
                projects and articles highlighting my mastery in Next.js and web
                development.
              </p>
              <div className="flex items-center t mt-2 justify-center lg:justify-start w-full ">
                <Link
                  className="flex items-center bg-dark dark:bg-light dark:text-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light  hover:text-dark dark:hover:text-light dark:hover:border-light border border-solid border-transparent hover:border-dark dark:hover:bg-dark "
                  href="/pdf/resume.pdf"
                  target="_blank"
                  download={true}
                >
                  Resume <LinkArrow className="w-6 m-1" />
                </Link>
                <Link
                  href="mailto:sachinsapkota773@gmail.com"
                  className="ml-4 text-lg font-medium capitalize dark:text-light text-dark underline  "
                >
                  Contact me
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <Hireme />
        <div className="absolute bottom-3 w-full flex justify-center items-center opacity-40">
          <a href="#about">
            <div className="w-8 h-14 rounded-3xl border-4 border-secondary flex justify-center items-start ">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.7,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 bg-secondary my-1 rounded-full"
              ></motion.div>
            </div>
          </a>
        </div>
      </main>
    </>
  );
}

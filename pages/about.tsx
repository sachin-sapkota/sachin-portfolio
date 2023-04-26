import AnimatedText from '@/src/components/AnimatedText';
import Layout from '@/src/components/Layout';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import ProfilePic from '../public/images/profile_pic.jpg';
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/src/components/Skills';
import Experience from '@/src/components/Experience';

const AnimateNumbers = ({ value }: any) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>SS | About Me</title>
        <meta name="description" content="about me"></meta>
      </Head>

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            classname={'text-8xl mb-16'}
          />
          <div className="grid w-full grid-cols-8 gap-16 place-content-center place-items-center">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark opacity-75">
                Biography
              </h2>
              <p className="font-medium mt-2  ">
                I am Sachin Sapkota, a web developer and UI/UX designer, who is
                passionate about crafting digital experiences that are both
                aesthetically pleasing and user-friendly. I have been working in
                this industry for four years and always strive to find novel and
                innovative approaches to make my clients' ideas come to life.
              </p>
              <p className="font-medium mt-3">
                To me, design is not solely about creating visually appealing
                objects. Rather, it's about addressing problems and delivering
                simple, pleasant experiences for users.
              </p>
              <p className="font-medium mt-3">
                Be it a website, mobile app, or any other digital product, I
                imbue every project with my dedication to design excellence and
                user-centric approach. I am excited about the opportunity to
                apply my skills and enthusiasm to your next project.
              </p>
            </div>
            <div className="col-span-3 mx-3 relative h-5/6 rounded-2xl border-2 border-solid border-dark  ">
              <div className="absolute inset-0 left-4 -z-10  w-full top-3 -bottom-4 rounded-t-3xl rounded-b-2xl bg-dark " />
              <div className="bg-light p-8 rounded-2xl h-full relative">
                <Image
                  src={ProfilePic}
                  alt="sachin"
                  className="w-full h-full rounded-2xl object-cover"
                  draggable={false}
                />
              </div>
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between  w-full h-full">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimateNumbers value={30} />+
                </span>
                <h2 className="text-xl font-semibold capitalize text-dark opacity-75 ">
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  {' '}
                  <AnimateNumbers value={40} />+
                </span>
                <h2 className="text-xl font-semibold capitalize text-dark opacity-75 ">
                  Project Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  {' '}
                  <AnimateNumbers value={4} />+
                </span>
                <h2 className="text-xl font-semibold capitalize text-dark opacity-75 ">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default about;

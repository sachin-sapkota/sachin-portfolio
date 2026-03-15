"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import AnimatedText from '@/src/components/AnimatedText';
import Education from '@/src/components/Education';
import Experience from '@/src/components/Experience';
import Skills from '@/src/components/Skills';
import profilePic from '@/public/images/profile_pic.jpg';

function AnimateNumbers({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current && Number(latest.toFixed(0)) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });

    return unsubscribe;
  }, [springValue, value]);

  return <span ref={ref} />;
}

export default function AboutPage() {
  return (
    <main className="dark:text-light flex w-full flex-col items-center justify-center overflow-hidden">
      <div className="pt-16 px-10 sm:px-12 md:px-16 lg:px-24 xl:px-32 w-full h-full inline-block z-0">
        <AnimatedText
          text="Passion Fuels Purpose!"
          classname="text-5xl sm:text-6xl md:text-7xl xl:text-8xl sm:mb-16 mb-8"
        />
        <div className="grid w-full grid-cols-8 sm:gap-16 gap-8 place-content-center place-items-center">
          <div className="xl:col-span-3 md:col-span-4 col-span-8 order-2 md:order-1 flex flex-col items-start justify-start">
            <h2 className="mt-2 text-lg font-bold uppercase text-dark opacity-75 dark:text-light dark:opacity-75 md:text-left text-center w-full">
              Biography
            </h2>
            <p className="font-medium mt-2">
              I am Sachin Sapkota, a web developer and UI/UX designer, who is
              passionate about crafting digital experiences that are both
              aesthetically pleasing and user-friendly. I have been working in
              this industry for four years and always strive to find novel and
              innovative approaches to make my clients&apos; ideas come to life.
            </p>
            <p className="font-medium mt-3">
              To me, design is not solely about creating visually appealing
              objects. Rather, it&apos;s about addressing problems and
              delivering simple, pleasant experiences for users.
            </p>
            <p className="font-medium mt-3">
              Be it a website, mobile app, or any other digital product, I
              imbue every project with my dedication to design excellence and
              user-centric approach. I am excited about the opportunity to
              apply my skills and enthusiasm to your next project.
            </p>
          </div>
          <div className="xl:col-span-3 md:col-span-4 col-span-8 order-1 md:order-2 mx-3 relative h-full rounded-2xl border-2 border-solid border-dark dark:border-light">
            <div className="absolute inset-0 left-3 -z-10 w-full top-2 -bottom-3 rounded-t-3xl rounded-b-2xl bg-dark dark:bg-light" />
            <div className="bg-light p-8 rounded-2xl h-full relative dark:bg-dark">
              <Image
                src={profilePic}
                alt="Sachin Sapkota"
                className="w-full h-full rounded-2xl object-cover"
                draggable={false}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  minHeight: '50vh',
                  maxHeight: '80vh',
                }}
              />
            </div>
          </div>
          <div className="xl:col-span-2 col-span-8 flex xl:flex-col md:flex-row xl:items-end md:items-center justify-between w-full h-full order-3">
            <div className="flex flex-col xl:items-end items-center justify-center">
              <span className="inline-block text-4xl sm:text-5xl md:text-7xl font-bold">
                <AnimateNumbers value={30} />+
              </span>
              <h2 className="md:text-xl sm:text-lg text-base text-center xl:text-left font-semibold capitalize text-dark opacity-75 dark:text-light dark:opacity-75">
                Satisfied Clients
              </h2>
            </div>
            <div className="flex flex-col xl:items-end items-center justify-center">
              <span className="inline-block text-4xl sm:text-5xl md:text-7xl font-bold">
                <AnimateNumbers value={40} />+
              </span>
              <h2 className="md:text-xl sm:text-lg text-base text-center xl:text-left font-semibold capitalize text-dark opacity-75 dark:text-light dark:opacity-75">
                Project Completed
              </h2>
            </div>
            <div className="flex flex-col xl:items-end items-center justify-center">
              <span className="inline-block text-4xl sm:text-5xl md:text-7xl font-bold">
                <AnimateNumbers value={4} />+
              </span>
              <h2 className="md:text-xl sm:text-lg text-base text-center xl:text-left font-semibold capitalize text-dark opacity-75 dark:text-light dark:opacity-75">
                Years of Experience
              </h2>
            </div>
          </div>
        </div>
        <Skills />
        <Experience />
        <Education />
      </div>
    </main>
  );
}

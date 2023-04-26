import Image from 'next/image';
import Head from 'next/head';
import Layout from '../src/components/Layout';
import sachinPic from '../public/images/sachinpic.png';
import AnimatedText from '../src/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/src/components/icons';
import Hireme from '@/src/components/Hireme';
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="I can stunning portfolio with Next.js , tailwind css and framer-motion"
        />
      </Head>
      <main className="flex items-start text-dark w-full min-h-screen">
        <Layout>
          <div className="flex items-start justify-between w-full">
            <div className="w-1/2">
              <Image src={sachinPic} alt="" className="w-full h-auto" />
            </div>
            <div className="w-1/2 flex flex-col items-start  justify-start self-center ">
              <h1></h1>
              <AnimatedText
                text="Turning Vision into reality with code and design."
                classname=" text-6xl text-left "
              />
              <p className="my-4 text-base font-medium">
                Discover cutting-edge web applications crafted from your ideas
                by a proficient full-stack developer. Check out my recent
                projects and articles highlighting my mastery in Next.js and web
                development.
              </p>
              <div className="flex items-center justify-start mt-2 ">
                <Link
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark"
                  href="/resume.pdf"
                  target="_blank"
                  download={true}
                >
                  Resume <LinkArrow className="w-6 m-1" />
                </Link>
                <Link
                  href="mailto:sachinsapkota773@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline  "
                >
                  Contact me
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <Hireme />
      </main>
    </>
  );
}

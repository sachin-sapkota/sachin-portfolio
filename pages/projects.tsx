import AnimatedText from '@/src/components/AnimatedText';
import Layout from '@/src/components/Layout';
import { GithubIcon, LinkArrow } from '@/src/components/icons';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import digitizeNepal from '../public/images/digitizenepal_proj.png';
import jobxa_proj from '../public/images/jobxa_proj.png';
import detour_proj from '../public/images/detour_proj.png';
import clinic_expert_proj from '../public/images/clinic_expert.png';
import x8c_proj from '../public/images/x8c_proj.png';
import aakhyaan_proj from '../public/images/aakhyan_proj.png';
import TransitionEffect from '@/src/components/TransitionEffect';

const FramerImage = motion(Image);
interface fptype {
  type: string;
  title: string;
  summary?: string;
  image: any;
  link: string;
  github: string;
}
const FeaturedProject = ({
  type,
  title,
  summary,
  image,
  link,
  github,
}: fptype) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl lg:p-12 relative flex-col lg:flex-row md:p-8 p-4  ">
      <div
        className="absolute inset-0 lg:left-3 left-2   w-full top-1.5 lg:-bottom-3 -bottom-2  rounded-t-3xl rounded-bl-3xl rounded-br-3xl bg-dark dark:bg-light  "
        style={{ zIndex: -10 }}
      />
      <Link
        href={link}
        target="_blank"
        className="lg:w-1/2 w-full cursor-pointer  overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={image}
          alt={title}
          className="w-full object-cover border-2 border-solid rounded-xl border-dark border-opacity-50 h-auto "
        />
      </Link>
      <div className="lg:w-1/2 w-full flex flex-col items-start jusitfy-between lg:pl-6 ">
        <span className="text-dark font-semibold md:text-xl sm:text-lg text-base  dark:text-light opacity-75">
          {type}
        </span>
        <Link className="hover:underline " href={link} target="_blank">
          <h2 className=" w-full text-left lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold hover:underline   ">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium md:text-base text-sm    ">{summary}</p>
        <div className="mt-2 flex items-center justify-between w-full">
          {github === 'private' ? (
            ''
          ) : (
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
          )}
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-base md:text-lg font-semibold"
          >
            <motion.div
              whileHover={{ y: -3 }}
              className="w-auto h-9 flex items-center px-2 border-dark dark:border-light border-2 border-solid rounded-md hover:border-transparent sm:text-base  text-sm"
            >
              Visit Project
              <LinkArrow className="sm:w-6 w-4 ml-2 inline-block" />
            </motion.div>
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, image, link, github }: fptype) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-4 sm:p-6 relative dark:bg-dark dark:border-light ">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-point overflow-hidden rounded-lg"
      >
        <div
          className="absolute inset-0 lg:left-3 left-2 -z-10  w-full top-2 lg:-bottom-3 -bottom-2 rounded-t-3xl rounded-bl-3xl rounded-b-2xl bg-dark dark:bg-light  "
          style={{ zIndex: -10 }}
        />
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={image}
          alt={title}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          className="w-full object-cover border-2 border-solid rounded-xl border-dark border-opacity-50 h-auto dark:border-light"
        />
      </Link>
      <div className="w-full flex flex-col items-start jusitfy-between mt-4">
        <span className="text-dark font-semibold lg:text-xl md:text-lg sm:text-base text-sm  dark:text-light opacity-75">
          {type}
        </span>
        <Link className="hover:underline" href={link} target="_blank">
          <h2 className=" w-full text-left lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold hover:underline   ">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="ml-4 text-lg underline font-semibold"
          >
            Visit
          </Link>
          {github === 'private' ? (
            ''
          ) : (
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>SS | My Projects</title>
        <meta name="description" content="My projects"></meta>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            classname={
              'text-5xl sm:text-6xl  md:text-7xl xl:text-8xl sm:mb-16 mb-8'
            }
          />
          <div className="grid grid-cols-12 xl:gap-24 xl:gap-x-16 lg:gap-x-16 md:gap-x-8 gap-y-24 gap-x-4  ">
            <div className="col-span-12">
              <FeaturedProject
                title="Digitize Nepal"
                image={digitizeNepal}
                summary="Digitize Nepal is a full service agency specialized in digitalizing the businss and make a well recognized brand in market."
                link="https://digitizenepal.net"
                type="Featured Project"
                github="private"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <Project
                title="X8C"
                image={x8c_proj}
                link="https://x8c.vercel.app/"
                type="Personal Project"
                github="https://github.com/sachin-sapkota/x8c"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <Project
                title="Aakhyaan : An Online Education Platform"
                image={aakhyaan_proj}
                link="https://digitizenepal.net"
                type="Organizational"
                github="private"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Job Xa | An Online Job platform"
                image={jobxa_proj}
                summary="Job Xa is an online job platform that connects the client and worker together."
                link="https://online-job-portal.vercel.app/"
                type="Featured Project"
                github="https://github.com/sachin-sapkota/online-job-portal"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <Project
                title="Detour website "
                image={detour_proj}
                link="https://detour.vercel.app/"
                type="Professional Website"
                github="https://github.com/sachin-sapkota/detour-website"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <Project
                title="Clinic Expert"
                image={clinic_expert_proj}
                link="https://landing-page-kappa-lake.vercel.app"
                type="Website"
                github="https://github.com/sachin-sapkota/landing-page-"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;

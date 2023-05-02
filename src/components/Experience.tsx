import { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';

interface detailType {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: detailType) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'center center'],
  });
  return (
    <li
      ref={ref}
      className=" w-3/4 mx-auto  flex flex-col items-center justify-between"
    >
      <figure className="absolute md:-left-4 sm:-left-8 -left-12  ">
        <svg width="80" height="80" viewBox="0 0 100 140">
          <motion.circle
            cx="75"
            cy="50"
            r="28"
            className="stroke-1 stroke-light"
            style={{
              stroke: '#777777',
              strokeWidth: '12px',
              fill: 'none',
              pathLength: scrollYProgress,
            }}
          />
          <motion.circle
            cx="75"
            cy="50"
            r="28"
            style={{
              fill: '#f5f5f5',
              strokeWidth: '5px',
              pathLength: scrollYProgress,
            }}
          />
          <circle
            cx="75"
            cy="50"
            r="13"
            className="animate-pulse"
            style={{ fill: '#563E96', strokeWidth: '5px' }}
          />
        </svg>
      </figure>

      <motion.div
        initial={{ y: 40 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        viewport={{ once: true }}
      >
        <h3 className="capitalize font-bold text-base sm:text-xl lg:text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="text-sm sm:text-base  capitalize font-medium text-dark dark:text-light opacity-75">
          {time} | {address}
        </span>
        <p className="font-medium w-full pt-1.5 text-xs sm:text-sm md:text-base">
          {work}
        </p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className="xl:my-64 lg:my-48 md:my-32  my-20">
      <h2 className="font-bold lg:text-8xl md:text-7xl text-5xl lg:mt-56 md:mt-32 mt-0 w-full text-center ">
        Experience
      </h2>
      <div className="w-full md:w-4/5 mx-auto relative mt-12">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-1 sm:left-5 md:left-9 top-12  w-1 origin-top bg-bothColor  bottom-0 "
        />
        <ul className="w-full flex flex-col gap-8 items-start justify-between ">
          <Details
            position="Software Engineer"
            company="Digitize Nepal"
            time="2021-present"
            address="Lalitpur , Nepal"
            companyLink="http://digitizenepal.net"
            work="As a software engineer at Digitize Nepal, I was responsible for designing, developing, and maintaining various software applications. My primary focus was on creating high-quality, scalable, and efficient code that met the needs of our clients."
          />
          <Details
            position="Front-end Designer"
            company="Web Tech Nepal"
            time="2021-present"
            address="Lalitpur , Nepal"
            companyLink="http://webtechnepal.com"
            work="As a front-end UI/UX designer at Web Tech Nepal, I collaborated with development teams to create visually appealing and user-friendly interfaces. I utilized HTML, CSS, and JavaScript to design and implement responsive websites and applications. My expertise in UX research and design helped improve user engagement and satisfaction."
          />
          <Details
            position="DevOps Engineer"
            company="Varosha Technologies"
            time="2022-present"
            address="Patan , Nepal"
            companyLink="https://varosatech.com/"
            work="As a DevOps at Varosha Technologies, I designed, implemented, and managed automated deployment and infrastructure processes. I collaborated with development teams to enhance software quality and delivery speed. Additionally, I monitored system performance and optimized resource utilization to ensure high availability and scalability."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

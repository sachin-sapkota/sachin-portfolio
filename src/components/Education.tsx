import { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';

interface detailType {
  type: string;
  place: string;
  info: string;
  time: string;
}
const Details = ({ type, time, place, info }: detailType) => {
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
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        viewport={{ once: true }}
      >
        <h3 className="capitalize font-bold text-base sm:text-xl lg:text-2xl">
          {type}
        </h3>
        <span className="text-sm sm:text-base  capitalize font-medium text-dark dark:text-light opacity-75">
          {time} | {place}
        </span>
        <p className="font-medium w-full pt-1.5 text-xs sm:text-sm md:text-base">
          {info}
        </p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className="xl:my-64 lg:my-48 md:my-32  ">
      <h2 className="font-bold lg:text-8xl md:text-7xl text-5xl lg:mt-56 md:mt-32 mt-0 w-full text-center ">
        Education
      </h2>
      <div className="w-full md:w-4/5 mx-auto relative mt-12">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-1 sm:left-5 md:left-9 top-12  w-1 origin-top bg-bothColor h-full "
        />
        <ul className="gap-8 w-full flex flex-col items-start justify-between ">
          <Details
            type="Bachelor of Science in Electronics, Communication and Information Technology"
            time="2019-2025"
            place="Pulchowk Engineering Campus, IOE"
            info="Related courses included Data Structures and Algorithm, Computer system Engineering and Artificial Intelligence. "
          />
          <Details
            type="AWS Cloud Technical Essentials"
            time="2021-2022"
            place="AWS | Coursera"
            info="It covers the basic concepts of cloud computing and Amazon Web Services (AWS) infrastructure. The course includes hands-on exercises for creating and managing AWS resources, understanding pricing models, security, and storage options, and deploying applications on AWS."
          />
          <Details
            type="Front-end Development using ReactJS"
            time="2020-2020"
            place="Meta | Coursera"
            info="It covers the basics of ReactJS and its various features, including JSX syntax, component-based architecture, state and props management, and event handling. The course also covers best practices for building responsive and dynamic user interfaces."
          />
          <Details
            type="Back-end Development using NodeJS"
            time="2020-2020"
            place="Meta | Coursera"
            info="It covers the fundamentals of Node.js and its various modules for building scalable and efficient server-side applications. The course also covers database integration, RESTful API development, authentication, and security best practices."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;

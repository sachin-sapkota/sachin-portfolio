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
      className="my-8 first:mt-0 last:mb-0 w-3/5 mx-auto  flex flex-col items-center justify-between"
    >
      <figure className="absolute -left-4 ">
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
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark opacity-75 dark:text-light ">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
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
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div className="w-4/5 mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="bg-bothColor absolute left-9 top-12  w-1 origin-top  h-full  "
        />
        <ul className="w-full flex flex-col items-start justify-between ">
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

import { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';

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
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-3/5 mx-auto  flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 40 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark opacity-75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
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
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div className="w-4/5 mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-9 top-12  w-1 origin-top bg-dark h-full"
        />
        <ul className="w-full flex flex-col items-start justify-between ">
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

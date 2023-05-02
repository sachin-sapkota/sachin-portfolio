import { useRef, useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
// import useThemeSwitcher from './hooks/useThemeSwitcher';
import { themeContext } from '../context/themeContext';
interface skillType {
  name: string;
  x: string;
  y: string;
}
const Skill = ({ name, x, y }: skillType) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-bold md:py-3 md:px-6 px-2 py-1  shadow-sm  sm:bg-dark sm:text-light cursor-pointer absolute sm:dark:bg-white sm:dark:text-dark md:text-base  text-sm sm:py-1.5 sm:px-3 
      bg-transparent text-dark dark:text-light dark:bg-transparent 
      "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  const { mode } = useContext(themeContext);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <h2 className="font-bold lg:text-8xl md:text-7xl text-5xl lg:mt-56 md:mt-32 mt-24 w-full text-center ">
        Skills
      </h2>
      <div
        ref={ref}
        className={`${
          mode === 'dark'
            ? ' md:bg-circularDarkLg sm:bg-circularDarkMd bg-circularDarkSm   '
            : 'md:bg-circularLightLg sm:bg-circularLightMd bg-circularLightSm '
        } w-full md:h-screen h-96  relative flex items-center justify-center rounded-full  `}
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold lg:p-8 md:p-5 sm:p-4 p-2 shadow-sm   text-light cursor-pointer dark:text-dark dark:bg-light bg-dark"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20VW" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-18vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-28vw" y="-15vw" />
        <Skill name="Tailwind CSS" x="20vw" y="-12vw" />
        <Skill name="Web Design" x="29vw" y="-20vw" />
        <Skill name="Figma" x="0vw" y="-10vw" />
        <Skill name="Firebase" x="-29vw" y="18vw" />

        <Skill name="AWS Lightsail" x="1vw" y="28vw" />
        <Skill name="Mongodb" x="18vw" y="18vw" />
        <Skill name="AWS Lambda" x="40vw" y="5vw" />
        <Skill name="AWS EC2" x="-38VW" y="2vw" />
      </div>
    </>
  );
};

export default Skills;

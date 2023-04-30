import { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';
interface skillType {
  name: string;
  x: string;
  y: string;
}
const Skill = ({ name, x, y }: skillType) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold py-3 px-6  shadow-sm  bg-dark text-light cursor-pointer absolute "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { mode, toggleMode } = useThemeSwitcher();
  // console.log(window.localStorage.getItem('theme'));
  // // if (mode === 'dark') {
  // //   ref.current?.classList.add('bg-circularDark');
  // // } else {
  // //   ref.current?.classList.remove('bg-circularDark');
  // //   ref.current?.classList.add('bg-circularLight');
  // // }
  // const [theme, setTheme] = useState<string | null>('');
  // const themes = window.localStorage.getItem('theme');
  // const getTheme = useCallback(() => {
  //   setTheme(themes);
  // }, [themes]);
  // useEffect(() => {
  //   const userPref = window.localStorage.getItem('theme');
  //   console.log(userPref);
  //   setTheme(userPref);
  // }, [getTheme]);

  // console.log(themes);
  console.log(mode);

  return (
    <>
      <h2 className="font-bold text-8xl mt-56 w-full text-center ">Skills</h2>
      <div
        ref={ref}
        className={`w-full h-screen relative flex items-center justify-center rounded-full  `}
        style={{
          backgroundImage:
            'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)',
        }}
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold p-8 shadow-sm   text-light cursor-pointer dark:text-dark "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20VW" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-18vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-28vw" y="-15vw" />
        <Skill name="Tailwind CSS" x="15vw" y="-12vw" />
        <Skill name="Web Design" x="29vw" y="-14vw" />
        <Skill name="Figma" x="0vw" y="-10vw" />
        <Skill name="Firebase" x="-25vw" y="18vw" />

        <Skill name="AWS Lightsail" x="1vw" y="28vw" />
        <Skill name="Mongodb" x="18vw" y="18vw" />
        <Skill name="AWS Lambda" x="35vw" y="5vw" />
        <Skill name="AWS EC2" x="-33VW" y="2vw" />
      </div>
    </>
  );
};

export default Skills;

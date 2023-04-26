import React from 'react';
import { motion } from 'framer-motion';
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
  return (
    <>
      <h2 className="font-bold text-8xl mt-56 w-full text-center ">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold p-8 shadow-sm  bg-dark text-light cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-25VW" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-18vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="React35" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-28vw" y="-15vw" />
        <Skill name="Gatsby35" x="15vw" y="-12vw" />
        <Skill name="Web Design" x="32vw" y="-5vw" />
        <Skill name="Figma" x="0vw" y="-10vw" />
        <Skill name="Firebase" x="-25vw" y="18vw" />
        <Skill name="Tailwind CSS" x="18vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;

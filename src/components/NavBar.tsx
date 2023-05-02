import { useContext, useState, useRef } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
interface CustomLinkProps {
  href: string;
  title: string;
  className?: any;
  toggle?: any;
}
import { TwitterIcon, GithubIcon, LinkedInIcon, MoonIcon } from './icons';
import { themeContext } from '../context/themeContext';
import Image from 'next/image';

const CustomLink = ({ href, title, className = ' ' }: CustomLinkProps) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className}   group relative`} title={title}>
      {title}
      <span
        className={`${
          router.asPath === href ? 'w-full' : 'w-0'
        }      rounded-full bg-dark absolute left-0  -bottom-0.5 group-hover:w-full ease-linear duration-300 dark:bg-light`}
        style={{ height: '2px' }}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({
  href,
  title,
  className = ' ',
  toggle,
}: CustomLinkProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(href);
    toggle();
  };

  return (
    <button
      style={{ outline: 'none' }}
      onClick={handleClick}
      className={`${className} text-xl font-semibold my-1  group relative`}
      title={title}
    >
      {title}
      <span
        className={`${
          router.asPath === href ? 'w-full' : 'w-0'
        }      rounded-full bg-light dark:bg-dark absolute left-0  -bottom-0.5 group-hover:w-full ease-linear duration-300 `}
        style={{ height: '2px' }}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const { mode, toggleMode } = useContext(themeContext);
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const ref1 = useRef<any>(null);
  const ref2 = useRef<any>(null);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="dark:text-light w-full py-8 font-medium flex justify-between  relative px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 z-10 ">
      <button
        className=" flex-col justify-center items-center lg:hidden flex h-6"
        onClick={handleClick}
        style={{ outline: 'none' }}
      >
        <span
          className="bg-dark dark:bg-light block h-1 w-9 rounded-full   transition duration-150 ease-out"
          style={{
            transform: isOpen ? 'rotate(45deg) translate(1px, 0px)' : 'none',
          }}
        />
        <span
          className="bg-dark  dark:bg-light   h-1 w-9 rounded-full  my-1.5  transition duration-150 ease-out"
          style={{
            display: isOpen ? 'none' : 'block ',
          }}
        />
        <span
          className="bg-dark dark:bg-light block h-1 w-9 rounded-full  transition duration-150 ease-out"
          style={{
            transform: isOpen ? 'rotate(-45deg) translate(1px, -2px)' : 'none',
          }}
        />
      </button>
      <div className="w-full justify-between items-center lg:flex hidden ">
        <nav>
          <CustomLink
            href="/"
            title="Home"
            className="md:mr-4 mr-3   font-bold text-lg"
          />
          <CustomLink
            href="/about"
            title="About"
            className="md:mx-4 mr-3  font-bold text-lg"
          />
          <CustomLink
            href="/projects"
            title="Projects"
            className="md:mx-4 mr-3  font-bold text-lg"
          />
          <CustomLink
            href="/articles"
            title="Articles"
            className="md:ml-4 mr-3  font-bold text-lg"
          />
        </nav>

        <nav className="flex items-center justify-center flex-wrap ">
          <motion.a
            href="https://twitter.com"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/sachin-sapkota"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sachin-sapkota-2223a8215/"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>

          <button
            style={{ outline: 'none' }}
            title="Theme Changer"
            className={`${
              mode === 'dark' ? 'bg-light' : 'bg-black'
            } border-2 border-solid ml-4  flex items-center justify-center rounded-full p-1 select-none `}
            onClick={() => toggleMode()}
          >
            {mode === 'dark' ? (
              <Image src="/images/sunIcon.svg" alt="" width={20} height={20} />
            ) : (
              <MoonIcon />
            )}
          </button>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 1, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className=" flex flex-col gap-5 justify-center items-center fixed top-1/2 left-1/2  z-30 bg-dark dark:text-dark  text-light bg-opacity-75 rounded-lg  py-32 text-center dark:bg-light dark:bg-opacity-75 "
          style={{
            minWidth: '80vw',
            transform: 'translate(-50%,-50%)',
            backdropFilter: 'blur(5px)',
          }}
        >
          <nav className="flex items-center flex-col justify-center text-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap ">
            <motion.a
              href="https://twitter.com"
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com/sachin-sapkota"
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sachin-sapkota-2223a8215/"
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <LinkedInIcon />
            </motion.a>

            <button
              title="Theme Changer"
              className={`${
                mode === 'dark' ? 'bg-light' : 'bg-black'
              } border-2 border-solid ml-4  flex items-center justify-center rounded-full p-1 select-none `}
              onClick={() => toggleMode()}
            >
              {mode === 'dark' ? (
                <Image
                  src="/images/sunIcon.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              ) : (
                <MoonIcon />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div
        className="absolute top-1 left-1/2"
        style={{ transform: 'translate(-50%,0)' }}
      >
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;

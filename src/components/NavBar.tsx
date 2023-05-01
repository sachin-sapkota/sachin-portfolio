import { useContext, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
interface CustomLinkProps {
  href: string;
  title: string;
  className?: any;
}
import {
  TwitterIcon,
  DribbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
} from './icons';
import { themeContext } from '../context/themeContext';
// import { useThemeSwitcher } from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = ' ' }: CustomLinkProps) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className}  group relative`} title={title}>
      {title}
      <span
        className={`${
          router.asPath === href ? 'w-full' : 'w-0'
        }      rounded-full bg-light absolute left-0  -bottom-0.5 group-hover:w-full ease-linear duration-300 dark:bg-light`}
        style={{ height: '1.5px' }}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  // const { mode, toggleMode } = useThemeSwitcher();
  const { mode, toggleMode } = useContext(themeContext);
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);

  return (
    <header className="dark:text-light w-full px-32 py-8 font-medium flex justify-between  ">
      <button
        className="flex flex-col justify-center items-center"
        onClick={handleClick}
      >
        <span
          className={`bg-dark rotate-45 dark:bg-light block h-0.5 w-9 rounded-sm  ${
            isOpen ? ' translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-9 rounded-sm my-1 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-9 rounded-sm  ${
            isOpen ? ' -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <div
        className="absolute top-3 left-1/2"
        style={{ transform: 'translate(-50%,0)' }}
      >
        <Logo />
      </div>
      <nav className="flex items-center justify-center flex-wrap ">
        <motion.a
          href="/"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="/"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="/"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="/"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <DribbleIcon />
        </motion.a>
        <motion.a
          href="/"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3"
        >
          <PinterestIcon />
        </motion.a>
        <button
          title="Theme Changer"
          className={`${
            mode === 'dark' ? 'bg-light' : 'bg-black'
          } border-2 border-solid ml-4  flex items-center justify-center rounded-full p-1 select-none `}
          onClick={() => toggleMode()}
        >
          {mode === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </nav>
    </header>
  );
};

export default NavBar;

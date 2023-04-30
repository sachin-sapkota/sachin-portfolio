import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import NavBar from '@/src/components/NavBar';
import Head from 'next/head';
import 'typeface-montserrat';
import Footer from '@/src/components/Footer';
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' });
import { createContext, useContext } from 'react';
import useThemeSwitcher from '@/src/components/hooks/useThemeSwitcher';
const themeContext = createContext('');
export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} dark:bg-dark  bg-light w-full min-h-screen font-sans`}
      >
        <themeContext.Provider value={mode}>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </themeContext.Provider>
      </main>
    </>
  );
}

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import NavBar from '@/src/components/NavBar';
import Head from 'next/head';
import 'typeface-montserrat';
import Footer from '@/src/components/Footer';
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' });
import { ThemeProvider } from '@/src/context/themeContext';
import { useEffect } from 'react';
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const d = window.localStorage.getItem('theme');
    console.log(d, 'hello');
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} dark:bg-dark  bg-light w-full min-h-screen font-sans`}
      >
        <ThemeProvider>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </main>
    </>
  );
}

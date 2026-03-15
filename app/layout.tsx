import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Montserrat, Poppins } from 'next/font/google';
import type { ReactNode } from 'react';
import Footer from '@/src/components/Footer';
import NavBar from '@/src/components/NavBar';
import { ThemeProvider } from '@/src/context/themeContext';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const themeScript = `
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
`;

export const metadata: Metadata = {
  title: 'Sachin Sapkota',
  description: 'Portfolio site built with Next.js, Tailwind CSS, and Framer Motion.',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${montserrat.variable}`}
    >
      <body className="bg-light text-dark antialiased dark:bg-primary dark:text-light">
        <Script id="theme-changer" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <ThemeProvider>
          <main className="dark:bg-primary bg-light w-full min-h-screen font-mont relative">
            <NavBar />
            <div className="flex min-h-screen flex-col">
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

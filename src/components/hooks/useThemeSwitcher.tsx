// import { useState, useEffect } from 'react';

// const useThemeSwitcher = () => {
//   const preferDarkQuery = '(prefer-color-scheme: dark)';
//   const [mode, setMode] = useState('dark');
//   useEffect(() => {
//     const mediaQuery = window.matchMedia(preferDarkQuery);
//     const userPref = window.localStorage.getItem('theme');
//     const handleChange = () => {
//       if (userPref) {
//         let check = userPref === 'dark' ? 'dark' : 'light';
//         setMode(check);
//         if (check === 'dark') {
//           document.documentElement.classList.add('dark');
//         } else {
//           document.documentElement.classList.remove('dark');
//         }
//       } else {
//         let check = mediaQuery.matches ? 'dark' : 'light';
//         setMode(check);
//         if (check === 'dark') {
//           document.documentElement.classList.add('dark');
//         } else {
//           document.documentElement.classList.remove('dark');
//         }
//       }
//     };
//     handleChange();
//     mediaQuery.addEventListener('change', handleChange);
//     return () => mediaQuery.removeEventListener('change', handleChange);
//   }, []);

//   useEffect(() => {
//     if (mode === 'dark') {
//       window.localStorage.setItem('theme', 'dark');
//       document.documentElement.classList.add('dark');
//     } else {
//       window.localStorage.setItem('theme', 'light');
//       document.documentElement.classList.remove('dark');
//     }
//   }, [mode]);

//   return [mode, setMode];
// };

// export default useThemeSwitcher;

import { useEffect, useState } from 'react';

export const useThemeSwitcher = () => {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      setMode(savedMode);
    } else {
      setMode('light');
    }
  }, []);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme', newMode);
  };
  useEffect(() => {
    if (mode === 'dark') {
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  return { mode, toggleMode };
};

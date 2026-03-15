"use client";

import {
  createContext,
  useContext,
  useEffect,
  type ReactNode,
} from 'react';

type ThemeMode = 'light' | 'dark';

interface ThemeContextValue {
  toggleMode: () => void;
}

const themeContext = createContext<ThemeContextValue | null>(null);

const applyTheme = (mode: ThemeMode) => {
  document.documentElement.classList.toggle('dark', mode === 'dark');
  window.localStorage.setItem('theme', mode);
};

const getPreferredTheme = (): ThemeMode => {
  const savedMode = window.localStorage.getItem('theme');

  if (savedMode === 'light' || savedMode === 'dark') {
    return savedMode;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    applyTheme(getPreferredTheme());
  }, []);

  const toggleMode = () => {
    const nextMode: ThemeMode = document.documentElement.classList.contains(
      'dark'
    )
      ? 'light'
      : 'dark';

    applyTheme(nextMode);
  };

  return (
    <themeContext.Provider value={{ toggleMode }}>{children}</themeContext.Provider>
  );
};

export const useThemeContext = () => {
  const value = useContext(themeContext);

  if (!value) {
    throw new Error('useThemeContext must be used within ThemeProvider');
  }

  return value;
};

export { themeContext };

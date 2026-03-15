"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

type ThemeMode = 'light' | 'dark';

interface ThemeContextValue {
  mode: ThemeMode;
  mounted: boolean;
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
  const [mode, setMode] = useState<ThemeMode>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const nextMode = getPreferredTheme();
    setMode(nextMode);
    applyTheme(nextMode);
    setMounted(true);
  }, []);

  const toggleMode = () => {
    setMode((currentMode) => {
      const nextMode = currentMode === 'dark' ? 'light' : 'dark';
      applyTheme(nextMode);
      return nextMode;
    });
  };

  return (
    <themeContext.Provider value={{ mode, mounted, toggleMode }}>
      {children}
    </themeContext.Provider>
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

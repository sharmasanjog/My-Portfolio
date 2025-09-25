import { useState, useEffect } from 'react';

export const useTheme = (onChange?: (isDark: boolean) => void) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved
        ? saved === 'dark'
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    const applyTheme = (dark: boolean) => {
      if (dark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      localStorage.setItem('theme', dark ? 'dark' : 'light');
      if (onChange) onChange(dark);
    };

    applyTheme(isDark);

    // Listen to system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => applyTheme(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [isDark, onChange]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return { isDark, toggleTheme };
};

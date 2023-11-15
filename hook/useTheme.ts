import { useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark';

interface ThemeHook {
  setLightMode: () => void;
  setDarkMode: () => void;
  isDark: boolean;
}

const useTheme = (): ThemeHook => {
  // Use a function to get the initial theme value
  const getInitialTheme = (): Theme => {
    try {
      if (typeof localStorage !== 'undefined'){
        const storedTheme = localStorage.theme as Theme | undefined;
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return storedTheme || (prefersDarkMode ? 'dark' : 'light');
      } else {
        return 'light';
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      return 'light'; // Default to 'light' if there's an error
    }
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  
  const applyTheme = useCallback((selectedTheme: Theme) => {
    // Update the theme state and localStorage
    setTheme(selectedTheme);
    localStorage.theme = selectedTheme;

    // Apply theme to the DOM or other side effects if needed
    document.documentElement.classList.toggle('dark', selectedTheme === 'dark');
  }, []);

  useEffect(() => {
    // Apply the initial theme on component mount
    applyTheme(theme);

    // Cleanup function (if needed)
    return () => {
      // Any cleanup logic here
    };
  }, [applyTheme, theme]);

  const themeHook: ThemeHook = {
    setLightMode: () => applyTheme('light'),
    setDarkMode: () => applyTheme('dark'),
    isDark: theme === 'dark',
  };

  return themeHook;
};

export default useTheme;

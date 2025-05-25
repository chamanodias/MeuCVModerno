// context/ThemeContext.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Appearance } from 'react-native';
import appColors from '../constants/Colors'; // Nosso arquivo de cores

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  themeMode: ThemeMode;
  colors: typeof appColors.light; // Define que o objeto 'colors' terá a mesma estrutura que appColors.light
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const systemColorScheme = Appearance.getColorScheme() || 'light';
  const [themeMode, setThemeMode] = useState<ThemeMode>(systemColorScheme);

  useEffect(() => {
    const listener = ({ colorScheme }: Appearance.AppearancePreferences) => {
      setThemeMode(colorScheme || 'light');
    };
    const subscription = Appearance.addChangeListener(listener);
    return () => subscription.remove();
  }, []);

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const colors = themeMode === 'dark' ? appColors.dark : appColors.light;
  const isDarkMode = themeMode === 'dark';

  return (
    <ThemeContext.Provider value={{ themeMode, colors, toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
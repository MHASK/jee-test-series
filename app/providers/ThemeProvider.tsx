'use client';

import { createContext, useContext, useState } from 'react';

interface ThemeContextType {
  colorScheme: string;
  setColorScheme: (scheme: string) => void;
  getGradient: (scheme: string) => { from: string; to: string };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const colorSchemes = {
  blue: {
    from: '#2563EB',
    to: '#0EA5E9',
  },
  purple: {
    from: '#8B5CF6',
    to: '#D946EF',
  },
  green: {
    from: '#059669',
    to: '#34D399',
  },
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useState('blue');

  const getGradient = (scheme: string) => colorSchemes[scheme as keyof typeof colorSchemes];

  return (
    <ThemeContext.Provider value={{ colorScheme, setColorScheme, getGradient }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 
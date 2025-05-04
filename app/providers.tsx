'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type Language = 'ko' | 'en';

interface ContextType {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

const Context = createContext<ContextType | undefined>(undefined);

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Language>('ko');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedLanguage = localStorage.getItem('language') as Language;
    
    if (savedTheme) setTheme(savedTheme);
    if (savedLanguage) setLanguage(savedLanguage);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
      console.log('Theme changed to:', theme);
    }
  }, [theme, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language);
      console.log('Language changed to:', language);
    }
  }, [language, mounted]);

  const toggleTheme = () => {
    console.log('Toggling theme from:', theme);
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    console.log('Toggling language from:', language);
    setLanguage(prev => prev === 'ko' ? 'en' : 'ko');
  };

  if (!mounted) {
    return null;
  }

  return (
    <Context.Provider value={{ theme, language, toggleTheme, toggleLanguage }}>
      {children}
    </Context.Provider>
  );
}

export function useTheme() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('useTheme must be used within a Provider');
  }
  return context;
} 
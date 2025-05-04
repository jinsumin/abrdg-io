'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiSun, FiMoon } from 'react-icons/fi';
import { IoLanguage } from 'react-icons/io5';
import { useTheme } from '../providers';

export default function Header() {
  const { theme, language, toggleTheme, toggleLanguage } = useTheme();

  const handleThemeToggle = () => {
    console.log('Theme toggle clicked'); // 디버깅용
    toggleTheme();
  };

  const handleLanguageToggle = () => {
    console.log('Language toggle clicked'); // 디버깅용
    toggleLanguage();
  };

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/abrdg_logo.jpeg"
                alt="abrdg.x logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">abrdg.x</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</Link>
              <Link href="#services" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Services</Link>
              <Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</Link>
            </nav>
            <button 
              onClick={handleLanguageToggle}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              title={language === 'ko' ? 'Switch to English' : '한국어로 전환'}
            >
              <IoLanguage className="w-5 h-5" />
            </button>
            <button 
              onClick={handleThemeToggle}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              title={theme === 'light' ? 'Switch to Dark Mode' : '라이트 모드로 전환'}
            >
              <FiSun className="w-5 h-5 dark:hidden" />
              <FiMoon className="w-5 h-5 hidden dark:block" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 
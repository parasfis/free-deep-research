'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { enLocale } from '@/locales/en';

// Remove zh from language types
export type LanguageType = 'en';

// Define available languages
export const LANGUAGES: Record<LanguageType, string> = {
  en: 'English',
};

// Create language context
const LanguageContext = createContext<LanguageContextType | null>(null);

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: string) => string;
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Default to English only
  const [language, setLanguageState] = useState<LanguageType>('en');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedLanguage = localStorage.getItem('language') as LanguageType;
    if (savedLanguage && Object.keys(LANGUAGES).includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: LanguageType) => {
    setLanguageState(lang);
    if (isClient) {
      localStorage.setItem('language', lang);
    }
  };

  // Get translations (only English now)
  const translations = enLocale;

  // Translation function
  const t = (key: string) => {
    const keys = key.split('.');
    let result: any = translations;

    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        return key; // Return the key if translation not found
      }
    }

    return typeof result === 'string' ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// If there's a language switcher UI component in this file, update it to only show English
// For example, if there's a component like this:

export const LanguageSwitcherUI: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  
  // Since we only have English now, this component might not be needed anymore
  // You could either remove it or simplify it to just show the current language
  
  return (
    <div className="language-switcher">
      <span>Language: {LANGUAGES[language]}</span>
    </div>
  );
};

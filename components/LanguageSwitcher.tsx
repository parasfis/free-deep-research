'use client';

import React, { createContext, useContext } from 'react';
import { enLocale } from '@/locales/en';

// Create language context
const LanguageContext = createContext<LanguageContextType | null>(null);

interface LanguageContextType {
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
  // Translation function
  const t = (key: string) => {
    const keys = key.split('.');
    let result: any = enLocale;

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
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Remove the LanguageSwitcherUI component as it's no longer needed

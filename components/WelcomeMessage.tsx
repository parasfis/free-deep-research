import React from 'react';
import { useLanguage } from './LanguageSwitcher';
import Image from 'next/image';

interface WelcomeMessageProps {
  show: boolean;
  onEdgeOneAIBtnClick: () => void;
}

export const WelcomeMessage: React.FC<WelcomeMessageProps> = ({
  show,
  onEdgeOneAIBtnClick,
}) => {
  const { t } = useLanguage();

  if (!show) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      {/* Banner Image */}
      <div className="w-full max-w-5xl mb-8">
        <Image
          src="/images/banner.jpg"
          alt="TEAM: SPARK TITANS"
          width={1024}
          height={200}
          className="w-full rounded-lg shadow-md"
          priority
        />
      </div>
      
      <div className="max-w-3xl px-4 mx-auto text-center">
        <h2 className="mb-2 text-2xl font-semibold text-gray-800">
          {t('welcome.title')}
        </h2>
        <p className="text-gray-600">{t('welcome.description')}</p>
      </div>
    </div>
  );
};

// Remove the LanguageSwitcher import and component usage
// For example:

import React from 'react';
import { useLanguage } from './LanguageSwitcher';

interface HeaderProps {
  onGithubBtnClick: () => void;
  onDeployBtnClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onDeployBtnClick,
  onGithubBtnClick,
}) => {
  const { t } = useLanguage();

  return (
    <header>
      <div className="flex items-center justify-between max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-lg font-medium text-gray-900"></span>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={onGithubBtnClick}
            className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <span>{t('buttons.github')}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

import { useState, useLayoutEffect, useCallback } from 'react';
import { setLanguageDirection } from '../utils/setLanguageDirection';
import { LocalStorageEnum } from '../enums/LocalStorage';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import ar from '../../../assets/language/ar.svg';
import en from '../../../assets/language/en.svg';

export const useChangeLanguage = () => {
  const language =
    (getLocalStorage(LocalStorageEnum.LANGUAGE_KEY) as string) ?? 'en';

  const [currentLanguage, setCurrentLanguage] = useState<string>(language);

  useLayoutEffect(() => {
    setLanguageDirection(currentLanguage);
    setLocalStorage(LocalStorageEnum?.LANGUAGE_KEY, currentLanguage);
  }, [currentLanguage]);

  const changeLanguage = useCallback((newLanguage: string) => {
    setCurrentLanguage(newLanguage);
  }, []);

  return { currentLanguage, changeLanguage };
};

export const languageOptions = [
  { code: 'ar', icon: ar, label: 'Arabic' },
  { code: 'en', icon: en, label: 'English' },
];

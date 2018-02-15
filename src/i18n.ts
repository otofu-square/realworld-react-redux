import * as i18next from 'i18next';
import * as LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

import { en, ja } from './locales';

const lngDetector = new LanguageDetector(null, {
  order: ['localStorage', 'cookie'],
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18next',
  caches: ['localStorage', 'cookie'],
});

export const i18n = i18next
  .use(lngDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'ja',
    resources: {
      ja,
      en,
    },
    interpolation: {
      escapeValue: false,
    },
    parseMissingKeyHandler: (key: string) => key,
    debug: process.env.NODE_ENV === 'development',
  });

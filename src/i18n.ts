import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { en, ja } from "~/locales";

const lngDetector = new LanguageDetector(null, {
  order: ["localStorage", "cookie"],
  lookupCookie: "i18next",
  lookupLocalStorage: "i18next",
  caches: ["localStorage", "cookie"]
});

export default i18next
  .use(lngDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ja",
    resources: {
      ja,
      en
    },
    interpolation: {
      escapeValue: false
    },
    parseMissingKeyHandler: (key: string) => key,
    debug: process.env.NODE_ENV === "development"
  });

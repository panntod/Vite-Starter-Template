import i18n, { type InitOptions } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// Import translations
import translationEN from "../locales/en.json";
import translationID from "../locales/id.json";

export const resources = {
  en: translationEN,
  id: translationID
} as const;

const isProduction = process.env.NODE_ENV === "production";

const i18nOptions: InitOptions = {
  resources,
  debug: !isProduction,
  fallbackLng: "en",
  supportedLngs: ["en", "id"],
  nonExplicitSupportedLngs: true,
  interpolation: {
    escapeValue: false
  }
};

void i18n.use(initReactI18next).use(LanguageDetector).init(i18nOptions);

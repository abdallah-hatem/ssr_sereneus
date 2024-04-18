import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import { default as en } from "./lib/lang/EN"
import { default as pt } from "./lib/lang/PT"

const resources = {
  en: {
    translation: en,
  },
  pt: {
    translation: pt,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "pt",
    fallbackLng: "pt",
    resources,
    react: {
      useSuspense: false,
    },
    compatibilityJSON: "v3",
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n

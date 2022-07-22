import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "i18n/en/strings.json";
import pl from "i18n/pl/strings.json";

i18n.use(initReactI18next).init({
  lng: "en-US",
  fallbackLng: "en",
  debug: false,
  resources: {
    en: {
      translation: en,
    },
    pl: {
      translation: pl,
    },
  },
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;

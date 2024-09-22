import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en/en.json";
import id from "./translations/id/id.json";
import ms from "./translations/ms/ms.json";

const resources = {
  en: en,
  id: id,
  ms: ms,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

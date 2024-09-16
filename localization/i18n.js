import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import id from "./translations/id.json";
import ms from "./translations/ms.json";

const resources = {
  en: en,
  id: id,
  ms: ms,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: "en",
  fallbackLng: "id",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

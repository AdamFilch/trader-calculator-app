import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { default as en } from "./translations/en.json";
import { default as id } from "./translations/id.json";
import { default as ms } from "./translations/ms.json";

const resources = {
  en: {
    translation: en,
  },
  id: {
    translation: id,
  },
  ms: {
    translation: ms,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

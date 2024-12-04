import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../components/utils/en.json";
import id from "../components/utils/id.json";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
        en: { translation: en },
        id: { translation: id }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;

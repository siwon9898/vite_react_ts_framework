import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import I18NextHttpBackend from "i18next-http-backend";
import indexKr from './ko/index.json';
import indexEn from './en/index.json';

i18next.use(I18NextHttpBackend).use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
    resources: {
        ko: {
            index: indexKr
        },
        en: {
            index: indexEn
        },
    },
    fallbackLng: 'ko',
    debug: true,
    interpolation: {
        escapeValue: false,
    },
    keySeparator: '.'
});

export default i18next;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar las traducciones
import esTranslations from '../locales/es/common.json';
import enTranslations from '../locales/en/common.json';

const resources = {
  es: {
    common: esTranslations,
  },
  en: {
    common: enTranslations,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: typeof window !== 'undefined' ? localStorage.getItem('i18nextLng') || 'es' : 'es',
    fallbackLng: 'es',
    defaultNS: 'common',

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

// Save language preference to localStorage
i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('i18nextLng', lng);
  }
});

export default i18n;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './Languages/English.json';
import hi from './Languages/Hindi.json';
import de from './Languages/Dutch.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      de: { translation: de },
    },
    lng: 'en', // Set the language code here, not the entire language object
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

import i18next from "i18next";
import en from "./en.json";
import pl from "./pl.json";
i18next.init({
  interpolation: {
    // React already does escaping
    escapeValue: false
  },
  lng: "en", // 'en' | 'es'
  // Using simple hardcoded resources for simple example
  resources: {
    en: {
      translation: en
    },
    pl: {
      translation: pl
    }
  }
});

export default i18next;

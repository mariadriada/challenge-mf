import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const initTranslate = (
  resources: {} = {
    es: {
      translation: {
        "Show Rick And Morty characters":
          "Mostrar personajes de Rick and Morty",
        "Show Harry Potter Characters": "Mostrar personajes de Harry Potter",
        "Select languaje:": "Seleccioner idioma",
        Spanish: "Español",
        English: "Inglés",
      },
    },
  }
) => {
  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
};

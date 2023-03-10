import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const initTranslate = (
  resources: {} = {
    es: {
      translation: {
        "Show Rick And Morty characters":
          "Mostrar personajes de Rick and Morty",
        "Show Harry Potter characters": "Mostrar personajes de Harry Potter",
        "Select languaje:": "Seleccioner idioma",
        Spanish: "Español",
        English: "Inglés",
        Gender: "Género",
        Species: "Especie",
        Status: "Estado",
        House: "Casa",
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

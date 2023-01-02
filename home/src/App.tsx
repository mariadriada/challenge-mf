import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { Global, css } from "@emotion/react";

import { router } from "./router";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: {
        "Show Rick And Morty characters":
          "Mostrar personajes de Rick and Morty",
        "Show Harry Potter Characters": "Mostrar personajes de Harry Potter",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

const App = () => (
  <>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}
    />
    <RouterProvider router={router} />
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));

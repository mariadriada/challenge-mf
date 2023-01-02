import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { Global, css } from "@emotion/react";

import { router } from "./router";
import { initTranslate } from "./general/translate";

initTranslate();

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

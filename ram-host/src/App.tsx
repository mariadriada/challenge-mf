import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/react";

import ListPage from "./pages/ListPage";

import "./index.css";

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
    <ListPage />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));

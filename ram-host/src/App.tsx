import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/react";

import { RickAndMortyList } from "./screens";
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

    <RickAndMortyList />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));

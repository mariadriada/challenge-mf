import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/react";

import { GlobalStoreProvider } from "store/store";
import { RAMStoreProvider } from "./redux-toolkit/store";
import { RickAndMortyList } from "./screens";
import "./index.css";

const App = () => {
  return (
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
      <GlobalStoreProvider>
        <RAMStoreProvider>
          <RickAndMortyList />
        </RAMStoreProvider>
      </GlobalStoreProvider>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));

import React from "react";
import ReactDOM from "react-dom";

import { HPStoreProvider } from "./redux-toolkit/store";
import { HarryPotterList } from "./screens";

import "./index.css";

const App = () => (
  <HPStoreProvider>
    <HarryPotterList />
  </HPStoreProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));

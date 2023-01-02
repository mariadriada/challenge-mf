import React from "react";
import ReactDOM from "react-dom";
import TestComponent from "./TestComponent";

import { GlobalStoreProvider } from "./store";

const App = () => {
  return (
    <GlobalStoreProvider>
      <div>Global Store</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
      <TestComponent />
    </GlobalStoreProvider>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));

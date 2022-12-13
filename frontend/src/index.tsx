import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as BRouters } from "react-router-dom";
import { AppGlobal } from "./style/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BRouters>
    <AppGlobal />
    <App />
  </BRouters>
);

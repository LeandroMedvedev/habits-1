import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./Styles/GlobalStyles";
import Providers from "./Providers/index";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Providers>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);

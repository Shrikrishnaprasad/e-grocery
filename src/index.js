import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { AppProvider } from "./context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  // <AppProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </AppProvider>
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./store/index";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Router from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <HashRouter>
    <Provider store={store}>
      <Router />
    </Provider>
  </HashRouter>
  // </React.StrictMode>
);

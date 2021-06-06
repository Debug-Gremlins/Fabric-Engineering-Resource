import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

ReactDOM.render(
  <BrowserRouter basename="Debug-Gremlins/Fabric-Engineering-Resource">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// process.env.PUBLIC_URL;

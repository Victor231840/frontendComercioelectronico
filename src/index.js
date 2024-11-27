import React from "react";
import ReactDOM from "react-dom/client";  // Aquí está el cambio
import { BrowserRouter } from "react-router-dom";
import "./styless/index.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Se usa createRoot desde react-dom/client
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
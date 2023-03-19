import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ScrollPositionProvider from "./Context/ScrollPosition";
import ThemeContextProvider from "./Context/ColorContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ScrollPositionProvider>
        <App />
      </ScrollPositionProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);

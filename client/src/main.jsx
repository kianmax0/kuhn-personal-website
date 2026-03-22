import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import App from "./components/App";
import "./styles.css";

const routerBasename =
  import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <BrowserRouter basename={routerBasename}>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

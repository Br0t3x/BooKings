import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@/styles/constants.css";
import { Settings, settings } from "@contexts/settings";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Settings.Provider value={settings}>
      <App />
    </Settings.Provider>
  </React.StrictMode>,
);
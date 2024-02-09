import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { AppProvider } from "./context/AppContext";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <Toaster richColors/>
      <App/>
    </AppProvider>
  </React.StrictMode>,
);
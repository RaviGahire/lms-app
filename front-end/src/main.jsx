import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContextProvider from "./contexts/ContextProvider";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./UI/components/App/App";
import "@fontsource-variable/lexend/index.css";
import "@fontsource-variable/lexend-exa/index.css";
import "@fontsource-variable/lexend-peta/index.css";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomeDesktop } from "./components/HomeDesktop";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomeDesktop />
  </StrictMode>
);

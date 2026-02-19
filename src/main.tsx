import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HomeDesktop } from "./components/HomeDesktop";
import { HomeMobile } from "./components/HomeMobile";
import "./index.css";

const MOBILE_BREAKPOINT = 768;

function App() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < MOBILE_BREAKPOINT
  );

  useEffect(() => {
    const handleResize = () =>
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <HomeMobile /> : <HomeDesktop />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { LogProvider } from "./context/LogContext.jsx";
import './context/i18n.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LogProvider>
      <App />
    </LogProvider>
  </StrictMode>
);

import App from "client/components/App";
import { createRoot } from "react-dom/client";

import "virtual:windi.css";

function renderApp() {
  const rootElement = document.getElementById("root");

  createRoot(rootElement as HTMLElement).render(<App />);
}

export default renderApp;

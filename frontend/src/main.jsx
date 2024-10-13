import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AppContext } from "./contexts/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContext>
      <App />
    </AppContext>
  </BrowserRouter>
);

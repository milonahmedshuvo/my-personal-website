import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextComponents from "./Layout/ContextComponents.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextComponents>
      <App />
    </ContextComponents>
  </React.StrictMode>
);

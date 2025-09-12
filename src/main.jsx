import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // <-- viktigt att detta stämmer exakt

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

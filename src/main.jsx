import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import WishlistProvider from "./context/WishlistProvider.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <WishlistProvider>
          <App />
      </WishlistProvider>
    </HelmetProvider>
  </React.StrictMode>
);

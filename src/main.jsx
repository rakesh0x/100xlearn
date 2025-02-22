import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-b1i5482fgz51t3c.us.auth0.com";
const clientId = "9x8EaRkzklgNDYNvzWoSqauRrPKEAABC";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: "http://localhost:5173/callback" }}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>
);

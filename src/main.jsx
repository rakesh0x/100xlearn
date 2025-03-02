import React from "react";
import { createRoot } from "react-dom/client";
import  App from "./App"
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
const clientId = "1025249650061-vb3fpofqdq4h9onak5q4df396ksb76ji.apps.googleusercontent.com"

const root = createRoot(document.getElementById("root"));

root.render(
      <GoogleOAuthProvider clientId={clientId} value="{{ username }}">
            <App />
      </GoogleOAuthProvider>
);

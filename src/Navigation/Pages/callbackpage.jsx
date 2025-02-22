import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const CallbackPage = () => {
  const { handleRedirectCallback } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const processCallback = async () => {
      await handleRedirectCallback();
      navigate("/"); 
    };

    processCallback();
  }, []);

  return <div>Processing login...</div>;
};
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  return (
        <GoogleLogin
        onSuccess={(credentialResponse) => {
            console.log("LOGIN SUCCESSFUL", credentialResponse);
            navigate("/DashBoard"); 
        }}
        onError={() => {
            console.log("LOGIN UNSUCCESSFUL");
            navigate("http://localhost:5173");
        }}
        />
  );
};
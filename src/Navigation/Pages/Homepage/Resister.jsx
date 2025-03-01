import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import  {  jwtDecode } from "jwt-decode";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
          <p className="mt-2 text-gray-600">Sign in to continue to your dashboard</p>
        </div>
        
        <div className="mt-8 space-y-6">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-xs">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log("LOGIN SUCCESSFUL", credentialResponse);

                  if ( credentialResponse && credentialResponse.credential ){
                    const decoded = jwtDecode(credentialResponse && credentialResponse.credential)
                    const username = decoded.name
                    console.log("Username", username)

                    navigate("/DashBoard")
                  }
                }}
                onError={() => {
                  console.log("LOGIN UNSUCCESSFUL");
                  navigate("http://localhost:5173");
                }}
                shape="rectangular"
                theme="filled_blue"
                size="large"
                text="continue_with"
                width="300"
              />
            </div>
            <p className="mt-4 text-sm text-gray-500">
              By signing in, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

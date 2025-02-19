import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginForm = () => {
    const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <header className="app-header bg-white p-6 rounded shadow-md">
                {isAuthenticated && <h1 className="text-xl font-bold">{user.name}</h1>}
                
                {isAuthenticated ? (
                    <button 
                        onClick={() => logout({ returnTo: window.location.origin })}
                        className="px-4 py-2 mt-4 bg-red-500 text-white rounded"
                    >
                        Logout
                    </button>
                ) : (
                    <button 
                        onClick={() => loginWithRedirect()}
                        className="px-4 py-2 mt-4 bg-blue-500 text-white rounded"
                    >
                        Login with Redirect
                    </button>
                )}
            </header>
        </div>
    );
};

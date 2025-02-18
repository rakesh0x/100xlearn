import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        try {
            const res = await axios.post("http://localhost:5173", { username, password });
            localStorage.setItem("token", res.data.token);
            setUser({ username });
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setUser({ username: "fetched_username" }); // Replace with an API call to verify user
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

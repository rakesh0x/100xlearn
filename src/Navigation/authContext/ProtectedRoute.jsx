import { useContext } from "react"
import { AuthProvider } from "./authContext"
import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthProvider)
    return user ? children : <Navigate to="/signup" />
}
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";

export const Landing = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const { user, isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div style={{ paddingTop: "-2rem"}}>
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg">
          <h1 className="text-3xl font-bold mb-4">Welcome to 100xLearn</h1>
          <p className="text-lg mb-6">Please log in to access quizzes and other features.</p>
          <button
            onClick={() => loginWithRedirect()}
            className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-green-600 transition"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <nav className="bg-gray-900 fixed w-full top-0 p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            className="text-gray-100 text-3xl font-bold"
            onClick={() => navigate("/")}
          >
            100xLearn
          </button>

          <div className="hidden md:flex space-x-6">
            <button
              className="text-gray-100 hover:text-indigo-500 text-lg font-semibold transition"
              onClick={() => navigate("/")}
            >
              Home
            </button>
            <button
              className="text-gray-100 hover:text-indigo-500 text-lg font-semibold transition"
              onClick={() => navigate("/singleplayer")}
            >
              Quizzes
            </button>
            <button
              className="text-gray-100 hover:text-indigo-500 text-lg font-semibold transition"
              onClick={() => navigate("/multiplayer")}
            >
              Multiplayer Games
            </button>
            <button
              className="text-gray-100 hover:text-indigo-500 text-lg font-semibold transition"
              onClick={() => navigate("/leaderboard")}
            >
              LeaderBoard
            </button>
          </div>

          <button
            className="md:hidden text-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center space-y-4 bg-gray-800 p-4 mt-2 rounded-md"
          >
            <button
              className="text-gray-100 hover:text-indigo-500 text-lg font-semibold transition"
              onClick={() => { navigate("/"); setMenuOpen(false); }}
            >
              Home
            </button>
            <button
              className="text-gray-100 hover:text-indigo-500 text-lg font-semibold transition"
              onClick={() => { navigate("/singleplayer"); setMenuOpen(false); }}
            >
              Quizzes
            </button>
            <button
              className="text-gray-100 hover:text-indigo-500 text-lg font-semibold transition"
              onClick={() => { navigate("/multiplayer"); setMenuOpen(false); }}
            >
              Games
            </button>
            <button
              className="text-gray-100 hover:text-indigo-500 text-lg font-semibold transition"
              onClick={() => { navigate("/leaderboard"); setMenuOpen(false); }}
            >
              My Profile
            </button>
          </motion.div>
        )}
      </nav>

      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'} flex flex-col items-center justify-center p-6`}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Test Your Knowledge!</h1>

          <div>
            <h1 className="text-2xl font-semibold">Welcome, {user.name}!</h1>
            <button 
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              className="bg-red-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>

          <p className="text-lg mb-6 opacity-90">Challenge yourself with fun and exciting trivia questions.</p>
          
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(255, 255, 0, 0.8)" }}
            whileTap={{ scale: 0.9 }}
            className="bg-yellow-400 text-black px-6 py-3 text-lg font-semibold rounded-xl shadow-lg hover:bg-yellow-500"
            onClick={() => navigate('/singleplayer')}
          >
            Start Quiz Now
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 fixed w-full top-0 p-4 shadow-md ">
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
            className="text-gray-100 hover:text-indigo-500 ml-8 mr-9 text-lg font-semibold transition"
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
  );
}

export const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const Navigate = useNavigate();

  return (
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
        <p className="text-lg mb-6 opacity-90">Challenge yourself with fun and exciting trivia questions.</p>
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(255, 255, 0, 0.8)" }}
        whileTap={{ scale: 0.9 }}
          className="bg-yellow-400 text-black px-6 py-3 text-lg font-semibold rounded-xl shadow-lg hover:bg-yellow-500"
          onClick={() => Navigate('/singlePlayer')}
        >
          Start Quiz Now
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-16 text-center max-w-3xl bg-white text-black p-6 rounded-xl shadow-lg backdrop-blur-md bg-opacity-80"
      >
        <h2 className="text-3xl font-bold mb-4">How to Play?</h2>
        <ul className="text-lg list-disc list-inside space-y-2 text-left">
          <li>Choose a category and difficulty level.</li>
          <li>Answer the questions before the timer runs out.</li>
          <li>Compete with friends and climb the leaderboard.</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="mt-12 max-w-lg w-full bg-white text-black p-6 rounded-xl shadow-lg backdrop-blur-md bg-opacity-80"
      >
        <h2 className="text-2xl font-bold mb-4">🏆 Leaderboard</h2>
        <ul className="text-lg space-y-2">
          <li>🥇 Alex - 1500 pts</li>
          <li>🥈 Jamie - 1300 pts</li>
          <li>🥉 Chris - 1200 pts</li>
        </ul>
      </motion.div>
    </div>
  );
}
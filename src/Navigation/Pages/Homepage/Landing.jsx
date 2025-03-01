import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X,Brain, Moon, Sun, } from 'lucide-react';

export const Landing = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();


  const BackRedirect = () => {
    navigate("/")
  }

  return (
    <>
      <nav className="bg-gray-900/95 backdrop-blur-md fixed w-full top-0 p-4 shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-gray-100 text-3xl font-bold flex items-center gap-2"
            onClick={() => navigate("/")}
          >
            <Brain className="w-8 h-8"/>
            100xLearn
          </motion.button>

          <div className="hidden md:flex items-center space-x-6">
            {[
              { title: "Home", path: "/landing" },
              { title: "Quizzes", path: "/singleplayer" },
              { title: "Multiplayer Games", path: "/multiplayer" },
              { title: "LeaderBoard", path: "/leaderboard" }
            ].map((item, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-gray-100 hover:text-indigo-400 text-lg font-semibold transition"
                onClick={() => navigate(item.path)}
              >
                {item.title}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-100 p-2 rounded-full hover:bg-gray-800"
            >
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </motion.button>
          </div>

          <button
            className="md:hidden text-white"
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
            className="md:hidden flex flex-col items-center space-y-4 bg-gray-800/90 backdrop-blur-md p-4 mt-2 rounded-lg"
          >
            {[
              { title: "Home", path: "/" },
              { title: "Quizzes", path: "/singleplayer" },
              { title: "Games", path: "/multiplayer" },
              { title: "My Profile", path: "/leaderboard" }
            ].map((item, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-gray-100 hover:text-indigo-400 text-lg font-semibold transition w-full"
                onClick={() => { navigate(item.path); setMenuOpen(false); }}
              >
                {item.title}
              </motion.button>
            ))}
          </motion.div>
        )}
      </nav>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`min-h-screen pt-20 ${
          darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 text-white'
        } flex flex-col items-center justify-center p-6 relative`}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
            }}
          />
          <motion.div 
            className="absolute right-0 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
            }}
          />
        </div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-8 drop-shadow-lg"
          >
            Test Your Knowledge!
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl mb-8"
          >
            <p className="text-lg mb-6 opacity-90">Ready to challenge yourself with exciting quizzes?</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-black px-6 py-3 text-lg font-semibold rounded-xl shadow-lg hover:bg-yellow-500 transition-all duration-300"
                onClick={() => navigate('/singleplayer')}
              >
                Start Quiz Now
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => BackRedirect()}
                className="bg-red-500 text-white px-6 py-3 text-lg font-semibold rounded-xl shadow-lg hover:bg-red-600 transition-all duration-300"
              >
                Logout
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Landing;
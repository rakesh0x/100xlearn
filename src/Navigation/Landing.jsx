import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight, Brain, Trophy, Users, Moon, Sun, Sparkles } from 'lucide-react';
import { useAuth0 } from "@auth0/auth0-react";

export const Landing = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const { user, isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-700 via-blue-600 to-blue-400">
        <div className="relative">
          <div className="absolute inset-0 w-20 h-20 border-4 border-t-white/20 border-r-white/20 border-b-white/20 border-l-white rounded-full animate-spin" />
          <div className="absolute inset-0 w-20 h-20 rounded-full bg-white/10 animate-ping" />
          <div className="relative w-20 h-20 rounded-full bg-white/90 flex items-center justify-center">
            <Brain className="w-10 h-10 text-indigo-600 animate-bounce" />
          </div>
        </div>
        <div className="mt-8 text-2xl font-bold text-white flex items-center space-x-1">
          <span>Loading</span>
          <span className="flex space-x-1">
            <span className="animate-bounce delay-100">.</span>
            <span className="animate-bounce delay-200">.</span>
            <span className="animate-bounce delay-300">.</span>
          </span>
        </div>
        <p className="mt-4 text-white/80 text-lg animate-pulse">
          Preparing your quiz experience
        </p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div id="FirstPage" className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"
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
            className="absolute right-0 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl"
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

        {/* Header Section */}
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-indigo-800 via-indigo-700 to-blue-600 p-6 flex justify-between items-center shadow-lg backdrop-blur-sm"
        >
          <div className="flex items-center space-x-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Brain className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-2">
              100xLearn
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </h1>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={loginWithRedirect} 
            className="bg-white text-indigo-700 px-6 py-2 rounded-full font-semibold hover:bg-indigo-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started
          </motion.button>
        </motion.div>
  
        {/* Main Content Section */}
        <div className="flex-1 flex flex-col justify-center items-center bg-gradient-to-br from-indigo-700 via-blue-600 to-blue-400 text-white px-4 relative">
          <div className="max-w-4xl mx-auto text-center z-10">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl font-bold mb-6 leading-tight"
            >
              Master Knowledge Through
              <motion.span 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block text-yellow-300 mt-2"
              >
                Interactive Quizzes
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl font-medium mb-12 opacity-90 max-w-2xl mx-auto"
            >
              Challenge yourself, compete with others, and learn something new every day in our engaging quiz environment.
            </motion.p>
            
            {/* Features Grid */}
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid md:grid-cols-3 gap-8 mb-12"
            >
              {[
                { icon: Brain, title: "Smart Learning", desc: "Adaptive questions that match your skill level" },
                { icon: Trophy, title: "Compete & Win", desc: "Join tournaments and climb the leaderboard" },
                { icon: Users, title: "Community", desc: "Connect with fellow learners worldwide" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transition-all duration-300 border border-white/20 shadow-lg"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="bg-indigo-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <feature.icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm opacity-80">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={loginWithRedirect} 
              className="group bg-white text-indigo-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center mx-auto space-x-2"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated view
  return (
    <>
      <nav className="bg-gray-900/95 backdrop-blur-md fixed w-full top-0 p-4 shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-gray-100 text-3xl font-bold flex items-center gap-2"
            onClick={() => navigate("/")}
          >
            <Brain className="w-8 h-8" />
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
            <h2 className="text-2xl font-semibold mb-4">Welcome, {user.name}! 🎉</h2>
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
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
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
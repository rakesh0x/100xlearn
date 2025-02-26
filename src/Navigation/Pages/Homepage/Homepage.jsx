import React, { useEffect } from 'react';
import { ArrowRight,Trophy, Brain, Users, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Homepage = () => {
  const navigate  = useNavigate();

  const HandleRedirect = () => {
    navigate("/loading")  
  }

    return (
      <div id="FirstPage" className="min-h-screen flex flex-col relative overflow-hidden">
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
            onClick={() => HandleRedirect()}
            className="bg-white text-indigo-700 px-6 py-2 rounded-full font-semibold hover:bg-indigo-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started
          </motion.button>
        </motion.div>
  
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
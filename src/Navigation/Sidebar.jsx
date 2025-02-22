import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Brain } from 'lucide-react';

export const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHover, setActiveHover] = useState(null);

  const menuItems = [
    { name: "Home", icon: <FaHome />, path: "/" },
    { name: "LeaderBoard", icon: <LeaderboardIcon/>, path: "/leaderboard" },
    { name: "Multiplayer", icon: <GroupAddIcon/>, path: "/MultiPlayer"}
  ];              

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        className={`${
          isOpen ? "w-64" : "w-20"
        } h-screen fixed left-0 top-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 
        text-white shadow-xl transition-all duration-300 ease-in-out z-50`}
      >
        {/* Logo Section */}
        <motion.div 
          className="flex items-center justify-between p-5 border-b border-gray-600/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <Brain className="w-8 h-8 text-blue-400" />
            </motion.div>
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="text-xl font-bold bg-gradient-to-r  from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                  Subjects
                </motion.h1>
              )}
            </AnimatePresence>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleSidebar}
            className="text-gray-300 p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </motion.div>

        {/* Navigation */}
        <nav className="mt-6 px-3">
          {menuItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              onMouseEnter={() => setActiveHover(index)}
              onMouseLeave={() => setActiveHover(null)}
            >
              {({ isActive }) => (
                <motion.div
                  whileHover={{ x: 5 }}
                  className={`relative flex items-center gap-4 p-4 my-2 rounded-xl transition-all duration-300
                    ${isActive 
                      ? "bg-gradient-to-r  from-indigo-700 via-blue-600 to-blue-400 text-white shadow-lg" 
                      : "hover:bg-gray-700/50 text-gray-300 hover:text-white"
                    }
                    ${activeHover === index && !isActive ? "bg-gray-700/30" : ""}
                  `}
                >
                  <motion.div 
                    className="text-2xl"
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="font-medium"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute right-2 w-2 h-2 rounded-full bg-white"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="border-t border-gray-600/50 pt-4">
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="text-sm text-gray-400 text-center"
                >
                  100xLearn © 2024
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className={`flex-1 p-6 transition-all duration-300 ${isOpen ? "ml-64" : "ml-20"}`}
      >
        {children}
      </motion.main>
    </div>
  );
};

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Sidebar;
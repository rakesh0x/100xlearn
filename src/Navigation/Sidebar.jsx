import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaFlask, FaPlus, FaBook, FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

export const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Science", icon: <FaFlask />, path: "/sciencequiz" },
    { name: "Mathematics", icon: <FaPlus />, path: "/mathematicsquiz" },
    { name: "General Knowledge", icon: <FaBook />, path: "/generalknowledgequiz" },
  ];              

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-60" : "w-20"
        }
         h-screen fixed left-0 top-0 bg-gradient-to-b from-gray-900 to-gray-700 text-white 
          shadow-lg transition-all duration-300 ease-in-out `}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-600">
          <h1
            className={`text-xl font-bold text-white transition-all ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Subjects
          </h1>
          <button
            onClick={toggleSidebar}
            className="text-white text-2xl p-2 rounded-md hover:bg-gray-600"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="mt-4">
          {menuItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) =>
                `flex items-center gap-4 p-4 mx-2 my-2 text-lg rounded-lg transition-all duration-300 ease-in-out ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-600 hover:text-gray-200"
                }`
              }
            >
              <div className="text-2xl">{item.icon}</div>
              <span className={`${isOpen ? "block" : "hidden"}`}>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className={`flex-1 p-6 transition-all ${isOpen ? "ml-60" : "ml-20"}`}>
        {children}
      </main>
    </div>
  );
};

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

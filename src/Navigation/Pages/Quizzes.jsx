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
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-gray-800 h-screen text-white transition-all duration-300`}
      >
        {/* Toggle Button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h1 className={`${isOpen ? "block" : "hidden"} text-xl font-bold`}>
            Subjects
          </h1>
          <button
            onClick={toggleSidebar}
            className="text-xl p-2 focus:outline-none hover:bg-gray-700 rounded"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="mt-4">
          {menuItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="flex items-center gap-4 px-4 py-3 hover:bg-gray-700 rounded"
              activeClassName="bg-gray-700"
            >
              <div className="text-lg">{item.icon}</div>
              <span className={`${isOpen ? "block" : "hidden"}`}>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default Sidebar;



Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};
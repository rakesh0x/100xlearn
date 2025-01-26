import React from "react";
import PropTypes from "prop-types";

import {
  FaBars,
  FaPlus,
  FaFlask,
  FaBook
}from "react-icons/fa";
import { NavLink } from "react-router-dom";


export const  Sidebar =  ({ children }) =>  {

  const menuItems = [
    { name: "Science",  icon: <FaFlask/> , path: "/sciencequiz"},
    { name: "Mathematics", icon: <FaPlus/> ,  path: "/mathnaticsquiz"},
    { name: "General knwoledge", icon: <FaBook/> , path: "/generalknowledgequiz"},
  
  ]

  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <h1>Subjects</h1>
        </div>
          <div className="bar">
            <FaBars/>
          </div>
          {
            menuItems.map(( items, index) => (
              <NavLink
                to={items.path}
                key={index}
                className="link"
                activeClassName="link"
              >
                <div className="items_icons">{items.path}</div>
                <div className="link_text">{items.name}</div>
              </NavLink>
            ))
          }
      </div>
      <main>{ children }</main>
    </div>
  )
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};
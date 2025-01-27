import React from "react";
import PropTypes from "prop-types";
import { useState } from "react"

import {
  FaBars,
  FaPlus,
  FaFlask,
  FaBook
}from "react-icons/fa";
import { NavLink } from "react-router-dom";


export const  Sidebar =  ({ children }) =>  {

  const [ isOpen, setisOpen ] = useState(false);

  const menuItems = [
    { name: "Science",  icon: <FaFlask/> , path: "/sciencequiz"},
    { name: "Mathematics", icon: <FaPlus/> ,  path: "/mathematicsquiz"},
    { name: "General knwoledge", icon: <FaBook/> , path: "/generalknowledgequiz"},
  ]
  const Togglesidebar = () => {
    if(isOpen) {
      setisOpen(!isOpen)
    }

  }

  return (
    <div className="container px-5 py-10 text-2xl" >
      <div className="flex">
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className="bar px-2 bg-color-white">
              <button onClick={Togglesidebar}><FaBars/></button>
            </div>
              <div className="top_section py-10">
                <h1>Subjects</h1>
              </div>
              {
                menuItems.map(( item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className="link"
                    activeclassname="active"
                  >
                    <div key={index} className="px-2 py-3">
                      <div className="items_icons">{item.icon}</div>
                      <div className="link_text">{item.name}</div>
                    </div>
                  </NavLink>
                ))
              }
          </div>
          <main>{ children }</main>
        </div>        
    </div>
  )
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};
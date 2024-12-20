import React, { useState } from "react";

export function DropDownmenu() {
  const [isOpen, setIsOpen] = useState(false); 
  const [selectedOption, setSelectedOption] = useState("Select an option");

  const options = [
    "General Knowledge",
    "Brain Teaser",
    "Science and Technology",
    "Sports",
  ];

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); 
    setIsOpen(false);
  };

  return (
    <div style={{ position: "relative", width: "200px" }}>
      <button
        onClick={toggleDropDown}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {selectedOption}
      </button>


      {isOpen && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            padding: "10px",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
            borderRadius: "4px",
            listStyle: "none",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom:
                  index < options.length - 1 ? "1px solid #eee" : "none",
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

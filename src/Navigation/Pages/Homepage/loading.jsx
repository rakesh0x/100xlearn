import React, { useEffect } from "react";
import {  Brain } from "lucide-react"
import { useNavigate } from "react-router-dom";

export const LoadingComp = () => {

  const  navigate  = useNavigate();

  useEffect(() => {
     setTimeout(() => {
      navigate("/Login")
    }, 3000);
  })
  
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
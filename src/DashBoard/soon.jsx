import React, { useState, useEffect } from 'react';

export const ComingSoonPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  // Set your launch date here
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black p-4">
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-blue-500" 
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5,
                filter: 'blur(60px)',
                transform: `translate(-50%, -50%) scale(${0.5 + Math.sin(Date.now() / 2000 + i) * 0.2})`,
                animation: `float-${i} ${Math.random() * 10 + 15}s infinite ease-in-out`
              }}
            />
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-purple-900 via-transparent to-blue-900 opacity-40"></div>
      </div>
      
      {/* Interactive spotlight effect */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-blue-500 to-transparent opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3) 0%, transparent 25%)`,
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-lg w-full">
        <div className="mb-12 text-center">
          <h1 className="text-6xl font-bold text-white mb-2 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Coming Soon
            </span>
          </h1>
          <p className="text-xl text-blue-200 animate-pulse">Something extraordinary is arriving</p>
        </div>
        
        <div className="grid grid-cols-4 gap-4 mb-12">
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.minutes, label: "Minutes" },
            { value: timeLeft.seconds, label: "Seconds" }
          ].map((item, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl rotate-1 blur group-hover:rotate-3 transition-all duration-300"></div>
              <div className="relative flex flex-col items-center justify-center p-6 bg-black bg-opacity-80 rounded-lg border border-blue-500 backdrop-blur-md h-full transform group-hover:scale-105 transition-all duration-300">
                <span className="text-4xl font-black text-white mb-2">{String(item.value).padStart(2, '0')}</span>
                <span className="text-xs font-medium uppercase tracking-wider text-blue-300">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl -rotate-1 blur-sm"></div>
          <div className="relative p-8 bg-black bg-opacity-70 backdrop-blur-md rounded-lg border border-blue-500">
            <h3 className="text-xl font-semibold text-center mb-6 text-white">Get notified when we launch</h3>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full p-4 pl-6 pr-32 rounded-full bg-gray-900 bg-opacity-70 border border-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-blue-300 backdrop-blur-md"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
        
        <div className="flex justify-center space-x-6">
          {[
            { icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" },
            { icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
            { icon: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" }
          ].map((item, index) => (
            <a 
              key={index} 
              href="#" 
              className="relative group"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
              <div className="relative flex items-center justify-center w-12 h-12 bg-black rounded-full border border-blue-500 transform group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d={item.icon} />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900 to-transparent opacity-20"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
    </div>
  );
};


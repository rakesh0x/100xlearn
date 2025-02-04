import React from "react";
import cardcs from '../assets/cardcs.jpg';
import gk from '../assets/gk.jpg';
import { motion } from "framer-motion";

export const SubjectsCard = () => {
    return (
        <div className="flex flex-col items-center mb-15 justify-center p-4">
            <div className="text-center mb-4">
                <div className="font-bold text-2xl py-2 text-white animate-pulse">Popular Test Series</div>
            </div>

            <motion.div 
                whileHover={{ scale: 1.1, boxShadow: "0 0 8px rgba(255, 255, 0, 0.5)" }}
                whileTap={{ scale: 0.9 }} 
                className="max-w-sm rounded-2xl hover:bg-color-white shadow-2xl bg-white transition duration-100"> 
                
                <img className="w-full h-48 object-cover" src={cardcs} alt="Computer Science" />

                <div className="px-6 py-4">
                    <h3 className="font-bold text-xl mb-2 text-gray-900">Computer Science</h3>
                    <p className="text-gray-700 text-base">
                        🧠 Think you know computers inside out? Test your knowledge in programming, AI, cybersecurity, and more!
                    </p>
                </div>

                <div className="px-6 pb-4 flex justify-center">
                    <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-800 transition">
                        Play Now
                    </button>
                </div>
            </motion.div>
        </div>
    );
};


export const SubjectsCard2 = () => {
    return (
        <div className="flex flex-col items-center mb-15 justify-center p-4">
            <div className="text-center mb-4">
                <div className="font-bold text-2xl py-2 text-white animate-pulse">Popular Test Series</div>
            </div>

            <motion.div 
                whileHover={{ scale: 1.1, boxShadow: "0 0 8px rgba(255, 255, 0, 0.5)" }}
                whileTap={{ scale: 0.9 }} 
                className="max-w-sm rounded-lg hover:bg-gray-700 shadow-lg bg-white transition duration-300"> 
                
                <img className="w-full h-48 object-cover" src={gk} alt="General Knowledge" />

                <div className="px-6 py-4">
                    <h3 className="font-bold text-xl mb-2 text-gray-900">General Knowledge</h3>
                    <p className="text-gray-700 text-base">
                        🌍 Test your knowledge in history, geography, current affairs, sports, and more!
                    </p>
                </div>

                <div className="px-6 pb-4 flex justify-center">
                    <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-800 transition">
                        Play Now
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

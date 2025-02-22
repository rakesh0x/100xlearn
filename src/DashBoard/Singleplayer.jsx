import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Brain, Globe2, ArrowRight, Users, Trophy } from 'lucide-react';
import cardcs from '../assets/cardcs.jpg';
import gk from '../assets/gk.jpg';

export const SubjectsCard = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-6"
            >
                <div className="font-bold text-2xl py-2 text-white relative">
                    Popular Test Series
                    <motion.div
                        animate={{ width: ["0%", "100%", "0%"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                    />
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="w-full max-w-sm"
            >
                <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="group rounded-2xl bg-white shadow-2xl overflow-hidden"
                > 
                    <div className="relative h-48">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        <img 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                            src={cardcs} 
                            alt="Computer Science" 
                        />
                        <div className="absolute top-4 right-4 flex gap-3 z-20">
                            <div className="bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-sm text-white flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                2.5k
                            </div>
                            <div className="bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-sm text-white flex items-center gap-1">
                                <Trophy className="w-4 h-4" />
                                97%
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <Brain className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-bold text-xl text-gray-900">Computer Science</h3>
                        </div>

                        <p className="text-gray-600 mb-6">
                            🧠 Think you know computers inside out? Test your knowledge in programming, AI, cybersecurity, and more!
                        </p>

                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/computerscience')}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-6 py-3 rounded-full group-hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            Play Now
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export const SubjectsCard2 = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-6"
            >
                <div className="font-bold text-2xl py-2 text-white relative">
                    Popular Test Series
                    <motion.div
                        animate={{ width: ["0%", "100%", "0%"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                    />
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="w-full max-w-sm"
            >
                <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="group rounded-2xl bg-white shadow-2xl overflow-hidden"
                > 
                    <div className="relative h-48">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        <img 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                            src={gk} 
                            alt="General Knowledge" 
                        />
                        <div className="absolute top-4 right-4 flex gap-3 z-20">
                            <div className="bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-sm text-white flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                3.2k
                            </div>
                            <div className="bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-sm text-white flex items-center gap-1">
                                <Trophy className="w-4 h-4" />
                                94%
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <Globe2 className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-bold text-xl text-gray-900">General Knowledge</h3>
                        </div>

                        <p className="text-gray-600 mb-6">
                            🌍 Test your knowledge in history, geography, current affairs, sports, and more!
                        </p>

                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/generalknowledge')}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-6 py-3 rounded-full group-hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            Play Now
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};
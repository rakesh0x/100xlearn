import React from 'react';
import './App.css';
import { Navbar } from './Navigation/Landing';
import { LandingPage } from './Navigation/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Profile } from './Navigation/Pages/Profile';
import { Sidebar } from './Navigation/Sidebar';
import { Mathsquiz } from './Navigation/Pages/Mathsquiz';
import { motion } from 'framer-motion';
import { SubjectsCard } from './DashBoard/Singleplayer';
import { SubjectsCard2 } from './DashBoard/Singleplayer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <div style={{ paddingTop: "3em" }}></div>
          <Routes>
            <Route path='/' element={
                <LandingPage /> 
            }/>
            <Route path='/SinglePlayer' element = {
              <div className=' flex font-bold min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 '>
                <div className='w-1/4 p-4'>
                   <Sidebar/>
                </div>

                <div className='w-2/4 p-4'>
                   <SubjectsCard2/>
                </div>
                
                <div className='w-2/4 p-4'>
                  <SubjectsCard/>
                </div>
              </div>
            }></Route>
            <Route path='/generalknowledgequiz' element= {
              <div className=' flex font-bold  min-h-screen bg-gradient-to-b from-purple-600 to-blue-500 smoo'>
                <div className='w-1/4 p-4'>
                  <Sidebar/>
                </div>

                <div className='w-2/4 p-6 text-white'>
                  <Mathsquiz/>
                </div>
              </div>
            }></Route>
            <Route path='/MultiPlayer' element={
              <div className=' flex font-bold min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 '>
                <div className='w-1/4 p-4'>
                  <motion.div 
                  initial={{ opacity: 0, y: -50}}
                  animate={{ opacity: 1, y: 0}}
                  transition={{duration: 1}}
                  >
                   <Sidebar/>
                  </motion.div>
                </div>
              </div>
              } />
            <Route path='/profile' element={<Profile/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
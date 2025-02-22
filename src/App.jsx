import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './Navigation/Sidebar';
import { SubjectsCard, SubjectsCard2 } from './DashBoard/Singleplayer';
import { SinglePlayer } from './Navigation/Pages/Quizzes';
import { LiveCompetetion } from './Navigation/Pages/MultiplayerGames';
import { Landing } from "./Navigation/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route path='/landing' element={<Landing />} />
        
        <Route path="/singleplayer" element={
          <div className="flex font-bold min-h-screen bg-gradient-to-r  from-indigo-700 via-blue-600 to-blue-400">
              <Sidebar />
            <div className="w-3/4 p-8 flex gap-8">
              <div className="w-1/2">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/50 transition-shadow duration-300">
                  <SubjectsCard2 />
                </div>
              </div>
              <div className="w-1/2">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl hover:shadow-blue-500/50 transition-shadow duration-300">
                  <SubjectsCard />
                </div>
              </div>
            </div>
          </div>
        } />
        
        <Route path='/computerscience' element={
          <div className='flex font-bold min-h-screen bg-gradient-to-b  from-indigo-700 via-blue-600 to-blue-400 justify-center'>
            <div className='w-1/4 p-4'>
              <SinglePlayer />
            </div>
          </div>
        } />
        
        <Route path='/MultiPlayer' element={
          <div className='flex font-bold min-h-screen bg-gradient-to-b  from-indigo-700 via-blue-600 to-blue-400'>
            <div className='w-1/4 p-4'>
              <Sidebar />
            </div>
            <div className='w-2/4 p-4'>
              <LiveCompetetion />
            </div>
          </div>
        } />
        
        <Route path='/leaderboard' element={
          <div className='flex flex-col min-h-screen bg-gradient-to-b  from-indigo-700 via-blue-600 to-blue-400 '>
            <div className='w-1/4 p-4'>
              <Sidebar />
            </div>
          </div>
        } />
        
        <Route path='/generalknowledge' element={
          <div className='flex font-semibold min-h-screen bg-gradient-to-b from-indigo-700 via-blue-600 to-blue-400'>
            <div className='w-2/4 p-4 justify-center text-center'>
              <SinglePlayer />
            </div>
          </div>
        } />
      </Routes>
    </>
  );
}

export default App;



// Error!Payload validation error: 'Object didn't pass validation for format absolute-https-uri-or-empty: https://localhost:5173/landing' on property initiate_login_uri (Initiate login uri, must be https).


import React from 'react';
import './index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Sidebar } from './Navigation/Sidebar';
import { SubjectsCard, SubjectsCard2 } from './DashBoard/Singleplayer';
import { SinglePlayer } from './Navigation/Pages/Quizzes';
import { LiveCompetetion } from './Navigation/Pages/MultiplayerGames';
import { Homepage } from './Navigation/Pages/Homepage/Homepage';
import { LoadingComp } from './Navigation/Pages/Homepage/loading';
import { Login } from './Navigation/Pages/Homepage/Resister';
import { Landing } from "./Navigation/Pages/Homepage/Landing"
import { ComingSoonPage } from './DashBoard/soon.jsx';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>  
          <Route path='/' element={<Homepage />} />
          <Route path='/loading' element={<LoadingComp/>} />
          <Route path='/Login' element={
            <div className='grid place-items-center h-screen'>
              <Login />
            </div>
            } />
          <Route path='/DashBoard' element={<Landing />} />
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
            <div className='flex  flex-col font-bold min-h-screen bg-gradient-to-b  from-indigo-700 via-blue-600 to-blue-400'>
              <div className='w-1/4 p-4'>
                <Sidebar />
              </div>              
              <div>
              <ComingSoonPage />
              </div>
            </div>
          } />
          
          <Route path='/leaderboard' element={
            <div className='flex flex-col font-semibold min-h-screen bg-gradient-to-b  from-indigo-700 via-blue-600 to-blue-400 '>
              <div className='w-1/4 p-4'>
                <Sidebar />
              </div>
              <div>
                <ComingSoonPage/>
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
    </BrowserRouter>
  );
}

export default App;





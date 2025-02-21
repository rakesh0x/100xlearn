import React from 'react';
import './index.css';
import { Navbar } from './Navigation/Landing';
import { LandingPage } from './Navigation/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './Navigation/Sidebar';
import { SubjectsCard } from './DashBoard/Singleplayer';
import { SubjectsCard2 } from './DashBoard/Singleplayer';
import { SinglePlayer } from './Navigation/Pages/Quizzes';
import { LiveCompetetion } from './Navigation/Pages/MultiplayerGames';
import { LoginForm } from './Navigation/authContext/ProtectedRoute';
import { useAuth0 } from '@auth0/auth0-react';
import { SignupNavbar } from './Navigation/authContext/Signup-signin';
import { AuthHandler  } from './Navigation/authContext/ifAuth';

function App() {
  return (
    <>
      <Navbar/>
          <div style={{ paddingTop: "3em" }}></div>
            <Routes>
              <Route path='user' AuthHandler  element = {
                <div>
                  <SignupNavbar/>
                </div>
              }></Route>
                <Route path='/' AuthHandler element={
                    <LandingPage />
                }/>
                <Route path='/singleplayer' AuthHandler element = {
                  <div className=' flex font-bold min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 flex-grid '>
                    <div className='w-1/4 p-4'>
                      <Sidebar/>
                    </div>
                    <div className='w-2/4 p-4 flex'>
                      <SubjectsCard2/>
                    </div>
                    <div className='w-2/4 p-4 flex'>
                      <SubjectsCard/>
                    </div>
                  </div>
                }></Route>
                <Route path='/computerscience' AuthHandler  element= {
                  <div className=' flex font-bold  min-h-screen bg-gradient-to-b from-purple-600 to-blue-500 justify-center'>
                    <div className='w-1/4 p-4'>
                      <SinglePlayer/>
                    </div>
                  </div>
                }></Route>
                <Route path='/MultiPlayer' AuthHandler  element={
                  <div className=' flex font-bold min-h-screen bg-gradient-to-b from-purple-600 to-blue-500 '>
                    <div className='w-1/4 p-4'>            
                      <Sidebar/>
                    </div>

                    <div className='w-2/4 p-4'>
                      <LiveCompetetion/>
                    </div>
                  </div>
                  } />
                <Route path='/leaderboard' AuthHandler  element={
                  <div className='flex flex-col min-h-screen bg-gradient-to-b from-purple-600 to-blue-500'>
                    <div className='w-1/4 p-4'>
                    <Sidebar/>
                    </div>
                  </div>
                }
                />
                <Route path='/generalknowledge' AuthHandler  element={
                <div className='flex font-seibold min-h-screen bg-gradient-to-b from-purple-600 to-blue-500 justify-center'>
                  <div className='w-2/4 p-4 '>
                    <SinglePlayer/> 
                  </div>
                </div>
                } /> 
              </Routes>
    </>
  );
}

export default App;
import React from 'react';
import './App.css';
import { Navbar } from './Navigation/Landing';
import { HeroSection } from './Navigation/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Profile } from './Navigation/Pages/Profile';
import { Games } from './Navigation/Pages/Games';
import { Sidebar } from './Navigation/Sidebar';
import { ScienceQuiz } from './Navigation/Pages/Quizzes';
import { MathematicsQuiz } from './Navigation/Pages/Mathsquiz';


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <div style={{ paddingTop: "4rem" }}></div>
          <Routes>
            <Route path='/' element={<HeroSection />} />
            <Route path='/sciencequiz' element = {
              <div className=' flex font-bold min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 '>
                <div className='w-1/4 p-4'>
                  <Sidebar/>
        
                </div>

                <div className='w-2/4 p-6 text-white'>
                  <ScienceQuiz/>
                </div>
              </div>
            }></Route>
            <Route path='/mathematicsquiz' element= {
              <div className=' flex font-bold bg-gradient-to-b from-blue-900 to-purple-900'>
                <div className='w-1/4 p-4'>
                  <Sidebar/>
                </div>

                <div className='w-2/4 p-6 text-white'>
                  <MathematicsQuiz/>
                </div>
              </div>
            }></Route>
            <Route path='/games' element={<Games />} />
            <Route path='/profile' element={<Profile/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
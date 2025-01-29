import React from 'react';
import './App.css';
import { Navbar } from './Navigation/Landing';
import { HeroSection } from './Navigation/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Profile } from './Navigation/Pages/Profile';
import { Games } from './Navigation/Pages/Games';
import { Sidebar } from './Navigation/Sidebar';
import { ScienceQuiz } from './Navigation/Pages/Quizzes';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <div style={{ paddingTop: "4rem" }}></div>
          <Routes>
            <Route path='/' element={<HeroSection />} />
            <Route path='/quizzes' element = {
              <div className='flex min-h-screen'>
                <div className='w-1/4 bg-gray-100 p-4'>
                  <Sidebar/>
                </div>

                <div className='w-3/4 p-6'>
                  <ScienceQuiz/>
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
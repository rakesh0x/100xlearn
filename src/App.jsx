import React from 'react';
import './App.css';
import { Navbar } from './Navigation/Landing';
import { HeroSection } from './Navigation/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Profile } from './Navigation/Pages/Profile';
import { Games } from './Navigation/Pages/Games';
import { Quizzes } from './Navigation/Pages/Quizzes';

function App() {
  return (
  <BrowserRouter>
    <>
    <Navbar/>
        <Routes>
          <Route path='/quizzes' element={<Quizzes/>} />
          <Route path='/Games' element={<Games/>} />
          <Route path='/Profile' element={<Profile/>} />
        </Routes>
    <HeroSection/>
    </>
  </BrowserRouter>
  );
}


export default App;
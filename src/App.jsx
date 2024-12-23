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
    <>
      <BrowserRouter>
      <Navbar/>
        <div style={{ paddingTop: "4rem" }}></div>
          <Routes>
            <Route path='/' element={<HeroSection />} />
            <Route path='/quizzes' element={<Quizzes/>} />
            <Route path='/games' element={<Games/>} />
            <Route path='/profile' element={<Profile/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
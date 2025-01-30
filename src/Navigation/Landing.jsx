import React from "react";
import landingImg from '../assets/landing.png';
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-900 fixed w-full top-0 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-around items-center">
        <button
          className="text-gray-100 hover:text-indigo-500 text-lg font-semibold transition "
          onClick={() => navigate('/')}
        >
          Home
        </button>
        <button
          className="text-gray-100 hover:text-indigo-500 text-lg font-semibold transition"
          onClick={() => navigate("/sciencequiz")}
        >
          Quizzes
        </button>
        <button
          className="text-gray-100 hover:text-indigo-500 text-lg font-semibold transition"
          onClick={() => navigate("/games")}
        >
          Games
        </button>
        <button
          className="text-gray-100 hover:text-indigo-500 text-lg font-semibold transition"
          onClick={() => navigate("/profile")}
        >
          My Profile
        </button>
      </div>
    </nav>
  );
};

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <div className="text-6xl font-extrabold mb-4 animate-pulse">Trivia</div>
        <h1 className="text-4xl font-semibold mb-6">Play, Learn, Achieve</h1>
        <img
          src={landingImg}
          alt="Landing"
          className="
          [perspective:1000px]
          [transform-style:preserve-3d]
          hover:[transform:rotateX(20deg)_rotateY(45deg)]
          max-w-xl
          rounded-xl
          shadow-2xl
          hover:scale-125
          transform
          transition-all
          duration-500
          ease-in-out"
        />
      </div>
    </section>
  );
};
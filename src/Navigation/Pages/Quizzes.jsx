import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { Brain } from "lucide-react";

export const SinglePlayer = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
 

  useEffect(() => {
    const fetchQuestions = async () => {
      try { 
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
        );
        setQuestions(response.data.results);
      } catch (error) {
        console.error("Error fetching Science Quiz:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

         

  const handleAnswerClick = (selected, correctAnswer, questionIndex) => {
  setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: selected }));

    if (selected === correctAnswer) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    };
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-700 via-blue-600 to-blue-400">
        <div className="relative">
          <div className="absolute inset-0 w-20 h-20 border-4 border-t-white/20 border-r-white/20 border-b-white/20 border-l-white rounded-full animate-spin" />
          <div className="absolute inset-0 w-20 h-20 rounded-full bg-white/10 animate-ping" />
          <div className="relative w-20 h-20 rounded-full bg-white/90 flex items-center justify-center">
            <Brain className="w-10 h-10 text-indigo-600 animate-bounce" />
          </div>
        </div>
        <div className="mt-8 text-2xl font-bold text-white flex items-center space-x-1">
          <span>Loading</span>
          <span className="flex space-x-1">
            <span className="animate-bounce delay-100">.</span>
            <span className="animate-bounce delay-200">.</span>
            <span className="animate-bounce delay-300">.</span>
          </span>
        </div>
        <p className="mt-4 text-white/80 text-lg animate-pulse">
          Preparing your quiz experience
        </p>
      </div>
    );
  }
  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold mb-4">Single Players Quiz</h1>

             
      {questions.map((question, index) => {
        const options = [...question.incorrect_answers, question.correct_answer].sort(
          () => Math.random() - 0.5
        );

        return (
          <div key={index} className="mb-6 p-4 border rounded-lg shadow-lg">
            <p className="text-xl font-semibold">
              {index + 1}. {question.question}
            </p>
            <div className="mt-3 flex flex-wrap gap-3 justify-center">
              {options.map((option, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 rounded-lg transition text-white ${
                    selectedAnswers[index] === option
                      ? option === question.correct_answer
                        ? "bg-green-500"
                        : "bg-red-500"
                      : "bg-blue-500 hover:bg-blue-700"
                  }`}
                  onClick={() => handleAnswerClick(option, question.correct_answer, index)}
                  disabled={!!selectedAnswers[index]}
                >
                  {option}
                </button>
              ))};
            </div>
          </div>
        );
      })}
      {showConfetti && <Confetti width={width} height={height} />}
    </div>
  );
};
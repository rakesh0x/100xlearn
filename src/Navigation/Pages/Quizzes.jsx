import React, { useEffect, useState } from "react";
import axios from "axios";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export const ScienceQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);

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

  if (loading)
    return <div className="text-center justify-center text-2xl py-14">Loading...</div>;

  const handleClick = (selected, correctAnswer) => {
    if (selected === correctAnswer) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 4500);
    } else {
      setShowConfetti(false);
      alert("Incorrect Option")
    }
  };

  return (
    <div className="text-center justify-center text-2xl p-4">
      <h1 className="text-3xl font-bold mb-4">Computer Science Questions</h1>
      
      {questions.map((question, index) => {
        const options = [...question.incorrect_answers, question.correct_answer]
          .sort(() => Math.random() - 0.5); 

        return (
          <div key={index} className="mb-9 p-8 border border-spacing-5 rounded-3xl shadow-2xl hover:scale-y-80">
            <p className="text-xl font-semibold">{index + 1}. {question.question}</p>
            
            <div className="mt-3 flex flex-wrap gap-3 justify-center">
              {options.map((option, i) => (
                <button
                  key={i}
                  className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition"
                  onClick={() => handleClick(option, question.correct_answer)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );
      })}
      

      {showConfetti && <Confetti width={width} height={height} />}
    </div>
  );
};

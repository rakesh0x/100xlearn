import React, { useState, useEffect } from "react";
import axios from "axios";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export const Mathsquiz = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "https://the-trivia-api.com/api/questions?categories=mathematics&limit=10"
        );
        setQuestions(response.data);
      } catch (error) {
          console.log("Error fetching the question :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  if (loading)
    return <div className="text-center justify-center text-2xl py-4">Loading...</div>;

  const handleClick = (selected, correctAnswer) => {
    if (selected === correctAnswer) {
      setShowConfetti(true);
      setSelectedOption(selected);
      setIsCorrect(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 4500);
    } else {
      setShowConfetti(false);
      setSelectedOption(selected);
      setIsCorrect(false);
      alert("Incorrect Answer");
    }
  };

  return (
    <div className="text-center justify-center text-2xl p-4">
      <p className="font-semibold text-3xl mb-4">General Knowledge</p>
      {questions.map((q, index) => {
        const Options = [...q.incorrectAnswers, q.correctAnswer].sort(
          () => Math.random() - 0.5
        );

        return (
          <div
            key={index}
            className="mb-9 font-semibold p-8 shadow-2xl hover:scale-80 rounded-2xl border border-spacing-5"
          >
            <p className="font-semibold text-xl">
              {index + 1}. {q.question}
            </p>

            <div className="mt-3 flex flex-wrap gap-3 justify-center">
              {Options.map((option, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 text-white rounded-lg transition ${
                    selectedOption === option
                      ? isCorrect
                        ? "bg-green-500"
                        : "bg-red-500"
                      : "bg-blue-500 hover:bg-blue-700"
                  }`}
                  onClick={() => handleClick(option, q.correctAnswer)}
                  disabled={selectedOption !== null}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );
      })}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={true}
          numberOfPieces={500}
          gravity={0.1}
        />
      )}
    </div>
  );
};
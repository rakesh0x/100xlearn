import React, { useState, useEffect } from "react";
import axios from "axios";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export const GeneralKnowledge = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [feedback, setFeedback] = useState({});

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
    return <div className="text-center text-2xl py-4">Loading...</div>;

  const handleClick = (index, selected, correctAnswer) => {
    if (selectedOptions[index] !== undefined) return;

    setSelectedOptions((prev) => ({ ...prev, [index]: selected }));
    if (selected === correctAnswer) {
      setShowConfetti(true);
      setFeedback((prev) => ({ ...prev, [index]: "Correct! 🎉" }));
      setTimeout(() => setShowConfetti(false), 3000);
    } else {
      setFeedback((prev) => ({ ...prev, [index]: "Incorrect ❌" }));
    }
  };

  return (
    <div className="text-center text-2xl p-6 max-w-4xl mx-auto">
      <p className="font-bold text-4xl mb-6 text-blue-600">General Knowledge Quiz</p>
      {questions.map((q, index) => {
        const Options = [...q.incorrectAnswers, q.correctAnswer].sort(
          () => Math.random() - 0.5
        );

        return (
          <div
            key={index}
            className="mb-8 p-6 bg-white shadow-xl rounded-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
          >
            <p className="font-semibold text-xl text-gray-700">
              {index + 1}. {q.question}
            </p>

            <div className="mt-4 flex flex-wrap gap-4 justify-center">
              {Options.map((option, i) => (
                <button
                  key={i}
                  className={`px-5 py-2 text-lg font-medium rounded-lg transition-all duration-200 shadow-md focus:outline-none
                    ${selectedOptions[index] === option ? 
                      (option === q.correctAnswer ? "bg-green-500 text-white" : "bg-red-500 text-white") 
                      : "bg-blue-500 text-white hover:bg-blue-700"}`}
                  onClick={() => handleClick(index, option, q.correctAnswer)}
                  disabled={selectedOptions[index] !== undefined}
                >
                  {option}
                </button>
              ))}
            </div>
            {feedback[index] && (
              <p className={`mt-4 text-xl font-semibold ${feedback[index] === "Correct! 🎉" ? "text-green-600" : "text-red-600"}`}>
                {feedback[index]}
              </p>
            )}
          </div>
        );
      })}
      {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={200} gravity={0.2} />} 
    </div>
  );
};

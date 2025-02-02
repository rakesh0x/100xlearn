import React, { useEffect, useState, useCallback } from "react";
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

  const ConfettiTop = () => (
    <Confetti
      width={width}
      height={height}
      recycle={false} 
      numberOfPieces={500} 
      gravity={0.2} 
    />
  );

  if (loading)
    return <div className="text-center justify-center text-2xl py-14">Loading...</div>;

  return (
    <div className="text-center justify-center text-2xl p-4">
      <h1 className="text-3xl font-bold mb-4">Computer Science Questions</h1>
      {questions.map((question, index) => (
          <QuizQuestion
          key={index}
          question={question.question}
          correctAnswer={question.correct_answer}
          incorrectAnswers={question.incorrect_answers}
          setShowConfetti={setShowConfetti}
        />
      ))}
      {showConfetti && <ConfettiTop />}
    </div>
  );
};

const QuizQuestion = ({ question, correctAnswer, incorrectAnswers, setShowConfetti }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const options = [...incorrectAnswers, correctAnswer].sort(() => Math.random() - 0.5);

  const handleClick = useCallback(
    (option) => {
      setSelectedOption(option);
      const correct = option === correctAnswer;
      setIsCorrect(correct);
      if (correct) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 8000);
      }
    },
    [correctAnswer, setShowConfetti]
  );

  return (
    <div className="mb-9 p-8 border border-spacing-5 rounded-3xl shadow-2xl hover:scale-y-80">
      <p className="text-xl font-semibold">{question}</p>
      <div className="mt-3 flex flex-wrap gap-3 justify-center">
        {options.map((option, i) => (
          <button
            key={i}
            className={`px-4 py-2 text-white rounded-lg transition ${
              selectedOption === option
                ? isCorrect
                  ? "bg-green-500" 
                  : "bg-red-500" 
                : "bg-blue-500 hover:bg-blue-700" 
            }`}
            onClick={() => handleClick(option)}
            disabled={selectedOption !== null}
          >
            {option}
          </button>
        ))}
      </div>
      {selectedOption && (
        <p className={`mt-4 font-semibold ${isCorrect ? "text-green-500" : "text-red-500"}`}>
          {isCorrect ? "Correct! 🎉" : "Incorrect! ❌"}
        </p>
      )}
    </div>
  );
};
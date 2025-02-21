import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export const SinglePlayer = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
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

  if (loading) return <div className="text-center text-2xl py-14">Loading...</div>;

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
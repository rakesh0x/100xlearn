import React, { useEffect, useState } from "react";
import axios from "axios";

export const ScienceQuiz = () => {
  const [questionsbar, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const options = questionsbar.map((q) => [
  ...q.incorrect_answers, 
    q.correct_answer
  ])

  return (
    <div className="text-center justify-center text-2xl">
      <h1>Science Questions</h1>
      <ul>
        {questionsbar.map((question, index) => (
          <li key={index}>
            <p>{index + 1}. {question.question}</p>
            <p>Options:</p>
            <ul className="list-disc">
              {options[index].map((option, i) => (
                <li key={i}>{option}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};


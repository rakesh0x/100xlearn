import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const MathematicsQuiz = () => {
    const [questionsbar, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchQuestions = async () => {
        try {
          const cachedQuestion = localStorage.getItem("math_quiz");
          if (cachedQuestion) {
            setQuestions(JSON.parse(cachedQuestion));
          } else {
            const response = await axios.get("https://the-trivia-api.com/api/questions?categories=mathematics&limit=10");
            localStorage.setItem("math_quiz", JSON.stringify(response.data)); 
            setQuestions(response.data); 
          }
        } catch (error) {
          console.error("Error fetching Mathematics Quiz:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchQuestions();
    }, []);
  
    if (loading)
      return <div className="text-center justify-center text-2xl py-14">Loading...</div>;
  
    const Options = questionsbar.map((a) => [
      ...a.incorrectAnswers, 
        a.correctAnswer
      ])
    return (
      <div className="text-center justify-center text-2xl">
        <h1>Mathematics Questions</h1>
        <ul>
          {questionsbar.map((question, index) => (
            <li key={index}>
              <p>{index + 1}. {question.question}</p>
              <p>Options:</p>
              <ul className="list-disc">
                {Options[index].map((option, i) => (
                  <li key={i}>{option}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  
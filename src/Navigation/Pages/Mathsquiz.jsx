import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export const MathematicsQuiz = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  
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
  
    const Options = questions.map((a) => [
      ...a.incorrect_answers, 
        a.correct_answer
      ]);

      const handleClick = (selected, correctAnswer) => {
        if( selected === correctAnswer) {
          setShowConfetti(true);
          setTimeout(() => {
            setShowConfetti(false);
          }, 4500)
        } else {
          setShowConfetti(false);
          alert("Incorrect Answer")
        }
      }


    return (
      <div className="text-center justify-center text-2xl p-4">
        <p className="font-semibold text-3xl mb-4">Mathmatics Quiz</p>
        {questions.map((q, index) => {
          const option = [ ...q.incorrect_answers, q.correct_answer ]
          .sort(() => Math.random() - 0.5 );

          return (
            <div key={index} className="mb-9 font-semibold p-8 shadow-2xl hover:scale-80 rounded-2xl border border-spacing-5">
              <p className="font-semibold text-xl">{index + 1}.{questions.questions}</p>

              <div className="mt-3 flex flex-wrap gap-3 justify-center">
                {Options.map((option, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition"
                    onClick={(handleClick(option, correct_answer))}
                  >
                    {option}
                  </button>
                ))}
             </div>
            </div>
          )
        })};
            { showConfetti && <Confetti width={width} height={height} /> }

      </div>
    )
}
        
        
    
  
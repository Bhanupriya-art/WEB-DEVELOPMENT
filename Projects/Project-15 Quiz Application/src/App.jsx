import React, { useState, useEffect } from "react";
import "./index.css";
const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyper Text Marketing Language",
      "Hyper Tool Multi Language"
    ],
    answer: "Hyper Text Markup Language",
    category: "Web Development"
  },
  {
    question: "Which company developed React.js?",
    options: ["Facebook", "Google", "Microsoft", "Apple"],
    answer: "Facebook",
    category: "Frontend Frameworks"
  },
  {
    question: "Which keyword is used to define a constant in JavaScript?",
    options: ["let", "const", "var", "define"],
    answer: "const",
    category: "JavaScript"
  },
  {
    question: "CSS stands for?",
    options: [
      "Computer Style Sheet",
      "Colorful Style Sheet",
      "Cascading Style Sheet",
      "Creative Style Syntax"
    ],
    answer: "Cascading Style Sheet",
    category: "Web Styling"
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    answer: "<ul>",
    category: "HTML Basics"
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["Laravel", "Django", "React", "Flask"],
    answer: "React",
    category: "Web Frameworks"
  },
  {
    question: "How do you declare an array in JavaScript?",
    options: [
      "let arr = []",
      "array arr = []",
      "arr = {}",
      "int arr[]"
    ],
    answer: "let arr = []",
    category: "JavaScript"
  },
  {
    question: "Which tag is used for inserting a line break in HTML?",
    options: ["<break>", "<br>", "<lb>", "<line>"],
    answer: "<br>",
    category: "HTML Tags"
  },
  {
    question: "What is the full form of API?",
    options: [
      "Application Program Interface",
      "Application Programming Interface",
      "Application Preload Interface",
      "Advanced Plugin Interface"
    ],
    answer: "Application Programming Interface",
    category: "General Tech"
  },
  {
    question: "Which method is used to fetch data from an API in JS?",
    options: ["get()", "fetch()", "retrieve()", "pull()"],
    answer: "fetch()",
    category: "JavaScript"
  }
];
export default function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const handleOptionClick = (option) => {
    if (selected !== null) return; 
    setSelected(option);
    if (option === quizData[current].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (current + 1 < quizData.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setShowScore(true);
      }
    }, 900); 
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowScore(false);
  };
  return (
    <div className="quiz-wrapper">
      <h1 className="title">Quick Quiz</h1>

      {showScore ? (
        <div className="score-card">
          <h2>Quiz Complete!</h2>
          <p>You scored <strong>{score}</strong> out of {quizData.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className="question-meta">
            <span>{quizData[current].category}</span>
            <span>{current + 1} / {quizData.length}</span>
          </div>

          <div className="progress-bar">
            <div
              className="filled"
              style={{ width: `${((current + 1) / quizData.length) * 100}%` }}
            />
          </div>

          <div className="question-card">
            <h3 className="question">{quizData[current].question}</h3>
            <div className="options">
              {quizData[current].options.map((opt, i) => (
                <button
                  key={i}
                  className={`option-btn ${
                    selected
                      ? opt === quizData[current].answer
                        ? "correct"
                        : opt === selected
                        ? "wrong"
                        : ""
                      : ""
                  }`}
                  onClick={() => handleOptionClick(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

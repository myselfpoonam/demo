
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";


const Category = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showNextQuestion, setShowNextQuestion] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          `https://opentdb.com/api.php?amount=10&category=${id}`
        );
        const data = await response.json();
        console.log(data);
        const formattedQuestions = data.results.map((question) => ({
          ...question,
          user_answer: null,
          answers: shuffleArray([
            ...question.incorrect_answers,
            question.correct_answer,
          ]),
        }));
        setQuestions(formattedQuestions);
        setScores(new Array(formattedQuestions.length).fill(false));
      } catch (error) {
        console.error(error);
      }
    };

    if (quizStarted) {
      fetchQuestions();
    }
  }, [id, quizStarted]);

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setGameOver(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowCorrectAnswer(false);
    setScores([]);
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setShowNextQuestion(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setShowNextQuestion(false);
      setSelectedAnswer(null);
      setShowCorrectAnswer(false);
    } else {
      setGameOver(true);
    }
  };

  const handleAnswerSubmit = () => {
    setShowCorrectAnswer(true);
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].user_answer = selectedAnswer;
    setQuestions(updatedQuestions);

    const updatedScores = [...scores];
    updatedScores[currentQuestion] =
      selectedAnswer === questions[currentQuestion].correct_answer;
    setScores(updatedScores);
  };

  const calculateTotalScore = () => {
    const totalScore = scores.filter((score) => score).length;
    return totalScore;
  };

  if (!quizStarted) {
    return (
      <div className="flex h-screen justify-center relative p-44">
    

        <button
          className="border-2 backdrop-brightness-50 p-6 rounded-xl text-4xl font-bold hover:backdrop-brightness-100 absolute bottom-[450px] hover:text-black text-white shadow-2xl"
          onClick={handleStartQuiz}
        >
          Start Quiz
        </button>
      </div>
    );
  }
  
  if (questions.length === 0) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <FaSpinner className="animate-spin" size={40} />
        <p className="mt-4 text-gray-600">Loading Quiz</p>
      </div>
    );
  }
  
  const question = questions[currentQuestion];
  const answers = question.answers;
  const correctAnswer = question.correct_answer;

  
  const totalScore = calculateTotalScore();
  
  return (
    <div className="flex justify-center h-screen p-20">
      <div className="backdrop-brightness-75 p-6 rounded-2xl h-fit shadow-2xl">
        <div className="flex flex-col p-10 items-center">
          <h1 className="font-bold text-black text-4xl underline">Quiz Page</h1>
          <p className="text-3xl text-gray-700 font-medium mt-4">
            Total Score: {totalScore} out of {questions.length}
          </p>
          <p className="p-6 text-2xl font-bold text-white">
            {question.question}
          </p>
          <div className="w-full rounded-xl shadow-2xl p-4 bg-white">
            <ul className="">
              {answers.map((answer, i) => (
                <div
                  className="text-xl text-black font-medium p-2"
                  key={i}
                  onClick={() => handleAnswerClick(answer)}
                >
                  <li
                    className={`cursor-pointer bg-blue-300 rounded-xl shadow-xl mt-4 p-6  ${
                      selectedAnswer === answer
                        ? "bg-green-500  "
                        : showCorrectAnswer && answer === correctAnswer
                        ? "bg-red-400"
                        : ""
                    }`}
                  >
                    {answer}
                  </li>
                </div>
              ))}
            </ul>
          </div>
          {showNextQuestion ? (
            <div>
              {showCorrectAnswer && (
                <p className="text-red-800 text-2xl mt-6 ">
                  {selectedAnswer === correctAnswer ? "Correct!" : "Incorrect!"}{" "}
                  The correct answer is: {correctAnswer}
                </p>
              )}
              <div className="flex gap-8 justify-center">
                <button
                  className="bg-blue-300 rounded-xl shadow-2xl hover:bg-blue-500 text-white text-xl font-bold p-4 rounded mt-4"
                  onClick={handleAnswerSubmit}
                >
                  Submit Answer
                </button>
                {currentQuestion + 1 < questions.length && (
                  <button
                    className="bg-blue-300 hover:bg-blue-600 shadow-2xl rounded-xl text-white font-bold p-4 text-xl rounded mt-4"
                    onClick={handleNextQuestion}
                  >
                    Next Question
                  </button>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default Category;

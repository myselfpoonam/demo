
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";


const Home = () => {
  const [quiz, setQuiz] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getQuiz() {
      try {
        const response = await fetch("https://opentdb.com/api_category.php", {
          method: "GET",
        });
        const value = await response.json();
        setQuiz(value.trivia_categories);
        setLoading(false);
      } catch (err) {
        console.log("Error", err);
        setLoading(false);
      }
    }
    getQuiz();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <FaSpinner className="animate-spin" size={40} />
        <p className="mt-4 text-gray-600">Loading Quiz Categories...</p>
      </div>
    );
  }

  return (
    <div className="h-fit p-10 flex flex-col items-center  ">

      <div className="text-5xl font-bold underline">Quiz Home Page</div>
      <div className="flex flex-wrap mt-6 justify-center gap-8">
        {quiz.map((data) => (
          <div
            className="backdrop-brightness-50 hover:animate-bounce hover:bg-red-300 mt-10 font-bold w-[20%] text-white h-52 flex justify-center items-center shadow-2xl text-3xl p-10 rounded-xl transition-colors duration-300"
            key={data.id}
          >
            <span className="text-xl text-red-600"></span>
            <Link to={`/quiz/${data.id}`} className="hover:text-purple-800">
              {data.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

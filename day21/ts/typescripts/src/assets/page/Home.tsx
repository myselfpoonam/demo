import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";


import {useQuery} from "@tanstack/react-query"

interface QuizCategory {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  
  const {data,isLoading}=useQuery<[QuizCategory]>({
    queryKey:["data"],
    queryFn: async () => {
            const response = await fetch("https://opentdb.com/api_category.php", {
              method: "GET",
            });
            const value = await response.json();
            return value.trivia_categories
          }
  })
  if (isLoading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <FaSpinner className="animate-spin" size={40} />
        <p className="mt-4 text-gray-600">Loading Quiz Categories...</p>
      </div>
    );
  }

  return (
    <div className="h-fit p-10 flex flex-col items-center">
      <div className="text-5xl font-bold underline">Quiz Home Page</div>
      <div className="flex flex-wrap mt-6 justify-center gap-8">
        {data?.map((quiz) => (
          <div
            className="backdrop-brightness-50  hover:bg-blue-500 mt-10 font-bold w-[20%] text-white h-52 flex justify-center items-center shadow-2xl text-3xl p-10 rounded-xl transition-colors duration-300"
            key={quiz.id}
          >
            <span className="text-xl text-red-600"></span>
            <Link to={`/quiz/${quiz.id}`} className="hover:text-purple-800">
              {quiz.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

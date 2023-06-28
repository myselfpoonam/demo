import React from "react";

const Onilne = () => {
  return (
    <div>
      <div className="pt-20 pr-[250px] pl-40">
        <h2 className="text-6xl font-bold">Online Exam</h2>
      </div>
      <div className="flex justify-center pt-10">
        <h2 className="text-3xl font-bold ">
          Are you ready for online exam practices
        </h2>
      </div>
      <div className="flex justify-center font-bold text-2xl pt-10">
        <button className="w-[300px] rounded-2xl bg-gradient-to-b from-[#BDAEEA] to-[#3E3876]  h-[60px] border-[1px] border-white ">
          Start Exam
        </button>
      </div>
      <div className="bg-gradient-to-r border-[1px] border-white from-[#3E3876] to-[#6A5BE8] w-3/4 ml-40 mt-10 rounded-3xl h-4/6">
        <div className="ml-5 pt-2 pb-10">
          <h2 className="font-bold text-3xl">Instructions :</h2>
          <ul className="list-disc pl-6 pt-4 text-2xl">
            <li>You will get 30 minute to solve 20 questions.</li>
            <li>You must get 10 out of 20 to pass exam. </li>
            <li>
              All the question will be objective(question with answer options)
              no any subjective questions included.
            </li>
            <li>
              You must clearly tick in the answer(Tips: better not to leave any
              questions).
            </li>
            <li>
              You must carry necessary thing for exam (pen, your citizenship
              card and payment bill).
            </li>
            <li>
              Other necessary information and process are told before exam.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Onilne;

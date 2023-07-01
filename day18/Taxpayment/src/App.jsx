import React from "react";
import { Route, Routes } from "react-router-dom";
import Apps from "./assets/components/Apps";
import { Result } from "postcss";
// import Terms from "./assets/components/Terms";

const App = () => {
  return (
    // <div className="bg-gray-300 flex justify-center  ">
    //   <div className="bg-white  mt-8 p-6 ">
    //     <div className="font-bold text-purple-600 text-2xl">
    //       {" "}
    //       Bluebook Service with Pick and Drop
    //     </div>

    //     <div className="bg-yellow-100 p-3 mt-6 rounded-xl border-2 border-orange-200">
    //       <div>Customer Support:01-5970053</div>
    //       <div>WhatsApp/Viber (Chat only):9801890083</div>
    //       <div className="pt-3">This service is only for Kathmandu Valley</div>
    //     </div>
    //     <div className="pt-8 ">
    //       <Terms />
    //     </div>
    //   </div>
    // </div>
    <div>
      <Routes>
        <Route path="/" element={<Apps/>}/>
        <Route path="/result" element={<Result/>}/>
      </Routes>
    </div>
  );
};

export default App;

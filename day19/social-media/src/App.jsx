import React from "react";
import NavBar from "./assets/components.jsx/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import Message from "./assets/pages/Message";
import "typeface-lato";

const App = () => {
  return (
    <div>
      <div className="bg-sky-200 w-full h-200vh font-lato ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

import React from "react";

import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";

import Signin from "./Components/Signin";

const App = () => {
  return (
    <div className="h-[1700px] bg-black  w-full text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default App;

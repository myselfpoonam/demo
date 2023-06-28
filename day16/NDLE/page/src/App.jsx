import React from "react";

import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";

import Signin from "./Components/Signin";
import Data from "./Components/Data";
import List from "./Components/List";
import Applicant from "./Components/Applicant";
import LicenseNo from "./Components/LicenseNo";
import Status from "./Components/Status";
import Onilne from "./Components/Onilne";

const App = () => {
  return (
    <div className="h-[1700px] bg-black  w-full font-poppins text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/data" element={<Data />} />
        <Route path="/list" element={<List />} />
        <Route path="/applicant" element={<Applicant />} />
        <Route path="/licenseNo" element={<LicenseNo />} />
        <Route path="/status" element={<Status />} />
        <Route path="/online" element={<Onilne />} />
      </Routes>
    </div>
  );
};

export default App;

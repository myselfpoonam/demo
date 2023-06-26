import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="shadow-md flex w-full fixed bg-blue-200 py-20">
      <div className="text-blue-900 font-bold text-9xl shadow-md ml-24">
        <Link to="/home"> One-Click-Pick</Link>
      </div>
      <div className="flex-1">
        <ul className="flex justify-center gap-40">
          <h2 className="text-blue-900 font-mono text-8xl">
            <Link to="/home">HOME</Link>
          </h2>
          <h2 className="font-mono text-blue-900 text-8xl">
            <Link to="/mycart">MYCART</Link>
          </h2>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

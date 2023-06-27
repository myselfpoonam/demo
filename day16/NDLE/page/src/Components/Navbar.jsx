import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="pt-10  gap-80 flex pl-40">
        <NavLink to="/">
          <h2 className="text-white text-5xl font-bold">NDLE</h2>
        </NavLink>
        <div className="">
          <ul className="text-white text-xl flex gap-20">
            <NavLink to="/landing">
              <li>Home</li>
            </NavLink>

            <NavLink to="/about">
              <li>AboutUs</li>
            </NavLink>

            <NavLink to="/contact">
              <li>Contact Us</li>
            </NavLink>

            <div className="ml-72">
              <button className="text-black w-32 h-12 rounded-3xl bg-white">
                Sign up
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

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
            <NavLink
              to="/landing"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  textDecoration: isActive ? "underline" : "",
                  color: isPending ? "red" : "white",
                };
              }}
            >
              <li>Home</li>
            </NavLink>

            <NavLink
              to="/about"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  textDecoration: isActive ? "underline" : "",
                  color: isPending ? "red" : "white",
                };
              }}
            >
              <li>About Us</li>
            </NavLink>

            <NavLink
              to="/contact"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  textDecoration: isActive ? "underline" : "",
                  color: isPending ? "red" : "white",
                };
              }}
            >
              <li>Contact Us</li>
            </NavLink>

            <div className="ml-72">
              <NavLink to="/signin">
                <button className="text-black w-32 h-14 hover:bg-indigo-200 rounded-3xl bg-white">
                  Sign in
                </button>
              </NavLink>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

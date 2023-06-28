import React from "react";
import Navbar from "./Navbar";
import List from "./List";
import { Link, NavLink } from "react-router-dom";
import Applicant from "./Applicant";
import LicenseNo from "./LicenseNo";
const Data = () => {
  return (
    <div>
      <div className="pt-20 pr-[250px] pl-40">
        <div>
          <h2 className="text-6xl font-bold">License Data</h2>
        </div>

        <div className=" pt-10 text-2xl ">
          <ul className="flex justify-between ">
            <NavLink
              to="/list"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  textDecoration: isActive ? "underline" : "",
                  color: isPending ? "red" : "white",
                };
              }}
            >
              {" "}
              <li>Reference No</li>
            </NavLink>
            <NavLink
              to="/applicant"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  textDecoration: isActive ? "underline" : "",
                  color: isPending ? "red" : "white",
                };
              }}
            >
              <li>Applicant Id</li>
            </NavLink>
            <NavLink
              to="/licenseNo"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  textDecoration: isActive ? "underline" : "",
                  color: isPending ? "red" : "white",
                };
              }}
            >
              <li>License No</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Data;

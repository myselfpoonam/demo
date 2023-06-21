import React from "react";
import { Link } from "react-router-dom";
import useCurrentUser from "./useCurrentUser";

const Navbar = () => {
  const { isAuth } = useCurrentUser();
  return (
    <div>
      <header className="header">
        <nav>
          <ul>
            <li style={{ color: "black" }}>
              <Link to="/profile" style={{ color: "white" }}>
                Profile
              </Link>
            </li>
            <li style={{ color: "black" }}>
              <Link to="/register" style={{ color: "white" }}>
                Register
              </Link>
            </li>
            {!isAuth ? (
              <li style={{ color: "black" }}>
                <Link to="/login" style={{ color: "white" }}>
                  {" "}
                  Login
                </Link>
              </li>
            ) : null}

            <li style={{ color: "black" }}>
              <Link to="/users" style={{ color: "white" }}>
                Users
              </Link>
            </li>
            <li style={{ color: "black" }}>
              <Link to="/logout" style={{ color: "white" }}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

import React from "react";

const Logout = () => {
  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <div></div>
      <button onClick={logOut} className="logout">
        LOG OUT BUTTON
      </button>
    </>
  );
};

export default Logout;

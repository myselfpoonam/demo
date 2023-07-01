import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const tax = location.state?.tax;

  return (
    <div>
      <h1>Result Page</h1>
      {tax && <p>Tax: {tax}</p>}
    </div>
  );
};

export default Result;

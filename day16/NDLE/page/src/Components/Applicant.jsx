import React from "react";
import Data from "./Data";
import DataSearch from "./DataSearch";

const Applicant = () => {
  return (
    <div>
      <Data />
      <DataSearch
        title="Search Data Using Applicant No"
        input={
          <input
            type="name"
            className="w-[550px] rounded-2xl p-3 text-black text-xl h-[50px]"
            placeholder="      Enter Applicant No"
          />
        }
      />
    </div>
  );
};

export default Applicant;

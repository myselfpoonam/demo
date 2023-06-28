import React from "react";
import Data from "./Data";
import DataSearch from "./DataSearch";

const LicenseNo = () => {
  return (
    <div>
      <Data />
      <DataSearch
        title="Search Data Using License No"
        input={
          <input
            type="name"
            className="w-[500px] rounded-2xl p-3 text-xl h-[50px]"
            placeholder="      Enter License No"
          />
        }
      />
    </div>
  );
};

export default LicenseNo;

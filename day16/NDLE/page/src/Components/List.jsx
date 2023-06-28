import React from "react";
import Data from "./Data";
import DataSearch from "./DataSearch";
import { BiSearch } from "react-icons/bi";

const List = () => {
  return (
    <div>
      <Data />
      <DataSearch
        title="Search Data Using Reference No"
        input={
          <input
            type="name"
            placeholder="      Enter reference"
            className="w-[550px] rounded-2xl p-3 text-xl h-[50px]"
          />
        }
      />
    </div>
  );
};

export default List;

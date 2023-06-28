import React from "react";
import { BiSearch } from "react-icons/bi";

const DataSearch = ({ title, input }) => {
  return (
    <div>
      <div className="pt-20 flex justify-center text-4xl font-bold">
        <h2> {title}</h2>
      </div>
      <div className="flex justify-center pt-4 ">
        <div className="relative">
          {input}
          <div className="absolute top-3 text-black text-2xl left-3">
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSearch;

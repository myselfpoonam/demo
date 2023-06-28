import React from "react";
import { BiSearch } from "react-icons/bi";

const Status = () => {
  return (
    <div className="h-[1000px]">
      <div className="pt-20 pr-[250px] pl-40">
        <div>
          <h2 className="text-6xl font-bold">License Status</h2>
        </div>
        <div className="pt-10 flex justify-center text-3xl font-bold">
          <h2> DOTM WEB SERVER</h2>
        </div>
        <div className="mt-2 flex justify-center text-xl font-bold">
          Smart License Printed Detail Status
        </div>
        <div className="pt-2 flex justify-center text-3xl font-bold">
          Enter Smart License NO(Status)
        </div>
        <div className="flex justify-center pt-4 ">
          <div className="relative">
            <input
              type="name"
              className="w-[450px] rounded-2xl p-3 text-black text-xl h-[50px] "
              placeholder="     Eg:00-00-000000"
            />
            <div className="absolute top-3 text-black text-2xl left-2">
              <BiSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;

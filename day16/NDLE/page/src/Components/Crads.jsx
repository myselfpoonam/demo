import React from "react";

const Crads = ({ title, icon, side }) => {
  return (
    <div className="">
      <div className="border-2 text-xl mt-10 border-white border-solid flex w-[600px] p-3 h-[60px] justify-between  rounded-3xl hover:bg-white hover:text-black cursor-pointer">
        <div className="text-3xl"> {icon} </div>
        <div> {title} </div>
        <div className="text-lg pt-2"> {side} </div>
      </div>
    </div>
  );
};

export default Crads;

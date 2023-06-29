import React from "react";

const List = ({ images }) => {
  return (
    <div>
      <div className="">
        <div>
          <img src={images} className="h-20 w-20  rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default List;

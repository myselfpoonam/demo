import React from "react";

const Blogs = ({
  img,
  name,
  time,
  icons,
  descriptions,
  descriptionss,
  description,
  img1,
  img2,
  img3,
  friend,
  hr,
  heart,
  likes,
  comment,
  comments,
}) => {
  return (
    <div className="bg-gray-100 p-6 rounded-2xl">
      <div className="flex  flex justify-between">
        <div>
          <img src={img} className="w-14 h-14  rounded-full" />
        </div>
        <div>
          <div className="text-lg mr-28 font-bold"> {name}</div>
          <div className="text-gray-400 text-sm">{time}</div>
        </div>
        <div className="text-3xl text-gray-500 flex justify-between">
          <div className="flex justify-end">{icons}</div>
        </div>
      </div>
      <div className="pt-6">
        {description}
        <br />
        {descriptions}
        <br />
        {descriptionss}
      </div>
      <div className="relative flex">
        <div className=" flex  pt-6">
          <img src={img1} className="w-8 h-8  absolute left-5 rounded-full" />
          <img src={img2} className="w-8 h-8  absolute left-8 rounded-full " />
          <img src={img3} className="w-8 h-8  rounded-full" />
        </div>
        <div className="flex justify-center mt-6 ml-10 text-sm  text-gray-400 items-center">
          {friend}
        </div>
      </div>
      <div className="pt-6">{hr}</div>
      <div className="flex gap-16 pt-4">
        <div className="flex gap-2 p-2 rounded-xl justify-center bg-blue-100 text-blue-700 items-center">
          <div className="text-2xl">{heart}</div>
          <div>{likes}</div>
        </div>
        <div className="flex pt-4 p-2 justify-center text-gray-500 items-center ">
          <div className="text-2xl">{comment}</div>
          <div>{comments}</div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

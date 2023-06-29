import React from "react";

const Profile = ({ image, name, nickname }) => {
  return (
    <div className="flex text-black ">
      <div>
        <img src={image} className="h-24 w-24 rounded-full" />
      </div>
      <div className="p-3">
        <h2 className="text-2xl font-bold">{name}</h2>
        <h2 className="text-gray-600">{nickname}</h2>
      </div>
    </div>
  );
};

export default Profile;

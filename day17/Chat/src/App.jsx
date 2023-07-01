import React from "react";
import img1 from "../src/assets/images/img1.jpg";
import img2 from "../src/assets/images/img6.jpg";
import img3 from "../src/assets/images/img3.jpg";
import img4 from "../src/assets/images/img4.jpg";
import img5 from "../src/assets/images/img5.jpg";
import img6 from "../src/assets/images/img6.jpg";

import List from "./components/List";
import Profile from "./components/Profile";

function App() {
  const Pictures = [
    { image: img1 },

    { image: img2 },
    { image: img3 },
    { image: img4 },
    { image: img5 },
    { image: img6 },
  ];

  const Users = [
    { image: img1, name: "Azar Hosseini", nickname: "Evelyn Allen" },
    { image: img2, name: "Phet Putrie", nickname: "Thitiwat Shimma" },
    { image: img3, name: "Kay TotleBen", nickname: "Prescoot MacCaffery" },
    { image: img4, name: "Brijamohan Mallick", nickname: "Aif Huncoot" },
    { image: img5, name: "Miriam de Jesus", nickname: "Anne-Marije Markink" },
    { image: img6, name: "Yahiro Ayuko", nickname: "Tndu Chukarvarti" },
  ];
  return (
    <>
      <div className="bg-blue-500  rounded-3xl text-white h-100 flex justify-center">
        <div className=" p-8">
          <div className="text-5xl font-bold pb-4">Chats</div>
          <div className="bg-stone-200 rounded-2xl">
            <div className="bg-white rounded-2xl ">
              <div className="flex gap-4 p-6">
                <div className="border-2   border-black text-[44px] text-blue-500 border-dashed h-20 w-20 flex justify-center items-center rounded-full ">
                  +
                </div>
                {Pictures.map((items) => (
                  <List images={items.image} />
                ))}
              </div>
              <div className="pb-6">
                <ul className="flex gap-10  text-2xl text-gray-500 ml-8">
                  <li className="text-blue-500">All</li>
                  <li>Family</li>
                  <li>Buddies</li>
                </ul>
              </div>
            </div>

            <div className="p-4 flex flex-col gap-4 ">
              {Users.map((items) => (
                <Profile
                  image={items.image}
                  name={items.name}
                  nickname={items.nickname}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

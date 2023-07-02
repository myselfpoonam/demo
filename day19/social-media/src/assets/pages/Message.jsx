import React from "react";
import NavBar from "../components.jsx/NavBar";
import { AiOutlineDown } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import photo1 from "../images/img5.jpg";
import photo2 from "../images/img2.jpg";
import photo3 from "../images/img1.jpg";
import photo4 from "../images/img3.jpg";
import photo5 from "../images/img4.jpg";
import photo6 from "../images/img6.jpg";
import Profile from "../components.jsx/Profile";
import { BiSolidMessageRoundedDots } from "react-icons/bi";

const Message = () => {
  return (
    <div className="">
      <div className="flex justify-center pt-10">
        <div className=" bg-white pt-10 rounded-3xl  ">
          <div className="p-6">
            <div className="flex gap-2">
              <div className="text-3xl font-bold">Messages</div>
              <div className="pt-3 ">
                <AiOutlineDown />
              </div>
              <div className="flex  items-center font-bold pl-[170px] p-2 text-3xl">
                <FiSearch />
              </div>
            </div>
            <div className="">
              <div className="text-gray-500 pt-6">Pinned</div>
              <div className="relative">
                <div className="flex pt-6 gap-4">
                  <div className="relative">
                    <div>
                      <img src={photo1} className="w-16 h-16  rounded-full" />
                      <div className="bg-green-400 w-4 h-4 absolute bottom-0 left-11 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex  flex-col justify-center">
                    <div className="font-bold">Robert Richards</div>
                    <div className="flex text-sm text-gray-500 justify-center items-center">
                      <p>Hello, tomorrow in 5 o'clock</p>
                      <p className="text-gray-300">.5m</p>
                      <div className="w-6 h-6 flex absolute top-10 right-0 text-sm  justify-center items-center text-white rounded-full bg-[#2663FF]">
                        2
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="text-gray-500 pt-8">Other</div>
                <div>
                  <div className="relative">
                    <div>
                      <Profile
                        image={photo2}
                        name="Wendy Watson"
                        message="We new to meet today."
                        time="12m"
                      />
                      <div className="pt-4 pl-[70px]">
                        <hr />
                      </div>
                      <Profile
                        image={photo3}
                        name="Wendy Watson"
                        message="We new to meet today."
                        time="12m"
                      />
                      <div className="pt-4 pl-[70px]">
                        <hr />
                      </div>
                      <Profile
                        image={photo4}
                        name="Harold Howard"
                        message="Check mail,please!!."
                        time="1h"
                      />
                      <div className="pt-4 pl-[70px]">
                        <hr />
                      </div>
                      <Profile
                        image={photo5}
                        name="Kathryn Alexander"
                        message="Alright!!!, It fine."
                        time="yesterday"
                      />
                      <div className="pt-4 pl-[70px]">
                        <hr />
                      </div>
                      <Profile
                        image={photo6}
                        name="Bernard Nguyen"
                        message="Hope to see you soon. "
                        time="2d"
                      />
                      <div className="pt-4 pl-[70px]">
                        <hr />
                      </div>
                      <Profile
                        image={photo2}
                        name="Nathan Fox"
                        message="Thank you so much."
                        time="4d"
                      />
                    </div>
                    <div className="w-8 h-6 flex ml-[154px] text-sm  justify-center items-center text-white rounded-full  absolute top-8 right-0 bg-[#2663FF]">
                      12
                    </div>
                    <div className="w-14 h-14 flex absolute bottom-8 right-0 justify-center items-center rounded-full  bg-[#2663FF]">
                      <div className="text-white text-5xl ">
                        <BiSolidMessageRoundedDots />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <NavBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;

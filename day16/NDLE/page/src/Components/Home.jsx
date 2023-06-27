import React from "react";

import Navbar from "./Navbar";
import image from "../assets/images/img1.png";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div className="flex  h-full">
        <div className="pl-40 flex-1 pt-36 w-7/12 ">
          <h1 className="text-white text-7xl font-bold">
            Download Our <br />
            App Today
          </h1>
          <p className="text-white pt-20">
            ्राइभिङ परीक्षा तयारीको लागि अब सजिलो अध्ययन गर्नुहोस्। यसमा
            तपाईंलाई <br /> पूर्ण पाठ्यक्रम, महत्वपूर्ण सूचना, प्रश्नोत्तरहरू र
            अभ्यास सामग्री प्राप्त हुनेछ। <br /> आफ्नो ड्राइभिङ परीक्षा तयारीलाई
            अब सहज बनाएर सुरक्षित सडक यात्रामा पूर्ण <br /> विश्वास जोगाउनुहोस्।
          </p>
          <div class="gap-10 flex">
            <button className="bg-slate-400 mt-8  w-52 h-20 flex rounded-2xl  text-black">
              <div className="p-3  ">
                <BsApple className="text-4xl " />
              </div>
              <div className="p-2">
                <p className="">Download on the</p>
                <p className="font-bold text-2xl">App Store</p>
              </div>
            </button>

            <div>
              <button className="bg-slate-400 mt-8 w-52  flex h-20 rounded-2xl text-black">
                <div className="p-3">
                  <FaGooglePlay className="text-3xl" />
                </div>
                <div className="p-2">
                  <p>Get IT ON</p>
                  <h1 className="font-bold text-2xl">Google Play</h1>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 relative mt-8">
          <div className=" bg-gradient-to-t from-indigo-600 via-purple-300 to-purple-200 ml-60 w-2/5 h-[780px] rounded-3xl"></div>
          <div className="absolute mr-36 top-0">
            <img src={image} alt="" className=" w-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

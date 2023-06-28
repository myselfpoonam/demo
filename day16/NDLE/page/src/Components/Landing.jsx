import React from "react";
import Crads from "./Crads";
import { FaWpforms } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { RiTodoLine } from "react-icons/ri";
import { BiCycling } from "react-icons/bi";
import { AiOutlineCreditCard } from "react-icons/ai";
import Services from "./Services";
import { FiSearch } from "react-icons/fi";
import { LiaIdCardSolid } from "react-icons/lia";
import { AiOutlineEye } from "react-icons/ai";

import { BsFillCarFrontFill } from "react-icons/bs";
import { PiExamBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div className="flex ">
        <div className="flex-1 pl-40 text-white pt-20">
          <div>
            <h2 className="text-7xl font-bold">
              Driving License <br /> Process
            </h2>
            <div className="">
              <Crads
                title="Online Form "
                icon={<FaWpforms />}
                side={<FaGreaterThan />}
              />
              <Crads
                title="Document Submisson"
                icon={<CgFileDocument />}
                side={<FaGreaterThan />}
              />
              <Crads
                title="Exam(Likhit)"
                icon={<RiTodoLine />}
                side={<FaGreaterThan />}
              />
              <Crads
                title="Trial"
                icon={<BiCycling />}
                side={<FaGreaterThan />}
              />
              <Crads
                title="Payment and License"
                icon={<BiCycling />}
                side={<FaGreaterThan />}
              />
            </div>
          </div>
        </div>
        <div className="flex-1 pt-64">
          <div className="bg-gradient-to-t rounded-3xl from-purple-400 via-purple-500 to-purple-700 text-white w-[700px] h-[480px]">
            <h1 className="p-4 text-bold text-5xl">Online Form</h1>
            <p className="text-2xl p-4">
              Apply for a new driving license, renewal,or new category
              online.Limited quotes available, and agent assistance is an option
              for those facing form difficulties
            </p>
            <h2 className="text-3xl p-4 font-bold">Related Links</h2>
            <ul>
              <li className="list-disc ml-10">
                <a href="#" className="p-4 text-2xl">
                  Online Registration{" "}
                </a>
              </li>
              <br />
              <li className="list-disc ml-10">
                <a href="#" className="p-4 text-2xl">
                  Registration Process
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ml-40 mt-20">
        <h1 className="text-white font-bold text-7xl">Our Services</h1>
      </div>
      <div className=" ml-40 mt-20 bg-gradient-to-t from-purple-400 to-purple-800 gap-20 rounded-3xl  w-[1500px] h-[450px] ">
        <div className="flex justify-between mr-20">
          <Link to="/data">
            <Services title="Liscense Data" icon={<FiSearch />} />
          </Link>
          <Link to="/status">
            <Services title="Licene status " icon={<LiaIdCardSolid />} />
          </Link>
          <Link to="/online">
            <Services title="Online Exam" icon={<RiTodoLine />} />
          </Link>
          <Services title="Color Vision" icon={<AiOutlineEye />} />
        </div>
        <div className="flex justify-center gap-20 ">
          <div>
            <Services title="Driving Liscense" icon={<BsFillCarFrontFill />} />
          </div>
          <div className="pr-20">
            <Services title="Exam Result" icon={<PiExamBold />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

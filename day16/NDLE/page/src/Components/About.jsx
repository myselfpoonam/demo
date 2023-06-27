import React from "react";
// import { image } from "../assets/images/img3.png";

const About = () => {
  return (
    <div>
      <div className="flex pt-20 pl-40 pr-20">
        <div className=" text-white ">
          <h1 className="font-bold text-5xl">
            About NDLE:Nepal Driving
            <br /> License Examination
          </h1>
          <p className="text-xl mt-8">
            Welcome to NDLE, your trusted destination for National Driver's
            <br /> License Examination information and resources. Our mission{" "}
            <br />
            is to ensure road safety and promote responsible driving <br />
            through comprehensive driver's license evaluations.
          </p>
        </div>
        <div className=" bg-red-500">
          {/* <img src={image} alt="image" /> */}
        </div>
      </div>
      <div className="flex pt-20 pl-40 gap-40 pr-20">
        <div className="bg-red-100 w-[800px]">dfbh</div>
        <div className=" text-white">
          <h1 className="font-bold text-5xl">Our Purpose</h1>
          <p className="text-xl mt-8">
            At NDLE, we understand the importance of
            <br /> competent drivers on the road. Our purpose is to <br />
            assess and evaluate individuals seeking a driver's <br />
            license to ensure they possess the necessary k<br /> nowledge and
            skills to drive safely. We aim <br />
            to reduce accidents, improve traffic management,
            <br /> and enhance overall road safety standards.
          </p>
        </div>
      </div>
      <div className="flex pt-20 pl-40 pr-20">
        <div className=" text-white ">
          <h1 className="font-bold text-5xl">Join us Today</h1>
          <p className="text-xl mt-8">
            Embark on your journey towards a driver's license with NDLE. <br />
            Prepare with confidence, gain essential knowledge, and <br />
            demonstrate your competence on the road. Together, let's
            <br /> build a safer driving community. Contact us to learn more
            <br /> about NDLE or explore our resources to kick-start your
            preparation today.
          </p>
        </div>
        <div className=" bg-red-500">
          {/* <img src={image} alt="image" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;

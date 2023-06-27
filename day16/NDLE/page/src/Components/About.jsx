import React from "react";
// import { image } from "../assets/images/img3.png";
import image from "../assets/images/img4.png";
import image1 from "../assets/images/img5.png";
import image2 from "../assets/images/img6.png";

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
        <div className="pl-56">
          <img src={image} alt="image" />
        </div>
      </div>
      <div className="flex pt-8 pl-40 gap-40 pr-20">
        <div className="">
          <img src={image1} alt="" />
        </div>
        <div className=" text-white">
          <h1 className="font-bold text-5xl">Our Purpose</h1>
          <p className="text-xl mt-8">
            At NDLE, we understand the importance of
            <br /> competent drivers on the road. Our purpose is to <br />
            assess and evaluate individuals seeking a driver's license <br /> to
            ensure they possess the necessary knowledge
            <br /> and skills to drive safely. We aim to reduce accidents,
            improve <br />
            traffic management, and enhance overall road safety standards.
          </p>
        </div>
      </div>
      <div className="flex pt-8 pl-40 pr-20">
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
        <div className="pl-56">
          <img src={image2} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import img1 from "../images/ban1.png";

const HeroSec = () => {
  return (
    <div className="Hero-sec relative pt-[90px] top-0 min-lg:h-[100vh] text-white flex ">
      <div></div>
      <div className="container bg-cover lg:w-[50%] ml-4 flex flex-col justify-center items-center ">
        <div className="section1">
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
        </div>

        <div>
          <h1 className="text-base lg:text-4xl lg:font-bold lg:mr-24">
            Decentralized Smart Contract
          </h1>
          <p className="text-[1rem] mt-5 text-[#999999]  lg:text-[1.25rem] lg:font-light">
            On USDT With Own Native Token Secure Grow Fund <br /> (Polygon
            Network)
          </p>
        </div>
      </div>

      <div className="lg:w-[50%] mt-16 ">
        <img src={img1} alt="" className="lg:w-[80%]" />
      </div>
    </div>
  );
};

export default HeroSec;

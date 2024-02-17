import React from "react";
import img1 from "../images/Token-Pocket.png";
import img2 from "../images/trust.png";
import img3 from "../images/wallet11.png";

const Polygon = () => {
  return (
    <>
      <div className=" bg-[#0f0f0f] lg:h-[100vh] flex flex-col  items-center">
        <div className="flex flex-col text-center my-12 leading-10 justify-center items-center lg:mb-16">
          <h1 className="w-[40%] flex flex-col justify-center items-center lg:w-[100%] leading-10 text-center  text-[36px] text-white font-bold">
            <span className="leading-relaxed">Polygon</span>
            Blockchain
          </h1>
          <div
            className="small-border bg-color-2 mt-4"
            style={{ backgroundSize: "cover" }}
          />
        </div>
        <div className="flex px-5 lg:w-[60%] items-center justify-center text-center">
          <p className="text-[#999999] text-[1.25rem] font-light mb-10">
            Polygon offers a highly scalable environment, making it suitable for
            various decentralized applications (dApps). The network provides
            Layer 2 solutions that boost the efficiency and throughput of
            Ethereum. Users benefit from cost-effective transactions, making it
            accessible for a broader audience.
          </p>
        </div>
        <div className="lg:flex w-[70%] lg:w-[40%]">
          <a
            href="#header"
            className="start my-4 lg:w-[80%] lg:my-0 h-[25vh] rounded-2xl flex justify-center items-center lg:ml-5"
          >
            <img src={img1} alt="" />
          </a>
          <a
            href="#header"
            className="start my-4 lg:w-[80%] lg:my-0 h-[25vh] rounded-2xl flex justify-center items-center lg:ml-5"
          >
            <img src={img2} alt="" />
          </a>

          <a
            href="#header"
            className="start my-4 lg:w-[80%] lg:my-0 h-[25vh] rounded-2xl flex justify-center items-center lg:ml-5"
          >
            <img src={img3} alt="" />
          </a>
        </div>
      </div>
      <hr className="w-full" />
    </>
  );
};

export default Polygon;

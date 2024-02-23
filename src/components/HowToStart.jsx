import React from "react";
import img1 from "../images/wallet1.png";
import img2 from "../images/matic.png";
import img3 from "../images/b-coin.png";
import img4 from "../images/smile.png";

const HowToStart = () => {
  return (
    <>
      <div className="lg:h-[90vh] bg-[#0f0f0f] text-white flex flex-col justify-center items-center">
        <div className="mt-[40px]">
          <h1 className="text-[36px] font-bold">How to start ?</h1>
          <div
            className="small-border bg-color-2 mt-4"
            style={{ backgroundSize: "cover" }}
          />
        </div>

        <div className=" lg:flex justify-evenly items-center ">
          <div className="lg:w-[88%] p-5 lg:p-0 lg:flex justify-evenly items-center ">
            <div className="start lg:w-[20%] lg:h-[60vh] flex flex-col  items-center rounded-3xl p-7 ">
              <img src={img1} alt="" />{" "}
              <h3 className="text-[16px] text-white font-bold my-6">Step 1</h3>
              <p className="text-[#999999] text-[1.25rem] font-light">
                Access your Trust Wallet, Token Pocket, or MetaMask Wallet.
              </p>
            </div>
            <div className="start mt-4 lg:w-[20%] lg:h-[60vh] flex flex-col  items-center rounded-3xl p-7 ">
              <img src={img2} alt="" />{" "}
              <h3 className="text-[16px] text-white font-bold my-5">Step 2</h3>
              <p className="text-[#999999] text-[1.25rem] font-light">
                Ensure you have an ample quantity of USDT in your wallet to
                cover the costs of ID activation and gas fees.
              </p>
            </div>
            <div className="start mt-4 lg:w-[20%] lg:h-[60vh] flex flex-col  items-center rounded-3xl p-7 ">
              <img src={img3} alt="" className="w-[15%] lg:w-[40%]" />{" "}
              <h3 className="text-[16px] text-white font-bold my-6">Step 3</h3>
              <p className="text-[#999999] text-[1.25rem] font-light">
                Connect your wallet with our website."
              </p>
            </div>
            <div className="start mt-4 lg:w-[20%] lg:h-[60vh] flex flex-col  items-center rounded-3xl p-7 ">
              <img src={img4} alt="" />{" "}
              <h3 className="text-[16px] text-white font-bold my-6">Step 4</h3>
              <p className="text-[#999999] text-[1.25rem] font-light">
                "Enter into the Alexa Global Ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToStart;

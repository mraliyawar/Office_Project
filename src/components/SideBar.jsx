import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const SideBar = ({ open, setOpen }) => {
  return (
    <div className="fixed top-0 bg-[#ee9b2c]  w-[40%] lg:w-[20%] h-[100vh] z-[9999]">
      <span className=" cursor-pointer bg-white w-[100%]">
        <IoCloseCircleSharp onClick={() => setOpen(!open)} />
      </span>
      <div className="w-[full] h-[13vh] flex justify-center items-center">
        <FaUserCircle className="w-[20%] text-white h-[5vh]" />
        <h1 className=" text-white text-[17px] font-medium">0xD05...5E5D</h1>
      </div>

      <div className="w-[99%]  bg-black h-[100vh] p-2 ">
        <div className=" text-white ">
          <div className="sidebox ">Dashboard</div>
          <div className="sidebox ">Deposit Details</div>
          <div className="sidebox ">Direct Details</div>
          <div className="sidebox ">Team Details</div>
          <div className="sidebox ">Reward Details</div>
          <div className="sidebox ">Reward History</div>
          <div className="sidebox ">Withdrawal</div>
          <div className="sidebox ">Withdrawal History</div>
          <div className="sidebox ">PLAN</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

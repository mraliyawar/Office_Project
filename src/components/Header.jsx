import React from "react";
import img1 from "../images/logo.png";
import { Link } from "react-router-dom";

const Header = ({ connectMetaMask }) => {
  return (
    <div
      id="header"
      className=" absolute top-0 z-[1001] flex w-full justify-around items-center lg:w-full lg:flex lg:justify-center lg:items-center h-20 bg-none text-white "
    >
      <div className="w-[20%] ml-3 md:w-[40%] lg:w-[60%] lg:m-5 ">
        <img src={img1} alt="" className="w-16 md:w-24 md:ml-5 lg:w-32" />
      </div>
      <div className="flex justify-around w-[80%] md:w-[60%] lg:w-[40%]">
        <ul className="flex justify-evenly font-semibold w-[100%] text-sm lg:flex lg:justify-evenly lg:items-center lg:w-full lg:text-base cursor-pointer">
          <li>Home</li>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#roadmap">Roadmap</a>

          <Link to="/account">
            <button
              className="connect-btn p-[2px] lg:p-1 lg:px-5 lg:py-2 lg:font-extrabold"
              onClick={() => connectMetaMask()}
            >
              Connect
            </button>
          </Link>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Header;

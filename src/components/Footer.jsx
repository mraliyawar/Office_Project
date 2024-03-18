import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

import img1 from "../images/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 bg-[#0f0f0f] body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <img src={img1} alt="" className="w-[8%]" />
          <p className="text-sm text-[#999999] font-normal sm:ml-4 sm:pl-4 sm:border-l-2 sm:text-[#999999]  sm:py-2 sm:mt-0 mt-4">
            © Copyright 2023 - Secure Grow Fund| All Rights Reserve
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start cursor-pointer  ">
            <div className="bg-[#1d91c2] text-black rounded-full w-[100%] flex justify-center items-center text-[30px] p-4">
              <FaTelegramPlane />
            </div>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

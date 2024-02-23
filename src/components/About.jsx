import React from "react";
import img1 from "../images/man4.png";
import img2 from "../images/b-coin.png";

const About = () => {
  return (
    <>
      <div
        id="about"
        className=" bg-[#0f0f0f] text-white flex flex-col justify-center items-center "
      >
        <h1 className="text-4xl mt-4">About Us</h1>
        <div
          className="hidden-div small-border bg-color-2 mt-4"
          style={{ backgroundSize: "cover" }}
        />

        <div className="hidden-div flex flex-col justify-center items-center mt-5 lg:flex lg:flex-row-reverse ">
          <div className="hidden-div lg:w-[50%] flex justify-center items-center">
            <img src={img1} alt="" className="w-[80%]" />
          </div>
          <div className="hidden-div lg:w-[50%] lg:ml-[30px] flex justify-center items-center p-5 text-[1.25rem] font-light">
            <p className="text-[#999999] leading-[26px]">
              Secure Grow Fund operates as a completely decentralized and
              transparent ecosystem, committed to providing its users with fully
              transparent and immutable data. It maintains the highest standards
              of control, which have been established through a rigorous
              mathematical model deduction process. By merging mathematical
              modeling from the banking system, market operation mechanisms, and
              blockchain technology, Secure Grow Fund is dedicated to pioneering
              the world's inaugural ranking matrix decentralized platform. This
              signifies a simple mathematical innovation capable of delivering
              significant benefits to Secure Grow Fund participants globally
              while safeguarding your hard-earned money.
              <div className="mt-4 leading-[26px]">
                This represents an exceptional opportunity for us to
                collectively achieve financial independence. The future has
                arrived, and we eagerly look forward to embarking on this
                journey with you.
              </div>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#0f0f0f] p-5 flex flex-col justify-center items-center lg:p-0 ">
        <div className="lg:w-[50%] flex flex-col justify-center items-center mt-16">
          <div className="hidden-div1">
            <img src={img2} alt="" className="w-[200px]" />
          </div>
          <div>
            <p className="hidden-div1 text-white text-[1.25rem] font-medium mt-5">
              If you seek a decentralized system effectively connecting the real
              and virtual realms, Alexa Global is the ideal choice. Our goal is
              to create a world that aligns with the timeless sentiment of being
              unstoppable, unerasable, and uninterrupted..
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

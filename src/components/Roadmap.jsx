import React from "react";
import img1 from "../images/arrow.77b4ac46.svg";
import img from "../images/step-end.png";
import img2 from "../images/step-working.png";
import img3 from "../images/step-grey.png";
import img4 from "../images/step-grey.png";

const Roadmap = () => {
  return (
    <div>
      <section
        className="Roadmapp min-h-[90vh] bg-[#0f0f0f] "
        id="Roadmapp"
        style={{ backgroundSize: "cover" }}
      >
        <div id="roadmap" className="row " style={{ backgroundSize: "cover" }}>
          <div className="col-lg-12" style={{ backgroundSize: "cover" }}>
            <div className="text-center" style={{ backgroundSize: "cover" }}>
              <h2 className="text-white text-[36px] font-bold mt-10">
                Roadmapp
              </h2>
              <div
                className="small-border bg-color-2 mt-[25px]"
                style={{ backgroundSize: "cover" }}
              />
            </div>
          </div>
        </div>
        <div
          className=" flex steps__wrapper bg-[#212121] w-[90%] min-h-[60vh] p-9 rounded-3xl"
          style={{ backgroundSize: "cover" }}
        >
          <div
            className="steps flex flex-wrap"
            style={{ backgroundSize: "cover" }}
          >
            <div
              className="steps__item w-[20%] ml-8 "
              style={{ backgroundSize: "cover" }}
            >
              <div
                className="steps__item-icon"
                style={{ backgroundSize: "cover" }}
              >
                <img svg-inline svg-sprite alt="step-orange" src={img} />
                <img svg-inline svg-sprite alt="step-orange" src={img1} />
              </div>
              <div
                className="steps__item-name"
                style={{ backgroundSize: "cover" }}
              >
                {" "}
                Product Idea &amp; Planning{" "}
              </div>
              <div
                className="steps__item-date"
                style={{ backgroundSize: "cover" }}
              >
                {" "}
                Oct - 2023
              </div>
            </div>
            <div
              className="steps__item w-[20%] ml-8"
              style={{ backgroundSize: "cover" }}
            >
              <div
                className="steps__item-icon"
                style={{ backgroundSize: "cover" }}
              >
                <img svg-inline svg-sprite alt="step-orange" src={img2} />
                <img svg-inline svg-sprite alt="step-orange" src={img1} />
              </div>
              <div
                className="steps__item-name"
                style={{ backgroundSize: "cover" }}
              >
                {" "}
                Discussion with Leaders{" "}
              </div>
              <span>We are here</span>
              <div
                className="steps__item-date"
                style={{ backgroundSize: "cover" }}
              >
                {" "}
                Nov - 2023{" "}
              </div>
            </div>
            <div
              className="steps__item w-[20%] ml-8"
              style={{ backgroundSize: "cover" }}
            >
              <div
                className="steps__item-icon"
                style={{ backgroundSize: "cover" }}
              >
                <img svg-inline svg-sprite alt="step-grey-reverse" src={img3} />
                <img svg-inline svg-sprite alt="step-orange" src={img1} />
              </div>
              <div
                className="steps__item-name"
                style={{ backgroundSize: "cover" }}
              >
                {" "}
                Planning for Development
              </div>
              <div
                className="steps__item-date"
                style={{ backgroundSize: "cover" }}
              >
                {" "}
                Nov - 2023{" "}
              </div>
            </div>
            <div
              className="steps__item w-[20%] mt-10 ml-8 lg:mt-0"
              style={{ backgroundSize: "cover" }}
            >
              <div
                className="steps__item-icon"
                style={{ backgroundSize: "cover" }}
              >
                <img svg-inline svg-sprite alt="step-grey-reverse" src={img4} />
                <img svg-inline svg-sprite alt="step-orange" src={img1} />
              </div>
              <div
                className="steps__item-name"
                style={{ backgroundSize: "cover" }}
              >
                {" "}
                ALEXA GLOBAL TOKEN Roadmapp PLANNING{" "}
              </div>
              <div
                className="steps__item-date"
                style={{ backgroundSize: "cover" }}
              >
                {" "}
                Nov - 2023{" "}
              </div>
            </div>
            <div
              className="steps__item w-[20%] mt-10 ml-8 lg:mt-6"
              style={{ backgroundSize: "cover" }}
            >
              <div
                className="steps__item-icon"
                style={{ backgroundSize: "cover" }}
              >
                <img svg-inline svg-sprite alt="step-grey-reverse" src={img4} />
                <img svg-inline svg-sprite alt="step-orange" src={img1} />
              </div>
              <div
                className="steps__item-name"
                style={{ backgroundSize: "cover" }}
              >
                {" "}
                Product Launching{" "}
              </div>
              <div
                className="steps__item-date"
                style={{ backgroundSize: "cover" }}
              >
                {" "}
                Nov- 2023
              </div>
            </div>
            <div
              className="steps__item w-[20%] mt-10 ml-8 lg:mt-6"
              style={{ backgroundSize: "cover" }}
            >
              <div
                className="steps__item-icon"
                style={{ backgroundSize: "cover" }}
              >
                <img svg-inline svg-sprite alt="step-grey-reverse" src={img4} />
                <img svg-inline svg-sprite alt="step-orange" src={img1} />
              </div>
              <div
                className="steps__item-name"
                style={{ backgroundSize: "cover" }}
              >
                {" "}
                ALX Token Listing on CMC &amp; on Major Exchanges{" "}
              </div>
              <div
                className="steps__item-date"
                style={{ backgroundSize: "cover" }}
              >
                {" "}
                Jan- 2024{" "}
              </div>
            </div>
            <div
              className="steps__item w-[20%] mt-10 ml-8 lg:mt-6"
              style={{ backgroundSize: "cover" }}
            >
              <div
                className="steps__item-icon"
                style={{ backgroundSize: "cover" }}
              >
                <img svg-inline svg-sprite alt="step-grey-reverse" src={img4} />
                <img svg-inline svg-sprite alt="step-orange" src={img1} />
              </div>
              <div
                className="steps__item-name"
                style={{ backgroundSize: "cover" }}
              >
                {" "}
                Planning on ALX Token Price Growth Model{" "}
              </div>
              <div
                className="steps__item-date"
                style={{ backgroundSize: "cover" }}
              >
                {" "}
                Feb - 2024{" "}
              </div>
            </div>
            <div
              className="arrow-curved-bottom1"
              style={{ backgroundSize: "cover" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;

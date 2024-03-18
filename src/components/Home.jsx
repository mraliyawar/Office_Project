import React from "react";

import abi from "../components/usdtContractAbi.json";

import HeroSec from "./HeroSec";
import About from "./About";
import Vision from "./Vision";
import Features from "./Features";
import HowToStart from "./HowToStart";
import Roadmap from "./Roadmap";
import Polygon from "./Polygon";
import Footer from "./Footer";
import Carousel from "./Courosel";
import Header from "./Header";

const Home = ({ connectMetaMask }) => {
  return (
    <>
      <Header connectMetaMask={connectMetaMask} />
      <HeroSec />
      <About />
      <Vision />
      <Carousel />
      <Features />
      <HowToStart />
      <Roadmap />
      <Polygon />
      <Footer />
    </>
  );
};

export default Home;

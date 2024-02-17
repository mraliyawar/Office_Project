import React from "react";
import Header from "./Header";
import HeroSec from "./HeroSec";
import About from "./About";
import Vision from "./Vision";
import Features from "./Features";
import HowToStart from "./HowToStart";
import Roadmap from "./Roadmap";
import Polygon from "./Polygon";
import Web3 from "web3";
import abi from "./Abi.json";
import Footer from "./Footer";
import Carousel from "./Courosel";
import AccountContextProvider from "../store/AccountStore";

const Home = () => {
  const getweb3State = async () => {
    try {
      let [contractInstance, selectedAccounts, chainId, contractAddress] = [
        null,
        null,
        null,
        null,
        "0xf5da8a38b3709ff4881c3b411107a16434d64aae",
      ];

      if (!window.ethereum) {
        throw new Error("Metamask is not installed");
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      let chainIdHex = await window.ethereum.request({
        method: "eth_chainId",
      });

      chainId = parseInt(chainIdHex, 16);
      selectedAccounts = accounts[0];
      const web3 = new Web3(window.ethereum);

      contractInstance = new web3.eth.Contract(abi, contractAddress);

      return { contractInstance, selectedAccounts, chainId };
    } catch (error) {
      console.error(
        "not able to get web3state or maybe no metamask installed",
        error.message
      );
      throw error;
    }
  };

  return (
    <AccountContextProvider>
      <Header getweb3State={getweb3State} />
      <HeroSec />
      <About />

      <Vision />
      <Carousel />
      <Features />
      <HowToStart />
      <Roadmap />
      <Polygon />
      <Footer />
    </AccountContextProvider>
  );
};

export default Home;

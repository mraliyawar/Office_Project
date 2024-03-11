import React, { useEffect, useState } from "react";
import $ from "jquery";
import abi from "../components/usdtContractAbi.json";
import usdtabi from "../components/Abi.json";
import web3 from "Web3";
import Header from "./Header";
import HeroSec from "./HeroSec";
import About from "./About";
import Vision from "./Vision";
import Features from "./Features";
import HowToStart from "./HowToStart";
import Roadmap from "./Roadmap";
import Polygon from "./Polygon";
import Footer from "./Footer";
import Carousel from "./Courosel";
import AccountContextProvider from "../store/AccountStore";

const Home = () => {
  const getWeb3State = async () => {
    let [contractInstance, selectedAccount, chainId] = [null, null, null, null];
    try {
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
      selectedAccount = accounts[0];
      //read operation
      const provider = new ethers.BrowserProvider(window.ethereum);
      //write operation
      const signer = await provider.getSigner();
      const contractAddress = "0xCCC15B5CCAF92d34f3A99c2270920D3Fcf42c290";
      contractInstance = new ethers.Contract(contractAddress, abi, signer);
      return { contractInstance, chainId, selectedAccount };
    } catch (error) {
      console.error("Not able to get the web3states", error.message);
      throw error;
    }
  };

  return (
    <AccountContextProvider>
      {/* <Header getWeb3State={getWeb3State} /> */}
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

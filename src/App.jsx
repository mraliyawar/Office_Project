import React, { useState } from "react";
import Web3 from "web3";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Abi from "./components/Abi.json";
import usdtContractABI from "./components/usdtContractAbi.json";

import Home from "./components/Home";
import Account from "./components/Account";
import "./App.css";
import "./Hero.css";
import Russ from "./components/Russ";
import Spanish from "./components/Spanish";

const App = () => {
  const [account, setAccount] = useState("");
  const [maticBalance, setMaticBalance] = useState("");
  const [partnersCount, setPartnersCount] = useState("");
  const [directBusiness, setDirectBusiness] = useState("");
  const [totalReward, setTotalReward] = useState("");
  const [usdtBalance, setUsdtBalance] = useState("");

  // const ContAddr = "0xf5da8a38b3709ff4881c3b411107a16434d64aae";
  // const usdtContAddr = "0xBB7C99c5CbEA0a6Dd16A8eD9E0c28D5F599474cd";

  const connectMetaMask = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        setAccount(account);

        // Fetch Matic balance
        const balance = await web3.eth.getBalance(account);
        setMaticBalance(web3.utils.fromWei(balance, "ether"));

        // Fetch partners count from the blockchain
        const contractAddress = "0xf5da8a38b3709ff4881c3b411107a16434d64aae"; // Replace with your contract address
        // const contractABI = [
        //   // Add your contract ABI here
        // ];
        const contract = new web3.eth.Contract(Abi, contractAddress);
        const partnersCount = await contract.methods.getPartnersCount().call();
        setPartnersCount(partnersCount);

        // Fetch direct business from the blockchain
        // const directBusiness = await contract.methods;
        // let usersInfo = await contract.methods.users(account).call();
        // directBusiness = web3.utils.toHex(usersInfo.totalCount);
        //   .getDirectBusiness(account)
        //   .call();
        // setDirectBusiness(directBusiness);

        // Fetch total reward from the blockchain
        const totalReward = await contract.methods
          .getTotalReward(account)
          .call();
        setTotalReward(totalReward);

        // Fetch USDT balance from the USDT smart contract
        const usdtContractAddress =
          "0xBB7C99c5CbEA0a6Dd16A8eD9E0c28D5F599474cd"; // Replace with your USDT contract address
        // const usdtContractABI = [
        //   usdtContractABI,
        //   // Add your USDT contract ABI here
        // ];
        const usdtContract = new web3.eth.Contract(
          usdtContractABI,
          usdtContractAddress
        );
        const usdtBalance = await usdtContract.methods
          .balanceOf(account)
          .call();
        setUsdtBalance(usdtBalance);
      } else {
        console.error("MetaMask not installed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home connectMetaMask={connectMetaMask} />} />
          <Route
            path="/account"
            element={
              <Account
                account={account}
                maticBalance={maticBalance}
                partnersCount={partnersCount} /* My Team */
                directBusinesss={directBusiness}
                totalReward={totalReward}
                usdtBalance={usdtBalance}
              />
            }
          />
          <Route path="/russ" element={<Russ />} />
          <Route path="/spanish" element={<Spanish />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Web3 from "web3";
import Home from "./components/Home";
import Account from "./components/Account";
import "./App.css";
import "./Hero.css";
import Russ from "./components/Russ";
import Spanish from "./components/Spanish";
import Header from "./components/Header";

const App = () => {
  const [account, setAccount] = useState(null);
  const [maticBalance, setMaticBalance] = useState(null);

  const connectMetaMask = async () => {
    try {
      // Request account access if needed
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      const currentAccount = accounts[0];

      // Fetch the Matic balance
      const web3 = new Web3(window.ethereum);
      const balance = await web3.eth.getBalance(currentAccount);

      // Convert the balance from Wei to Matic (divide by 10^18)
      const maticBalance = web3.utils.fromWei(balance, "ether");

      // Set state with fetched details
      setAccount(currentAccount);
      setMaticBalance(maticBalance);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Router>
        <Header connectMetaMask={connectMetaMask} />
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/account"
            element={<Account account={account} maticBalance={maticBalance} />}
          />
          <Route path="/russ" element={<Russ />} />
          <Route path="/spanish" element={<Spanish />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

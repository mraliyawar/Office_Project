import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Account from "./components/Account";
import "./App.css";
import "./Hero.css";
import Russ from "./components/Russ";
import Spanish from "./components/Spanish";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/russ" element={<Russ />} />
          <Route path="/spanish" element={<Spanish />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

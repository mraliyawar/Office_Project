import React from "react";
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
  let contract;
  let usdtcontract;
  const contractAddress = "0xf5da8a38b3709ff4881c3b411107a16434d64aae";
  const usdtcontractAddress = "0xBB7C99c5CbEA0a6Dd16A8eD9E0c28D5F599474cd";
  let refer = "";
  let userAddr = "";
  let zeroAddr = "0x0000000000000000000000000000000000000000";
  let refererDefault = " ";
  let available_balance = 0;
  let userMaxDeposit = 0;
  let inputOk = false;
  let input;
  let splitwallet_balance = 0;
  window.ethereum.on("accountsChanged", (changedaccounts) => {
    let accounts = changedaccounts;
    userAddr = accounts[0];
    if (accounts) {
      Getuser();
    }
  });
  // const Connect = () => {
  //   window.addEventListener("load", async () => {
  //     accounts = await ethereum.request({ method: "eth_requestAccounts" });
  //     userAddr = accounts[0];
  //     window.web3 = new Web3(Web3.givenProvider);
  //     contract = new web3.eth.Contract(abi, contractAddress);
  //     usdtcontract = new web3.eth.Contract(usdtabi, usdtcontractAddress);

  //     if (accounts) {
  //       Getuser();
  //     } else {
  //       window.location = "register.html";
  //     }
  //   });
  // };
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

  async function Getuser() {
    let userId = getQueryVariable("id");
    if (userId !== "" && userId) {
      userAddr = userId;
    }
    if (userAddr.length == 42) {
      let bnb_wei_account_balance = await web3.eth.getBalance(userAddr);
      let bnb_format_account_balance = web3.utils.fromWei(
        bnb_wei_account_balance,
        "ether"
      );
      $("#mybalance").text(parseFloat(bnb_format_account_balance).toFixed(2));

      let usdtBal = await usdtcontract.methods.balanceOf(userAddr).call();
      let busdBalance = parseFloat(usdtBal) / 1000000;
      $("#myusdtbalance").text(parseFloat(busdBalance).toFixed(2));

      var myAddrShort =
        userAddr.substring(0, 5) +
        "..." +
        userAddr.substring(userAddr.length - 3);
      $("#myAddr").text(myAddrShort);
    }
    var inviteLink =
      window.location.protocol +
      "//" +
      window.location.host +
      "/register.html?ref=" +
      userAddr;
    $("#myInput").val(inviteLink);
    getuserdetail();
  }
  function getPeriodDay(period) {
    period = period + 1;
    if (period <= 20) return 3 * 60;
    else if (period > 20 && period <= 25) return 6 * 60;
    else if (period > 25 && period <= 30) return 9 * 60;
    else return 12 * 60;
  }
  async function getuserdetail() {
    let usersInfo = await contract.methods.users(userAddr).call();
    refer = web3.utils.toHex(usersInfo.referrer);
    if (refer === zeroAddr && usersInfo.id === "0") {
      window.location = "register.html";
    }
    $.ajax({
      type: "POST",
      contentType: "application/json; charset=utf-8",
      url: "Services/Account.asmx/getuserAddress",
      data: "{address:" + JSON.stringify(userAddr) + "}",
      dataType: "json",
      async: false,
      success: function (Result) {
        $("#directcount").text(Result.d);
      },
      error: function (d) {},
    });

    $("#referAddr").html(refer);
    let payoutc = 0;
    let maxpayall =
      parseInt(await contract.methods.maxpay(userAddr).call()) / 1000000;
    let length = parseInt(
      await contract.methods.getOrderLength(userAddr).call()
    );
    for (let i = length - 1; i >= 0; i--) {
      let orderInfo = await contract.methods.orderInfos(userAddr, i).call();
      if (orderInfo.isactive) {
        let nowTime = new Date().getTime() / 1000;
        let period = getPeriodDay(orderInfo.period);
        let disTime = parseInt((nowTime - orderInfo.freeze_time) / period);
        payoutc = ((parseInt(orderInfo.amount) / 1000000) * disTime * 5) / 100;
      }
    }
    let total_income = parseFloat(usersInfo.totalreward) / 1000000;
    let totaldeposit = parseFloat(usersInfo.totalDeposit) / 1000000;
    userMaxDeposit = parseFloat(usersInfo.lastDeposit) / 1000000;
    let directBusiness = parseFloat(usersInfo.directBusiness) / 1000000;
    let split = parseFloat(usersInfo.rewardwallet) / 1000000;
    let splitDebt = parseFloat(usersInfo.rewardwalletDebt) / 1000000;
    let boosterUsers = await contract.methods.boosterusers(userAddr).call();
    if (parseInt(boosterUsers.is2xactive) == 1) {
      maxpay = userMaxDeposit * 2;
    } else {
      maxpay = userMaxDeposit * 1.4;
    }
    let workingreward = maxpayall;
    if (workingreward + payoutc >= maxpay) {
      payoutc = maxpay - workingreward;
    }
    total_income = total_income + payoutc;
    $("#totalrevenue").text(total_income.toFixed(2));
    $("#totaldeposit").text(totaldeposit.toFixed(2));

    $("#direct_business").text(directBusiness.toFixed(2));
    splitwallet_balance = split - splitDebt;
    $(".splitwallet_balance").text(splitwallet_balance.toFixed(2));

    if (parseInt(boosterUsers.iscapping) == 0) {
      $(".depositBut").css({ background: "gray" });
      $(".depositBut").css({ border: "1px solid gray" });

      $(".depositFreezing").css({ background: "gray" });
      $(".depositFreezing").css({ border: "1px solid gray" });
    }
  }
  $(".inputAmount").on("input", async function () {
    var inputAmount = $(".inputAmount").val();
    input = parseInt(inputAmount);
    if (!input) {
      input = 0;
    }
    if (
      input % 50 == 0 &&
      input >= 50 &&
      (input >= userMaxDeposit || input == 3000)
    ) {
      if (input <= 3000) {
        inputOk = true;
      } else {
        inputOk = false;
      }
    }
    if (inputOk) {
      $(".depositBut").css({ background: "#3E6FFB" });
    } else {
      $(".depositBut").css({ background: "gray" });
      $(".depositBut").css({ border: "1px solid gray" });
    }
  });
  async function buyLevel() {
    try {
      if (inputOk) {
        $(".depositBut").css({ background: "gray" });
        $(".depositBut").css({ "pointer-events": "none" });
        $(".depositBut").html(
          "Please Wait, We are Depositing <img width='100' src='/assets/images/loader.gif'/>"
        );
        var _amount = (parseFloat(input) * 1000000).toFixed(0);
        var isAppr = await isApprove(contractAddress);
        if (isAppr) {
          await contract.methods
            .deposit(_amount)
            .estimateGas({ from: userAddr })
            .then(async function (gasAmount) {
              if (gasAmount >= 8000000) {
                alert("Method ran out of gas");
              } else {
                estimateGas = web3.utils.toHex(web3.utils.toWei("300", "gwei"));
                await contract.methods.deposit(_amount).send({
                  from: userAddr,
                  gasPrice: estimateGas,
                  gas: gasAmount,
                });
                swal("", "Deposit Successfully !", "success");
                await sleep(5000).then(async function () {
                  location.reload();
                });
              }
            });
        } else {
          setApprove(contractAddress).then(async function () {
            await contract.methods
              .deposit(_amount)
              .estimateGas({ from: userAddr })
              .then(async function (gasAmount) {
                if (gasAmount >= 8000000) {
                  alert("Method ran out of gas");
                } else {
                  estimateGas = web3.utils.toHex(
                    web3.utils.toWei("300", "gwei")
                  );
                  await contract.methods.deposit(_amount).send({
                    from: userAddr,
                    gasPrice: estimateGas,
                    gas: gasAmount,
                  });
                  console.log("", "Deposit Successfully !", "success");
                  await sleep(5000).then(async function () {
                    location.reload();
                  });
                }
              });
          });
        }
      } else {
        console.log("", "Amount not correct", "error");
      }
    } catch (err) {
      console.log("", "Amount should be double of last amount", "error");
    }
  }
  $("#splitamountdeposit").on("input", async function () {
    const inputAmount = $("#splitamountdeposit").val();
    input = parseInt(inputAmount);
    if (!input) {
      input = 0;
    }
    if (
      input % 50 == 0 &&
      input >= 50 &&
      (input >= userMaxDeposit || input == 3000)
    ) {
      if (input <= 3000) {
        inputOk = true;
      } else {
        inputOk = false;
      }
    }
    if (inputOk) {
      $(".depositFreezing").css({ background: "#3E6FFB" });
    } else {
      $(".depositFreezing").css({ background: "gray" });
      $(".depositFreezing").css({ border: "1px solid gray" });
    }
  });
  async function depositFreezing() {
    try {
      if (inputOk) {
        $(".depositFreezing").css({ background: "gray" });
        $(".depositFreezing").css({ "pointer-events": "none" });
        $(".depositFreezing").html(
          "Please Wait, We are Depositing <img width='100' src='/assets/images/loader.gif'/>"
        );
        const dAmount = parseFloat($("#splitamountdeposit").val());
        const _amount = (dAmount * 1000000).toFixed(0);
        const isAppr = await isApprove(contractAddress);
        if (isAppr) {
          await contract.methods
            .depositByReward(_amount)
            .estimateGas({ from: userAddr })
            .then(async function (gasAmount) {
              if (gasAmount >= 8000000) {
                alert("Method ran out of gas");
              } else {
                estimateGas = web3.utils.toHex(web3.utils.toWei("300", "gwei"));
                await contract.methods.depositByReward(_amount).send({
                  from: userAddr,
                  gasPrice: estimateGas,
                  gas: gasAmount,
                });
                console.log("", "Deposit Successfully !", "success");
                await sleep(5000).then(async function () {
                  location.reload();
                });
              }
            });
        } else {
          setApprove(contractAddress).then(async function () {
            await contract.methods
              .depositByReward(_amount)
              .estimateGas({ from: userAddr })
              .then(async function (gasAmount) {
                if (gasAmount >= 8000000) {
                  alert("Method ran out of gas");
                } else {
                  estimateGas = web3.utils.toHex(
                    web3.utils.toWei("300", "gwei")
                  );
                  await contract.methods.depositByReward(_amount).send({
                    from: userAddr,
                    gasPrice: estimateGas,
                    gas: gasAmount,
                  });
                  console.log("", "Deposit Successfully !", "success");
                  await sleep(5000).then(async function () {
                    location.reload();
                  });
                }
              });
          });
        }
      } else {
        console.log("", "Amount not correct", "error");
      }
    } catch (err) {
      console.log("", "Amount should be double of last amount", "error");
    }
  }
  async function transferFreezing() {
    var tAmount = parseFloat($("#splitamounttransfer").val());
    var receiver = $("#txtreceiveraddress").val();
    let isUserExists = await contract.methods.isUserExists(receiver).call();
    if (isUserExists) {
      if (web3.utils.isAddress(receiver)) {
        if (
          tAmount >= 25 &&
          tAmount <= 3000 &&
          tAmount % 25 == 0 &&
          tAmount <= splitwallet_balance
        ) {
          var _amount = (tAmount * 1000000).toFixed(0);
          await contract.methods
            .transferByReward(receiver, _amount)
            .estimateGas({ from: userAddr })
            .then(async function (gasAmount) {
              if (gasAmount >= 8000000) {
                alert("Method ran out of gas");
              } else {
                estimateGas = web3.utils.toHex(web3.utils.toWei("300", "gwei"));
                await contract.methods
                  .transferByReward(receiver, _amount)
                  .send({
                    from: userAddr,
                    gasPrice: estimateGas,
                    gas: gasAmount,
                  });
                console.log("", "Trasfer Successfully !", "success");
                await sleep(5000).then(async function () {
                  location.reload();
                });
              }
            });
        }
      }
    } else {
      console.log("", "Receiver account not exists", "error");
    }
  }

  function getUrlRelativePath() {
    var url = document.location.toString();
    var arrUrl = url.split("//");
    var start = arrUrl[1].indexOf("/");
    var relUrl = arrUrl[1].substring(start); //stop省略，截取从start开始到结尾的所有字符
    if (relUrl.indexOf("?") != -1) {
      relUrl = relUrl.split("?")[0];
    }
    return relUrl;
  }
  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == variable) {
        return pair[1];
      }
    }
    return false;
  }
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function isApprove(to) {
    let res = await usdtcontract.methods.allowance(userAddr, to).call();
    var allowanceAmount = parseFloat(res);
    if (allowanceAmount > 5000e6) {
      return true;
    } else {
      return false;
    }
  }

  async function setApprove(to) {
    var amount = "50000005000000";
    await usdtcontract.methods
      .approve(to, amount)
      .estimateGas({ from: userAddr })
      .then(async function (gasAmount) {
        if (gasAmount >= 8000000) {
          alert("Method ran out of gas");
          return false;
        } else {
          estimateGas = web3.utils.toHex(web3.utils.toWei("300", "gwei"));
          await usdtcontract.methods
            .approve(to, amount)
            .send({ from: userAddr, gasPrice: estimateGas, gas: gasAmount });
        }
      });
  }
  function getDate(timstamp) {
    var date = new Date(timstamp);
    var year = date.getFullYear(); // 获取完整的年份(4位,1970)
    var month = date.getMonth() + 1;
    var day = date.getDate(); // 获取日(1-31)
    var hour = date.getHours(); // 获取小时数(0-23)
    var minute = date.getMinutes(); // 获取分钟数(0-59)
    var second = date.getSeconds(); // 获取秒数(0-59)
    var forMatDate =
      year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    return forMatDate;
  }
  return (
    <AccountContextProvider>
      <Header getWeb3State={getWeb3State} />
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

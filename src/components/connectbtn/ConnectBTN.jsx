import React, { useState, useEffect } from "react";
import "./connectbtn.css";

const ConnectBTN = ({ account, setAccount }) => {
  async function getAccount() {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  }

  const accountChangeHandler = (newAccount) => {
    console.log(newAccount);
    setAccount(newAccount);
  };

  function displayAddress(newAccount) {
    if (account !== "") {
      return (
        newAccount.substring(0, 6) +
        "..." +
        newAccount.substring(newAccount.length - 4)
      );
    } else {
      return "CONNECT WALLET";
    }
  }
  return (
    <button className="btn-connect" onClick={getAccount}>
      {displayAddress(account)}
    </button>
  );
};

export default ConnectBTN;

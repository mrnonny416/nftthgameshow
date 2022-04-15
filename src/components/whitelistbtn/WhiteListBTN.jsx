import React from "react";
import { Link } from "react-router-dom";
import "./whitelistbtn.css";
const WhiteListBTN = ({ account, setAccount }) => {
  const checkLogin = () => {
    alert("Connect Wallet to continue");
  };
  if (account !== "") {
    return (
      <Link to="/WhiteList">
        <button className="btn-whitelist">GET WHITELIST</button>
      </Link>
    );
  } else {
    return (
      <button className="btn-whitelist" onClick={checkLogin}>
        GET WHITELIST
      </button>
    );
  }
};

export default WhiteListBTN;

import React from "react";
import "./whitelist.css";
import { Link } from "react-router-dom";
import ConnectBTN from "../connectbtn/ConnectBTN";
const WhiteList = ({ account, setAccount }) => {
  const backpage = () => {};

  return (
    <div className="container">
      <div className="container__content">
        <Link to={"/"}>
          <button className="logo" onClick={backpage}></button>
        </Link>
        <div className="container__minted-index">
          <div className="text-container-index-wl">
            <text className="text-index-wl">GET WHITELIST</text>
          </div>
        </div>
        <div className="container__title__minted">
          <div>
            <ConnectBTN account={account} setAccount={setAccount} />
          </div>
          <div className="text-title">
            SpecialNFT
            <br />
            Thailand
            <br />
            Game Show 2022
            <br />
            <div className="text-title-description">
              The Lagest event in southest asia
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteList;

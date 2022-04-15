import React from "react";
import "./club.css";
import { Link } from "react-router-dom";
import ConnectBTN from "../connectbtn/ConnectBTN";
const Club = ({ account, setAccount, page, setPage }) => {
  const backpage = () => {
    setPage(0);
  };

  const mintBTN = () => {
    return (
      <Link to={"/MintPage"}>
        <button className="btn-mint">MINT AGAIN</button>
      </Link>
    );
  };
  return (
    <div className="container">
      <div className="container__content">
        <Link to={"/"}>
          <button className="logo" onClick={backpage}></button>
        </Link>
        <div className="container__minted-index">
          <div className="text-container-index">
            <text className="text-index">Welcome to The Club</text>
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

export default Club;

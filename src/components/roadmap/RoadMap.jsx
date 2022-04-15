import React from "react";
import "./roadmap.css";
import { Link } from "react-router-dom";
import ConnectBTN from "../connectbtn/ConnectBTN";
const RoadMap = ({ account, setAccount, page, setPage }) => {
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
          <div className="text-container-index-rd">
            <text className="text-index-rd">INFO / ROADMAP</text>
          </div>
          <div>
            <div className="btn-menu1-bg">
              <Link to="/Contact">
                <button className="btn-menu1-setting">CONTACT</button>
              </Link>
            </div>
            <div className="btn-menu1-bg">
              <Link to="/Contributor">
                <button className="btn-menu1-setting">CONTRIBUTOR</button>
              </Link>
            </div>
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

export default RoadMap;

import React from "react";
import "./defaultpage.css";
import ConnectBTN from "../connectbtn/ConnectBTN";
import WhiteListBTN from "../whitelistbtn/WhiteListBTN";
import Countdown from "../countdown/Countdown";
const DefaultPage = () => {
  return (
    <div className="container">
      <div className="container__content">
        <div className="container__menu">
          <div className="logo"></div>
          <div>
            <WhiteListBTN />
            <Countdown />
          </div>
        </div>

        <div className="container__title">
          <div>
            <ConnectBTN />
          </div>
          <div className="text-title">
            SpecialNFT
            <br />
            Thailand
            <br />
            Game Show 2022
            <br />
            <text className="text-title-description">
              The Lagest event in southest asia
            </text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultPage;

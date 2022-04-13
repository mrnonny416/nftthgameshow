import React from "react";
import ConnectBTN from "../connectbtn/ConnectBTN";
import MenuBar from "../menubar/MenuBar";

const SideTitle = ({ account, setAccount }) => {
  return (
    <div className="container__title">
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
  );
};

export default SideTitle;

import React from "react";
import WhiteListBTN from "../whitelistbtn/WhiteListBTN";
import Countdown from "../countdown/Countdown";
const SideMenu = ({ setIsOvertime }) => {
  const backpage = () => {
    set(0);
  };
  return (
    <div className="container__menu">
      <button className="logo" onClick={backpage}></button>
      <div>
        <WhiteListBTN />
        <Countdown />
      </div>
    </div>
  );
};

export default SideMenu;

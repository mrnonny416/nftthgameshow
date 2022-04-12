import React from "react";
import WhiteListBTN from "../whitelistbtn/WhiteListBTN";
import Countdown from "../countdown/Countdown";
const SideMenu = ({ timeout }) => {
  return (
    <div className="container__menu">
      <div className="logo"></div>
      <div>
        <WhiteListBTN />
        <Countdown timeout={timeout} setTimeout={setTimeout} />
      </div>
    </div>
  );
};

export default SideMenu;

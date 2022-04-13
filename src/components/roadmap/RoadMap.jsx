import React from "react";
import ConnectBTN from "../connectbtn/ConnectBTN";
import MenuBar from "../menubar/MenuBar";
const RoadMap = ({ account, setAccount, page, setPage }) => {
  return (
    <div className="container__title">
      <div>
        <ConnectBTN account={account} setAccount={setAccount} />
      </div>
      <div>ROAD MAP</div>
      <div>
        <MenuBar page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default RoadMap;

import React from "react";
import ConnectBTN from "../connectbtn/ConnectBTN";
import MenuBar from "../menubar/MenuBar";
const Collab = ({ account, updateAccount, page, updatePage }) => {
  return (
    <div className="container__title">
      <div>
        <ConnectBTN account={account} updateAccount={updateAccount} />
      </div>
      <div>COLLAB</div>
      <div>
        <MenuBar page={page} updatePage={updatePage} />
      </div>
    </div>
  );
};

export default Collab;

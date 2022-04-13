import React from "react";
import "./collab.css";
import MenuBar from "../menubar/MenuBar";
import { Link } from "react-router-dom";
const Collab = ({ account, setAccount, page, setPage }) => {
  const backpage = () => {
    setPage(0);
  };
  return (
    <div className="container">
      <div className="container__collab">
        <Link to="/">
          <button className="logo" onClick={backpage}></button>
        </Link>
        <text className="text">Collab With</text>
        <div className="collab__content">
          <text className="text">content</text>
        </div>
        <div className="collab__menu">
          <MenuBar page={page} setPage={setPage} />
        </div>
      </div>
    </div>
  );
};

export default Collab;

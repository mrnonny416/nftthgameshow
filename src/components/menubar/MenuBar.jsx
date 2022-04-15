import React from "react";
import "./menubar.css";
import { Link } from "react-router-dom";
const MenuBar = ({ page, setPage }) => {
  const handleClick = (e) => {
    setPage(parseInt(e.target.id));
    console.log(e.target.id);
  };

  return (
    <div>
      <div className="btn-menu-bg">
        <Link to="/Roadmap">
          <button className="btn-menu-setting" id="1" onClick={handleClick}>
            INFO / ROADMAP
          </button>
        </Link>
      </div>
      <div className="btn-menu-bg">
        <Link to="/Collab">
          <button className="btn-menu-setting" id="2" onClick={handleClick}>
            UTILITY / COLLAB
          </button>
        </Link>
      </div>
      <div className="btn-menu-bg">
        <Link to="/Club">
          <button className="btn-menu-setting" id="3" onClick={handleClick}>
            JOIN THE CLUB
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuBar;

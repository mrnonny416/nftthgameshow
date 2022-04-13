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
      <p>
        {page === 1 ? (
          <div></div>
        ) : (
          <Link to="/Roadmap">
            <button className="btn-menu" id="1" onClick={handleClick}>
              INFO / ROADMAP
            </button>
          </Link>
        )}
      </p>
      <p>
        {page === 2 ? (
          <div></div>
        ) : (
          <Link to="/Collab">
            <button className="btn-menu" id="2" onClick={handleClick}>
              UTILITY / COLLAB
            </button>
          </Link>
        )}
      </p>
      <p>
        {page === 3 ? (
          <div></div>
        ) : (
          <Link to="/Club">
            <button className="btn-menu" id="3" onClick={handleClick}>
              JOIN THE CLUB
            </button>
          </Link>
        )}
      </p>
    </div>
  );
};

export default MenuBar;

import React from "react";
import "./menubar.css";
const MenuBar = ({ page, updatePage }) => {
  const handleClick = (e) => {
    updatePage(parseInt(e.target.id));
    console.log(e.target.id);
  };

  return (
    <div>
      <p>
        <button
          className={page === 1 ? "btn-menu active" : "btn-menu"}
          id="1"
          onClick={handleClick}
        >
          INFO / ROADMAP
        </button>
      </p>
      <p>
        <button
          className={page === 2 ? "btn-menu active" : "btn-menu"}
          id="2"
          onClick={handleClick}
        >
          UTILITY / COLLAB
        </button>
      </p>
      <p>
        <button
          className={page === 3 ? "btn-menu active" : "btn-menu"}
          id="3"
          onClick={handleClick}
        >
          JOIN THE CLUB
        </button>
      </p>
    </div>
  );
};

export default MenuBar;

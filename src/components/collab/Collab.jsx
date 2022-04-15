import React from "react";
import "./collab.css";
import { Link } from "react-router-dom";
import Collab1 from "../../assets/01.jpg";
import Collab2 from "../../assets/02.jpg";
import Collab3 from "../../assets/03.jpg";
const Collab = ({ account, setAccount, page, setPage }) => {
  const backpage = () => {
    setPage(0);
  };
  return (
    <div className="container__collab">
      <Link to="/">
        <button className="logo" onClick={backpage}></button>
      </Link>
      <div className="text-main-collab">Collab With</div>
      <div className="collab__content">
        <div className="collab-img">
          <img src={Collab1} alt="collab1" className="image-setting1" />
          <img src={Collab2} alt="collab2" className="image-setting2" />
          <img src={Collab3} alt="collab" className="image-setting3" />
        </div>
        <div className="collab-description">
          <div>
            <div className="text-collab">
              <h2>ZBING Z</h2>
              Professor Garcia will be sharing <br />
              his work on mobile education platforms for indigent students
            </div>
          </div>
          <div>
            <div className="text-collab">
              <h2>MR.GAMER</h2>A researcher and BSU faculty member since 2010,
              <br /> Dr.Laghiri will be joining
            </div>
          </div>
          <div>
            <div className="text-collab">
              <h2>TOY SEMBE</h2>A researcher and BSU faculty member since
              <br />
              2010, Dr.Laghiri will be joining
            </div>
          </div>
          <div>
            <div className="text-collab">
              <h2>F. HERO</h2>A researcher and BSU faculty member since 2010,
              <br />
              Dr.Laghiri will be joining
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collab;

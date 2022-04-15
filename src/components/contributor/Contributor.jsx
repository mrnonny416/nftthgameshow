import React from "react";
import "./contributor.css";
import { FaDiscord } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FiTwitch } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";
import sp14 from "../../assets/14.png";
import sp15 from "../../assets/15.png";
import sp16 from "../../assets/16.png";
const Contributor = () => {
  return (
    <div className="container-contributor">
      <div className="content-title">
        <div className="text-contributor">
          <div className="text-title-contributor">CONTRIBUTOR</div>
          <div className="text-description">PROFESSIONAL PARTNER</div>
        </div>
        <div className="content-link">
          <a href="#" className="discord">
            <FaDiscord />
          </a>
          <a href="#" className="twitter">
            <BsTwitter />
          </a>
          <a href="#" className="twitch">
            <FiTwitch />
          </a>
          <a href="#" className="youtube">
            <AiFillYoutube />
          </a>
        </div>
      </div>
      <div className="content-sponsor">
        <div className="text-sponsor">CO HOST & SPONSOR BY</div>
        <div className="hr-1"> </div>
        <div className="hr-2"> </div>
        <div class="content-sponsor-img">
          <div className="sponsor-img">
            <div className="img-content">
              <img src={sp14} />
            </div>
            <div className="sponsor-img-description">
              Road the League (Season 4)
            </div>
          </div>
          <div className="sponsor-img">
            <div className="img-content">
              <img src={sp15} />
            </div>
            <div className="sponsor-img-description">
              Championship Night Stream (Season4)
            </div>
          </div>
          <div className="sponsor-img">
            <div className="img-content">
              <img src={sp16} />
            </div>
            <div className="sponsor-img-description">
              Fun With Friends: Boys'Night In
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributor;

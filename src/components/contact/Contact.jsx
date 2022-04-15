import React from "react";
import Logo from "../../assets/logo.jpg";
import "./contact.css";
import { FaDiscord } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FiTwitch } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="container-contact">
      <Link to="/">
        <button className="logo"></button>
      </Link>
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
      <div className="content-img">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="content-description">
        มหกรรมงานเกมที่ยิ่งใหญ่ที่สุดแห่งเอเชียตะวันออกเฉียงใต้
      </div>
    </div>
  );
};

export default Contact;

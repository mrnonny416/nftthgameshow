import React from "react";
import "./countdown.css";

const Countdown = ({ timeout, setTimeout }) => {
  return <div className="text-countdown">{timeout.toLocaleTimeString()}</div>;
};
// setInterval(setTimeout(new Date().toLocaleTimeString), 1000);
export default Countdown;

import React from "react";
import "./countdown.css";
import CountdownTimer from "./CountdownTimer";

const Countdown = () => {
  // console.log(timeout.getTime());
  const THREE_DAYS_IN_MS = 1 * 1 * 1 * 10 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
    </div>
  );
};
export default Countdown;

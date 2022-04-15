import React, { memo } from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./useCountdown";
const ExpiredNotice = ({ setIsOvertime }) => {
  return <div className="expired-notice"></div>;
};
const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a className="countdown-link">
        <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 1} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
      </a>
    </div>
  );
};
const setTime = ({ setIsOvertime }) => {
  setIsOvertime(true);
};
const CountdownTimer = ({ targetDate, setIsOvertime }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    setTime((setIsOvertime = { setIsOvertime }));
    // return <ExpiredNotice setIsOvertime={setIsOvertime} />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;

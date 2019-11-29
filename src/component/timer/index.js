import React, { useEffect, useState, useRef } from "react";

const Timer = ({ timer, handleSubmit }) => {
  const [timeon, SetTimeon] = useState(true);
  const inputRef = useRef();
  const dateSet = () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() + timer);
    return date;
  };

  const calculateTimeLeft = () => {
    const difference = timeAssign - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        D: Math.floor(difference / (1000 * 60 * 60 * 24)),
        H: Math.floor((difference / (1000 * 60 * 60)) % 24),
        M: Math.floor((difference / 1000 / 60) % 60),
        S: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeAssign, setTimeAssign] = useState(dateSet);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    if (timeon) {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
        if (!timerComponents.length) {
          SetTimeon(false);
        }
      }, 1000);
    }
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  if (!timeon) {
    handleSubmit();
  }
  return (
    <div className="text-right">
      {timerComponents.length ? (
        <span>
          <span>Time Left: </span>
          {timerComponents}
        </span>
      ) : (
        <span ref={inputRef}>Time's up!</span>
      )}
    </div>
  );
};

export default Timer;

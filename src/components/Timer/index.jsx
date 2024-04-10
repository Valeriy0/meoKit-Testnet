import React, { useCallback } from 'react';
import Countdown from 'react-countdown';
import { fromUnixTime } from 'date-fns';

export const Timer = ({ time, onComplete, isCompleted, spanClass = 'text-white' }) => {

  const renderer = useCallback(
    ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        return null;
      } else {
        // const totalHours = days < 1 ? hours + days * 24 : hours;
        // const customHours = totalHours < 10 ? (totalHours === 0 ? '00' : '0' + totalHours) : totalHours;
        // const totalMinutes = minutes < 10 ? (minutes === 0 ? '00' : '0' + minutes) : minutes;
        // const totalSeconds = seconds < 10 ? (seconds === 0 ? '00' : '0' + seconds) : seconds;

        return (
          <div className={`flex items-center justify-center ${spanClass}`} >
            {days > 0 && <span className="text-center min-w-[32px]">{days}d</span>}
            <span className="text-center min-w-[32px]">{hours}h</span>
            <span className="text-center min-w-[32px]">{minutes}m</span>
            <span className="text-center min-w-[32px]">{seconds}s</span>
          </div>
        );
      }
    },
    [spanClass],
  );

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <Countdown renderer={renderer} autoStart date={fromUnixTime(time)} onComplete={onComplete} overtime />
    </div>
  )
};

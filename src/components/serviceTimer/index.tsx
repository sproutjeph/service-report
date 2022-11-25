import React, { useEffect, useState } from "react";
import { PlayIcon, StopIcon } from "@heroicons/react/24/solid";

const ServiceTimer = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: any = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  function handleStart() {
    setIsActive(true);
    setIsPaused(false);
  }

  function handlePauseResume() {
    setIsPaused(!isPaused);
  }

  function handleReset() {
    setIsActive(false);
    setTime(0);
  }
  return (
    <div className="p-4 w-full bg-white rounded-md text-black text-center">
      <h2 className="text-2xl">Service Timer</h2>

      <div className="flex items-center gap-x-4 justify-center mt-4">
        <div
          className="cursor-pointer border-8 border-violet-200 w-16 h-16 rounded-full flex items-center justify-center"
          onClick={() => handleStart()}
        >
          <PlayIcon className="w-8 h-8 text-violet-400" />
        </div>
        <div className="text-2xl text-green-500">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
          {/* <span>{("0" + ((time / 10) % 100)).slice(-2)}</span> */}
        </div>
        <div
          className="cursor-pointer border-8 border-red-200 w-16 h-16 rounded-full flex items-center justify-center"
          onClick={() => handlePauseResume()}
        >
          <StopIcon className="w-8 h-8 text-red-300" />
        </div>
      </div>
      <button
        className="bg-red-200 py-1 px-3 text-black tracking-widest rounded-md mt-4"
        onClick={() => handleReset()}
      >
        Reset
      </button>
    </div>
  );
};

export default ServiceTimer;

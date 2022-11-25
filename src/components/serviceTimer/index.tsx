import React from "react";
import { PlayIcon, StopIcon } from "@heroicons/react/24/solid";

const ServiceTimer = () => {
  return (
    <div className="p-4 w-full bg-white rounded-md text-black text-center">
      <h2 className="text-2xl">Service Timer</h2>

      <div className="flex items-center gap-x-4 justify-center mt-4">
        <div className="cursor-pointer border-8 border-black w-16 h-16 rounded-full flex items-center justify-center">
          <PlayIcon className="w-8 h-8" />
        </div>
        <div className="text-2xl text-green-500">
          <h2>0 : 00</h2>
        </div>
        <div className="cursor-pointer border-8 border-black w-16 h-16 rounded-full flex items-center justify-center">
          <StopIcon className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default ServiceTimer;

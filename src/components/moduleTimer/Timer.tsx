import React from "react";
import Digit from "./Digit";

interface TimerProps {
  seconds: number;
  minutes: number;
  hours: number;
  days?: number;
}

export function Timer({ seconds, minutes, hours, days }: TimerProps) {
  return (
    <div className="flex items-center mb-8">
      {days !== undefined && (
        <>
          <Digit value={days} title="DAYS" />
          <div className="flex flex-col items-center self-end mb-2.5">
            <span className="w-1.5 h-1.5 bg-gray-700 rounded-full my-1" />
            <span className="w-1.5 h-1.5 bg-gray-700 rounded-full my-1" />
          </div>
        </>
      )}
      <Digit value={hours} title="HOURS" />
      <div className="flex flex-col items-center self-end mb-2.5">
        <span className="w-1.5 h-1.5 bg-gray-700 rounded-full my-1" />
        <span className="w-1.5 h-1.5 bg-gray-700 rounded-full my-1" />
      </div>
      <Digit value={minutes} title="MINUTES" />
      <div className="flex flex-col items-center self-end mb-2.5">
        <span className="w-1.5 h-1.5 bg-gray-700 rounded-full my-1" />
        <span className="w-1.5 h-1.5 bg-gray-700 rounded-full my-1" />
      </div>
      <Digit value={seconds} title="SECONDS" />
    </div>
  );
}

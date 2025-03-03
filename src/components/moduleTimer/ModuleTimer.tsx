"use client";
import React from "react";
import { useStopwatch } from "react-timer-hook";
import { Button } from "@/src/shared/ui/button";
import { Separator } from "@/src/shared/ui/separator";
import { Timer } from "./Timer";

export function ModuleTimer() {
  const {
    // totalSeconds,
    seconds,
    minutes,
    hours,
    // days,
    isRunning,
    start,
    pause,
    // reset,
  } = useStopwatch();

  return (
    <div className="min-w-52 space-y-4" style={{ textAlign: "center" }}>
      <Timer seconds={seconds} minutes={minutes} hours={hours} />
      <Separator />
      <p className="w-full">{isRunning ? "Running" : "Paused"}</p>
      <Separator />
      <div className="flex gap-4 w-full justify-around">
        <Button className="w-1/3" onClick={start}>
          Start
        </Button>
        <Button className="w-1/3" onClick={pause}>
          Pause
        </Button>
      </div>
      {/* <button onClick={reset}>Reset</button> */}
    </div>
  );
}

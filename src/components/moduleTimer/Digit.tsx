import React from "react";

interface DigitProps {
  value: number;
  title: string;
}

function Digit({ value, title }: DigitProps) {
  const leftDigit = value >= 10 ? value.toString()[0] : "0";
  const rightDigit = value >= 10 ? value.toString()[1] : value.toString();

  return (
    <div className="flex flex-col items-center mx-1 first:ml-0">
      <span className="text-xs mb-1">{title}</span>
      <div className="flex">
        <span className="relative flex flex-1 basis-1/4 text-2xl bg-gray-700 rounded-md p-2 text-white mr-0.5 after:content-[''] after:absolute after:left-0 after:right-0 after:top-1/2 after:h-0.5 after:bg-gray-900 after:opacity-40">
          {leftDigit}
        </span>
        <span className="relative flex flex-1 basis-1/4 text-2xl bg-gray-700 rounded-md p-2 text-white after:content-[''] after:absolute after:left-0 after:right-0 after:top-1/2 after:h-0.5 after:bg-gray-900 after:opacity-40">
          {rightDigit}
        </span>
      </div>
    </div>
  );
}

export default Digit;

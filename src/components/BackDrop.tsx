import React from "react";

function BackDrop({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen fixed z-10 backdrop-blur-xl top-0 left-0 flex justify-center items-center">
      <div className="w-[400px] space-y-10 shadow-lg">{children}</div>
    </div>
  );
}

export default BackDrop;

import React from "react";

const NotFound = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto px-4 py-2">
      <div className="w-full min-h-[500px] flex justify-center items-center">
        <div className="flex flex-col min-w-[240px] text-[#321529] gap-2">
          <p className="font-medium text-5xl">Oops, Error</p>
          <p className="text-lg">Seems this page doesn't exist</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

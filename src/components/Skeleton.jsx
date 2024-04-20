import React from "react";

function Skeleton() {
  return (
    <div className="w-full h-full flex justify-between gap-4 ">
      <div className="w-1/4 bg-gray-100 h-[100vh]"></div>
      <div className="w-full">
        <div className="w-full h-[5rem] py-4 mb-2 bg-gray-100 "></div>
        <div className="w-full flex justify-between gap-4 pt-6 px-4">
          <div className="w-full rounded-lg h-[10rem] bg-gray-100"></div>
          <div className="w-full rounded-lg h-[10rem] bg-gray-100"></div>
          <div className="w-full rounded-lg h-[10rem] bg-gray-100"></div>
          <div className="w-full rounded-lg h-[10rem] bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;

import React from "react";

const TimelineItem = ({ degree, years, institution, side }) => {
  return (
    <div
      className={`flex justify-${
        side === "right" ? "evenly" : "normal"
      } ml-5.7rem`}
    >
      <div className="flex justify-between items-center w-[47%] mb-8">
        <div className="order-1 w-5/12"></div>
        <div className="order-1 w-5/12 px-1 py-4 text-right">
          <p className="mb-3 text-base text-blue-500 font-bold">{years}</p>
          <h4 className="mb-3 font-bold text-lg md:text-2xl">{degree}</h4>
          <p className="text-sm md:text-base">{institution}</p>
        </div>
        <div className="order-2 w-[30%] md:w-[25%] lg:w-[23.6666%] text-center flex items-center justify-center">
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
export default TimelineItem;

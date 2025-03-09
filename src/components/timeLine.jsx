import React from "react";

const Timeline = () => {
  return (
    <div className="text-gray-100 pb-16 px-4">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Education
      </h2>
      <div className="flex justify-center py-8 p-6">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 h-full border-l-2 border-[#9333EA]"></div>
          <div>
            <div className="flex flex-row items-center mr-[243px] sm:mr-[17rem]">
              {/* Left Side Content */}
              <div className="flex flex-col gap-4 items-start">
                <div className="text-[#9333EA] font-semibold text-lg">
                  2016 - 2020
                </div>
                <div className="text-start">
                  <h3 className="text-lg font-bold text-gray-200">
                    Bachelor's Degree
                  </h3>
                  <p className="text-md text-gray-400">
                    Suresh Gyan Vihar University, Jaipur
                  </p>
                </div>
              </div>

              {/* Timeline Dot with Glow Effect */}
              <div className="relative">
                <div className="absolute -inset-1 bg-purple-500 rounded-full blur-md opacity-50"></div>
                <div className="relative bg-gradient-to-br from-[#FACC15] to-[#9333EA] w-4 h-4 rounded-full border-4 border-[#1E293B]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

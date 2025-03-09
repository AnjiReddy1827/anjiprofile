import React from "react";

const CompanyExperience = ({ company, startDate, endDate }) => {
  return (
    <div className="bg-gradient-to-r from-[#1E3A8A] to-[#9333EA] text-white relative group  backdrop-blur-md p-6 rounded-2xl shadow-xl w-full max-w-md transition-transform transform hover:scale-105 hover:bg-white/20">
      <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-50 group-hover:opacity-70"></div>
      <h3 className="font-bold text-white">{company}</h3>
      <p className="mt-2 text-gray-300 text-sm">
        {startDate} - {endDate}
      </p>
    </div>
  );
};

export default CompanyExperience;

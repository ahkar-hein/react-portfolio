import React from "react";
import { MdOutlineWorkOutline } from "react-icons/md";

const WorkItem = ({ year, company, title, duration, detail, isLast }) => {
  return (
    <div className="relative flex gap-6 md:gap-8">
      {/* Timeline dot */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-[#001b5e] flex items-center justify-center flex-shrink-0 z-10">
          <MdOutlineWorkOutline size={16} className="text-white" />
        </div>
        {!isLast && <div className="w-0.5 flex-1 bg-blue-100 mt-2" />}
      </div>

      {/* Content card */}
      <div className="flex-1 bg-white rounded-xl p-6 shadow-sm shadow-gray-200 hover:shadow-md transition duration-300 mb-2">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-bold text-[#001b5e]">{title}</h3>
            <p className="text-blue-600 font-medium text-sm">{company}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="bg-[#001b5e] text-white text-xs font-bold px-3 py-1 rounded-full">
              {year}
            </span>
            <span className="text-gray-400 text-xs">{duration}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{detail}</p>
      </div>
    </div>
  );
};

export default WorkItem;

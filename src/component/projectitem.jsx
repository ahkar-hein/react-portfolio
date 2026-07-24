import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectItem = ({ title, description, tech, github, live, tags, featured }) => {
  return (
    <div className={`relative flex flex-col bg-white rounded-xl shadow-md shadow-gray-200 overflow-hidden hover:shadow-xl hover:shadow-gray-300 transition duration-300 ${featured ? "border-2 border-blue-500" : ""}`}>
      
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          ⭐ Featured
        </div>
      )}

      {/* Card header */}
      <div className={`p-6 ${featured ? "bg-gradient-to-br from-[#0f172a] to-[#001b5e]" : "bg-gradient-to-br from-gray-800 to-gray-900"}`}>
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs bg-white/10 text-blue-300 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>
        <p className="text-xs text-gray-400 mb-4 leading-relaxed">
          <span className="font-semibold text-gray-500">Tech: </span>{tech}
        </p>

        {/* Action buttons */}
        <div className="flex gap-3">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#0f172a] text-white text-sm rounded-lg hover:bg-gray-700 transition duration-200 font-medium"
          >
            <FaGithub size={14} /> GitHub
          </a>
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
          >
            <FaExternalLinkAlt size={12} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

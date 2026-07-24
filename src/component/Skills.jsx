import React from "react";
import { FaReact, FaNodeJs, FaPython, FaGithub, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress, SiSocketdotio, SiTailwindcss, SiOpenai, SiFastapi } from "react-icons/si";

const skills = [
  { category: "Frontend", items: [
    { name: "React", icon: <FaReact className="text-blue-400" size={28} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" size={28} /> },
    { name: "JavaScript", icon: <span className="text-yellow-400 font-bold text-2xl">JS</span> },
  ]},
  { category: "Backend", items: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={28} /> },
    { name: "Express", icon: <SiExpress className="text-gray-300" size={28} /> },
    { name: "Python", icon: <FaPython className="text-yellow-300" size={28} /> },
    { name: "FastAPI", icon: <SiFastapi className="text-teal-400" size={28} /> },
  ]},
  { category: "Database & Cloud", items: [
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" size={28} /> },
    { name: "Cloudinary", icon: <span className="text-blue-300 font-bold text-sm">☁️</span> },
  ]},
  { category: "Tools & Other", items: [
    { name: "Socket.io", icon: <SiSocketdotio className="text-white" size={28} /> },
    { name: "OpenAI API", icon: <SiOpenai className="text-green-300" size={28} /> },
    { name: "WebRTC", icon: <span className="text-orange-400 font-bold text-lg">RTC</span> },
    { name: "Git/GitHub", icon: <FaGithub className="text-white" size={28} /> },
    { name: "REST APIs", icon: <FaDatabase className="text-purple-400" size={28} /> },
  ]},
];

const Skills = () => {
  return (
    <div id="skills" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-2">Skills</h1>
      <p className="text-center text-gray-500 mb-10">Technologies I work with</p>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((group, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-md shadow-gray-200">
            <h3 className="text-lg font-bold text-[#001b5e] mb-4 border-b border-gray-100 pb-2">
              {group.category}
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {group.items.map((skill, i) => (
                <div key={i} className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition duration-200">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#0f172a] rounded-lg">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-600 text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

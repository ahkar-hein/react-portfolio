import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#001b5e] relative">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center px-8 relative z-10">
        {/* Greeting */}
        <p className="text-blue-400 text-lg font-medium mb-2 tracking-widest uppercase">
          👋 Hello, I'm
        </p>

        {/* Name */}
        <h1 className="sm:text-7xl text-5xl font-bold text-white mb-4 leading-tight">
          Ahkar Hein
        </h1>

        {/* Type animation */}
        <h2 className="flex sm:text-3xl text-2xl text-gray-300 mb-6">
          I'm a&nbsp;
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "MERN Stack Developer",
              2000,
              "Python Developer",
              2000,
              "AI App Builder",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ color: "#60a5fa", fontWeight: 600 }}
            repeat={Infinity}
          />
        </h2>

        {/* Bio */}
        <p className="text-gray-400 text-base max-w-[500px] mb-8 leading-relaxed text-center lg:text-left">
          Building full-stack web apps with React, Node.js, and Python. 
          Passionate about real-time features, AI integrations, and community safety tech.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mb-8 flex-wrap justify-center lg:justify-start">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1kSb1HAtGfEui4h4UxycitWYAjZTaowpb/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-4">
          <a href="https://www.facebook.com/profile.php?id=100009977196767" target="_blank" rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-blue-400 hover:text-blue-400 transition duration-300">
            <FaFacebookF size={16} />
          </a>
          <a href="https://github.com/ahkar-hein" target="_blank" rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-blue-400 hover:text-blue-400 transition duration-300">
            <FaGithub size={16} />
          </a>
          <a href="https://www.linkedin.com/in/ahkar-hein-9b4065100/" target="_blank" rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-blue-400 hover:text-blue-400 transition duration-300">
            <FaLinkedinIn size={16} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
      </div>
    </div>
  );
};

export default Main;

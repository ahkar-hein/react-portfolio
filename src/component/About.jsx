import React from "react";
import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-2">About Me</h1>
      <p className="text-center text-gray-500 mb-10">Get to know me</p>

      <div className="grid md:grid-cols-2 gap-10 items-start">

        <div className="flex flex-col gap-6">
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <img
                src="https://github.com/ahkar-hein/react-portfolio/blob/main/src/assets/profile.jpeg?raw=true"
                alt="Ahkar Hein"
                className="w-56 h-64 object-cover object-top rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-3 -right-3 w-56 h-64 border-4 border-blue-500 rounded-2xl -z-10" />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#001b5e] mb-4">
              Hi, I am Ahkar — Full Stack Developer
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              I am a software developer based in San Jose, CA with an M.S. in Software
              Development. I build full-stack web applications with the MERN stack, Python
              FastAPI, and PHP/MySQL. By day I work as a Production Technician at PsiQuantum,
              aligning photonic chips in a cleanroom, and my goal is to grow into Automation
              Software or Industrial Engineering, where code and manufacturing meet.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              My most recent project Sentry is a neighborhood safety platform
              featuring real-time alerts, community chat, voice calls, and AI-powered safety
              insights built entirely from scratch using the MERN stack and Python FastAPI.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-[#001b5e] text-white rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaMapMarkerAlt className="text-blue-600" size={18} />
            </div>
            <div>
              <p className="font-semibold text-[#001b5e]">Location</p>
              <p className="text-gray-500 text-sm">San Jose, California, USA</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaBriefcase className="text-green-600" size={18} />
            </div>
            <div>
              <p className="font-semibold text-[#001b5e]">Experience</p>
              <p className="text-gray-500 text-sm">Production Technician at PsiQuantum</p>
              <p className="text-gray-500 text-sm">Full Stack Dev at Hyatt Knitwear</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaGraduationCap className="text-purple-600" size={18} />
            </div>
            <div>
              <p className="font-semibold text-[#001b5e]">Education</p>
              <p className="text-gray-500 text-sm">M.S. Software Development, Coventry University</p>
              <p className="text-gray-500 text-sm">B.S. Business Information Systems, Middlesex University</p>
              <p className="text-gray-500 text-sm">Full Stack Bootcamp, UC Berkeley Extension</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-blue-600 rounded-xl">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <p className="text-white font-semibold text-sm">
              Open to developer, automation &amp; part-time remote roles
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;

import React from "react";
import WorkItem from "./Workitem";

const data = [
   {
    year: 2024,
    title: "Electro-Mechanical Assembly Operator",
    company: "Siemens Energy",
    duration: "2024 - Present",
    detail: "Applied precision and systematic problem-solving in a high-stakes technical environment. Developed strong attention to detail and quality assurance practices directly transferable to software development.",
    type: "work",
  },
  // {
  //   year: 2022,
  //   title: "Freelance Full Stack Developer",
  //   company: "Upwork — Remote",
  //   duration: "2022 - Present",
  //   detail: "Delivered high-quality software solutions for 15+ clients, consistently meeting project deadlines and maintaining a 95% client satisfaction rate. Built web apps using React, Node.js, and MongoDB.",
  //   type: "work",
  // },
  {
    year: 2020,
    title: "Full Stack Web Developer",
    company: "Hyatt Knitwear",
    duration: "2020 — 6 months",
    detail: "Designed and developed a web application enabling the generation of customized barcodes using HTML, CSS, JavaScript and MySQL. Reduced manual processing time by 40%.",
    type: "work",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-2">
        Work Experience
      </h1>
      <p className="text-center text-gray-500 mb-12">My professional journey</p>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#001b5e] to-blue-200 hidden md:block" />

        <div className="flex flex-col gap-8">
          {data.map((item, idx) => (
            <WorkItem key={idx} {...item} isLast={idx === data.length - 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

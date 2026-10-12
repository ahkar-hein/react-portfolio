import React from "react";
import WorkItem from "./Workitem";

const data = [
  {
    year: 2026,
    title: "Production Technician",
    company: "PsiQuantum — San Jose, CA",
    duration: "Sep 2026 - Present",
    detail: "Perform active optical alignment and edge coupling between fiber array units (FAUs) and photonic chips, and chip-to-chip, using laser sources and precision positioning. Inspect and clean dies under high-magnification microscopes in a cleanroom, monitor live spectrum and power plots to verify coupling performance, and track builds through MES.",
    type: "work",
  },
  {
    year: 2024,
    title: "Electro-Mechanical Assembly Operator",
    company: "Siemens Energy — Pomona, CA",
    duration: "Nov 2024 - Jun 2026",
    detail: "Assembled and tested electro-mechanical components against production and quality standards. Partnered with engineers to troubleshoot hardware issues through systematic root-cause analysis and worked from wiring schematics and component test procedures.",
    type: "work",
  },
  {
    year: 2020,
    title: "Full Stack Web Developer",
    company: "Hyatt Knitwear — Yangon, Myanmar",
    duration: "Oct 2020 - Feb 2021",
    detail: "Built a barcode and production-tracking web app for a knitwear manufacturer (PHP, MySQL, jQuery/AJAX, Bootstrap). Wrote 20+ MySQL stored procedures to generate barcodes by plan, color, size, and department and to power payroll and productivity reports, with role-based access and CSV/PDF export.",
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

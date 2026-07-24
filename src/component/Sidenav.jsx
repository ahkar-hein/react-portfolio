import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const links = [
    { href: "#main", icon: <AiOutlineHome size={18} />, label: "Home" },
    { href: "#about", icon: <BsPerson size={18} />, label: "About" },
    { href: "#skills", icon: <GrProjects size={18} />, label: "Skills" },
    { href: "#work", icon: <MdOutlineWorkOutline size={18} />, label: "Work" },
    { href: "#projects", icon: <AiOutlineProject size={18} />, label: "Projects" },
    { href: "https://drive.google.com/file/d/1kSb1HAtGfEui4h4UxycitWYAjZTaowpb/view?usp=drive_link", icon: <BsPerson size={18} />, label: "Resume", external: true },
    { href: "#contact", icon: <AiOutlineMail size={18} />, label: "Contact" },
  ];

  return (
    <div>
      {/* Mobile hamburger */}
      <button
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden bg-white/10 backdrop-blur-sm p-2 rounded-lg text-white"
      >
        {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
      </button>

      {/* Mobile fullscreen menu */}
      {nav && (
        <div className="fixed w-full h-screen bg-[#0f172a]/95 backdrop-blur-sm flex flex-col justify-center items-center z-20 gap-3">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              onClick={handleNav}
              className="w-[75%] flex justify-center items-center gap-3 rounded-full bg-white/10 text-white m-1 p-4 cursor-pointer hover:bg-blue-600 transition duration-200"
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      )}

      {/* Desktop side nav */}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="rounded-full flex justify-center items-center gap-3 shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-[#001b5e] hover:text-white ease-in duration-300 text-gray-700 group"
            >
              {link.icon}
              <span className="text-sm font-medium">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidenav;

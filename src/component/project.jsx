import React from "react";
import ProjectItem from "./projectitem";

const projects = [
  {
    title: "Sentry",
    description: "A full-stack neighborhood safety platform with real-time emergency alerts, community posts, group/private chat, voice calls, and AI-powered safety insights.",
    tech: "React, Node.js, Python, FastAPI, MongoDB, Socket.io, WebRTC, OpenAI, Cloudinary, Twilio",
    github: "https://github.com/ahkar-hein/Sentry",
    live: "https://sentry-beige-zeta.vercel.app",
    tags: ["MERN", "Python", "AI", "WebRTC", "Socket.io"],
    featured: true,
  },
  {
    title: "Loud Mouth",
    description: "A social media platform where users can share thoughts, images and connect with others. Features authentication, GraphQL API and cloud media storage.",
    tech: "React, Express, Apollo, GraphQL, MongoDB, Mongoose, Bcrypt, JWT, Cloudinary, MUI",
    github: "https://github.com/ahkar-hein/Loud-Mouth.git",
    live: "https://loud-mouth-app-defe9659a2a4.herokuapp.com/",
    tags: ["React", "GraphQL", "MongoDB"],
    featured: false,
  },
  {
    title: "Pixel Pals",
    description: "A multiplayer browser game platform where users can create accounts, play games and compete with others online.",
    tech: "HTML, CSS, Node.js, Express, HandleBar, Bulma CSS, Interact JS",
    github: "https://github.com/RossFahan/Pixel-Pals",
    live: "https://whispering-fortress-56629-59156f7e4e61.herokuapp.com/",
    tags: ["Node.js", "Express", "Multiplayer"],
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description: "A weather app that shows current and 5-day forecast for any city using the OpenWeatherMap API.",
    tech: "HTML, CSS, JavaScript, OpenWeatherMap API",
    github: "https://github.com/ahkar-hein/Weather-Dashboard",
    live: "https://ahkar-hein.github.io/Weather-Dashboard/",
    tags: ["JavaScript", "API"],
    featured: false,
  },
];

const Project = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-2">Projects</h1>
      <p className="text-center text-gray-500 mb-10">Things I've built</p>

      <div className="grid sm:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <ProjectItem key={idx} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;

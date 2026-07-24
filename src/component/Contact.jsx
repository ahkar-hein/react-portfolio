import React from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-2">Contact</h1>
      <p className="text-center text-gray-500 mb-10">Let's work together</p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left — contact info */}
        <div className="flex flex-col justify-center gap-6">
          <div>
            <h2 className="text-2xl font-bold text-[#001b5e] mb-3">Get In Touch</h2>
            <p className="text-gray-600 leading-relaxed">
              I'm currently open to Junior Web Developer opportunities. 
              Whether you have a question, a project idea, or just want to say hi — 
              my inbox is always open!
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a href="mailto:ahkarhein04@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition duration-200">
              <FaEnvelope size={18} /> ahkarhein04@gmail.com
            </a>
            <a href="https://github.com/ahkar-hein" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition duration-200">
              <FaGithub size={18} /> github.com/ahkar-hein
            </a>
            <a href="https://www.linkedin.com/in/ahkar-hein-9b4065100/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition duration-200">
              <FaLinkedinIn size={18} /> linkedin.com/in/ahkar-hein
            </a>
          </div>
        </div>

        {/* Right — contact form */}
        <form action="https://getform.io/f/5a01a904-2bad-4d23-b95c-1936275f4ac6" method="post" encType="multipart/form-data" className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600 uppercase tracking-wide">Name</label>
              <input className="border border-gray-200 rounded-lg p-3 outline-none focus:border-blue-500 transition" type="text" name="name" placeholder="Your name" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600 uppercase tracking-wide">Email</label>
              <input className="border border-gray-200 rounded-lg p-3 outline-none focus:border-blue-500 transition" type="email" name="email" placeholder="your@email.com" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600 uppercase tracking-wide">Subject</label>
            <input className="border border-gray-200 rounded-lg p-3 outline-none focus:border-blue-500 transition" type="text" name="subject" placeholder="What's this about?" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600 uppercase tracking-wide">Message</label>
            <textarea className="border border-gray-200 rounded-lg p-3 outline-none focus:border-blue-500 transition" rows="6" name="message" placeholder="Tell me about your project or opportunity..." />
          </div>
          <button className="bg-[#001b5e] text-white p-4 rounded-lg font-semibold hover:bg-blue-800 transition duration-300">
            Send Message →
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

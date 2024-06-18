import React from "react";

const ProjectItem = ({img, title, tech, github}) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
            <img src={img} alt="" className="rounded-xl group-hover:opacity-10"/>
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                    {title}
                </h3>
                <p className="pb-4 pt-2 text-white text-center">{tech}</p>
                <br />
                <a className="absolute px-4 py-1 left-1/2 transform -translate-x-1/2 bottom-0 text-white text-center bg-[#001b5e] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:text-gray-100 transition duration-300 ease-in-out" href={github}>Github</a>
            </div>
        </div>
    )
}

export default ProjectItem
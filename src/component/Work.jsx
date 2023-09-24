import React from "react";
import WorkItem from "./Workitem";

const data = [
    {
        year: 2021,
        title: "Freelance Developer at garment factory to create customized web application",
        duration: "5 months",
        detail: "Create web application using following technologies: HTML, CSS, JavaScript and MySQL"
    },
    {
        year: 2022,
        title: "DoorDash Driver",
        duration: "Present",
        detail: "Food Delivery"
    },
]

const Work = () => {
    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
            {data.map((item, idx) =>(
                <WorkItem 
                key={idx}
                year={item.year}
                title={item.title}
                duration={item.duration}
                detail={item.detail}
                />
            ))}
        </div>
    )
}

export default Work
import React from "react";
import WorkItem from "./Workitem";

const data = [
    {
        year: 2023,
        title: "Full-Stack Web Developer",
        company: "Beyond Borders Visa and Education Service",
        duration: "Present",
        detail: "Developed a full-stack web application using MERN stack (MongoDB, Express, React.js, Node.js) to optimize visa and education services, enhancing user experience and operational efficiency."
    },
    {
        year: 2022,
        title: "Freelance Developer",
        company: "Upwork, Remote",
        duration: "Present",
        detail: "Delivered high-quality software solutions for over 15 clients, consistently meeting project deadlines and maintaining a 95% client satisfaction rate."
    },
    {
        year: 2020,
        title: "Full Stack Web Developer",
        company: "Hyatt Knitwear",
        duration: "6 months",
        detail: "Conceptualize, design and develop the web application which is enabling the generation of the customized barcode using HTML,CSS, JavaScript and MySQL."
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
                company={item.company}
                title={item.title}
                duration={item.duration}
                detail={item.detail}
                />
            ))}
        </div>
    )
}

export default Work
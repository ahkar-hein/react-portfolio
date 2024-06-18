import React from "react";
import ProjectItem from "./projectitem";
import bookflixImg from "../assets/bookflix.jpeg"
import pixelpalImg from "../assets/pixelpal.png"
import loutmouthImg from "../assets/loud-mouth.jpg"
import weatherImg from "../assets/weather.jpg"

const Project = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects </h1><br />
            <div className="grid sm:grid-cols-2 gap-12">
                <a href="https://gsr142.github.io/bookFlix/"><ProjectItem img={bookflixImg} title="Book Flix" tech="HTML, CSS, JavaScript" github="https://github.com/gsr142/bookFlix"/></a>
                <a href="https://whispering-fortress-56629-59156f7e4e61.herokuapp.com/"><ProjectItem img={pixelpalImg} title="Pixel Pals" tech="HTML, CSS, Node JS, Express JS, HandleBar, Bulma CSS, Interact JS" github="https://github.com/RossFahan/Pixel-Pals"/></a>
                <a href="https://loud-mouth-app-defe9659a2a4.herokuapp.com/"><ProjectItem img={loutmouthImg} title="Loud Mouth" tech="HTML, CSS, JavaScript, React, Express, NPM, Apollo, GraphQL, MongoDB, Mongoose, Bcrypt, JWT, Cloudinary, MUI, Vite" github="https://github.com/ahkar-hein/Loud-Mouth.git"/></a>
                <a href="https://ahkar-hein.github.io/Weather-Dashboard/"><ProjectItem img={weatherImg} title="Weather Dashboard" tech="HTML, CSS JavaScript, Server-Side API" github="https://github.com/ahkar-hein/Weather-Dashboard"/></a>
            </div>
        </div>
    )
}

export default Project
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
    return (
        <div id="main">
            <img className="w-full h-screen object-cover object-left scale-x-[-1]" src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80" alt="picture" />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/30">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-7xl text-4xl font-bold text-white">I'm Ahkar Hein</h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4 text-white">
                        I'm a
                        <TypeAnimation
                            sequence={[
                                'Developer',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Coder',
                                2000,
                                'Tech Enthusiast',
                                2000,
                                'Foodie 🍔',
                                2000,

                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className="flex justify-between pt-6 max-w-[200px] w-full">
                        <a href="https://www.facebook.com/profile.php?id=100009977196767"><FaFacebookF  className="cursor-pointer" size={20}/></a>
                        <a href="https://github.com/ahkar-hein"><FaGithub  className="cursor-pointer" size={20}/></a>
                        <a href="https://www.linkedin.com/in/ahkar-hein-9b4065100/"><FaLinkedinIn className="cursor-pointer" size={20} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
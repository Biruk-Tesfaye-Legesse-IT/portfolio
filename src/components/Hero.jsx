import React from "react";
// import { HiArrowNarrowRight } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <div name="hero" className="w-full h-screen bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-pink-600">Hi, my name is</p>
                <h1 className="text-4xl sm-text-7xl font-bold text-[#ccd6f6]">
                    Biruk Tesfaye
                </h1>
                <h2 className="text-3xl sm:text-7xl font-bold text-[#9892b8] pt-2">
                    {" "}
                    I'm a&nbsp;
                    <TypeAnimation
                        sequence={[
                            "Full Stack Developer",
                            1000,
                            "QA Engineer",
                            1000,
                            () => console.log(""),
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ display: "inline-block" }}
                    />
                </h2>
                <p className="py-4 text-[#9892b8] max-w-[700px]">
                    I'm an ambitious, self-motivated and disciplined developer
                    with vast technical skills and ability to work effectively
                    within a team. Able to play a key role in web and mobile
                    application development as well as quality assurance to
                    ensure maximum accessibility, user experience and usability.
                </p>
                <Link
                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    <div>
                        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                            View Work
                            {/* <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight className="ml-3" />
                            </span> */}
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Hero;

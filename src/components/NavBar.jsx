import React, { useState } from "react";

import Logo from "../assets/logo1.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
// import {BsFillPersonLinesFill} from 'react-icons/bs'

const NavBar = () => {
    const [toggle, seToggle] = useState(false);

    const handleClick = () => {
        seToggle(!toggle);
    };

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <img src={Logo} alt="" style={{ width: "50px" }} />
            </div>
            <div>
                <ul className="hidden md:flex">
                    <li>
                        <Link
                            activeClass="active"
                            to="hero"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="work"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <a href="https://biruk-tl.github.io/resume/resume.pdf">
                            My Resume
                        </a>
                    </li>
                </ul>
            </div>

            <div className="md:hidden z-10" onClick={handleClick}>
                {toggle ? <FaTimes /> : <FaBars />}
            </div>

            <ul
                className={
                    toggle
                        ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
                        : "hidden"
                }
            >
                <li className="py-6 text-3xl">
                    {" "}
                    <Link
                        activeClass="active"
                        to="hero"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={handleClick}
                    >
                        Home
                    </Link>
                </li>
                <li className="py-6 text-3xl">
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={handleClick}
                    >
                        About
                    </Link>
                </li>
                <li className="py-6 text-3xl">
                    {" "}
                    <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={handleClick}
                    >
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-3xl">
                    <Link
                        activeClass="active"
                        to="work"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={handleClick}
                    >
                        Work
                    </Link>
                </li>
                <li className="py-6 text-3xl">
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={handleClick}
                    >
                        Contact
                    </Link>
                </li>
                <li className="py-6 text-3xl">
                    <a href="https://biruk-tl.github.io/resume/resume.pdf">
                        My Resume
                    </a>
                </li>
            </ul>

            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://www.linkedin.com/in/biruk-tl/"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://github.com/biruk-tl"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="mailto:it.biruk.tesfaye2913@gmail.com"
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;

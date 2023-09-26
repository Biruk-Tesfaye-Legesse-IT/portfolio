import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Typescript from "../assets/typescript.png";
import Node from "../assets/node.png";

import Flutter from "../assets/flutter.png";
import Kotlin from "../assets/kotlin.png";
import Selenium from "../assets/Selenium_Logo.png";
import ReactLogo from "../assets/react.png";
import ReactNative from "../assets/react-native.png";
import Jmeter from "../assets/Jmeter.png";
import Loadrunner from "../assets/Loadrunner.png";
import Docker from "../assets/Docker.png";
import Kubernetes from "../assets/Kubernetes.png";
import Jenkins from "../assets/Jenkins.png";
import Gitlab from "../assets/Gitlab.png";
import Dynatrace from "../assets/dynatrace.png";
import Datadog from "../assets/datadog.png";

const Skills = () => {
    return (
        <div name="skills" className="bg-[#0a192f] text-gray-300 sm:pt-20">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="py-6">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
                        Some technologies I've worked with
                    </p>
                    {/* <p className='py-4'>These are the technologies I've worked with</p> */}
                </div>

                <div>
                    <div>
                        <p className="font-bold">Web Development</p>
                    </div>

                    <div className="w-full grid grid-cols-2 sm:grid-cols-6 text-center gap-4 py-6">
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="pt-4 w-20 mx-auto"
                                src={HTML}
                                alt=""
                            />
                            <p className="my-4">HTML5</p>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div
                                    class="bg-gray-300 text-xs font-medium text-pink-500 text-center p-0.5 leading-none rounded-full"
                                    style={{ width: "90%" }}
                                >
                                    {" "}
                                    90%
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="pt-4 w-20 mx-auto"
                                src={CSS}
                                alt=""
                            />
                            <p className="my-4">CSS3</p>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div
                                    class="bg-gray-300 text-xs font-medium text-pink-500 text-center p-0.5 leading-none rounded-full"
                                    style={{ width: "82%" }}
                                >
                                    {" "}
                                    82%
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="pt-4 w-20 mx-auto"
                                src={Javascript}
                                alt=""
                            />
                            <p className="my-4">Javascript</p>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div
                                    class="bg-gray-300 text-xs font-medium text-pink-500 text-center p-0.5 leading-none rounded-full"
                                    style={{ width: "85%" }}
                                >
                                    {" "}
                                    85%
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="pt-4 w-20 mx-auto"
                                src={Typescript}
                                alt=""
                            />
                            <p className="my-4">Typescript</p>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div
                                    class="bg-gray-300 text-xs font-medium text-pink-500 text-center p-0.5 leading-none rounded-full"
                                    style={{ width: "80%" }}
                                >
                                    {" "}
                                    80%
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="pt-4 w-20 mx-auto"
                                src={ReactLogo}
                                alt=""
                            />
                            <p className="my-4">React</p>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div
                                    class="bg-gray-300 text-xs font-medium text-pink-500 text-center p-0.5 leading-none rounded-full"
                                    style={{ width: "84%" }}
                                >
                                    {" "}
                                    84%
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="pt-4 w-20 mx-auto"
                                src={Node}
                                alt=""
                            />
                            <p className="my-4">Node.js</p>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div
                                    class="bg-gray-300 text-xs font-medium text-pink-500 text-center p-0.5 leading-none rounded-full"
                                    style={{ width: "82%" }}
                                >
                                    {" "}
                                    82%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div>
                    <div>
                        <p className="font-bold">Mobile App Development</p>
                    </div>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-6 text-center gap-4 py-6">
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="pt-4 w-20 mx-auto"
                                src={Flutter}
                                alt=""
                            />
                            <p className="my-4">Flutter</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="pt-4 w-20 mx-auto"
                                src={Kotlin}
                                alt=""
                            />
                            <p className="my-4">Kotlin</p>
                        </div>
                    </div>
                </div> */}

                {/* ==================================================================================== */}

                <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-6 ">
                    <div className="col-span-2 sm:col-span-1">
                        <div>
                            <p className="font-bold">Mobile App Development</p>
                        </div>

                        <div className="w-full grid sm:grid-cols-3 grid-cols-2 py-6 text-center gap-4 ">
                            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                                <img
                                    className="pt-4 w-20 mx-auto"
                                    src={Flutter}
                                    alt=""
                                />
                                <p className="my-4">Flutter</p>
                                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div
                                        class="bg-gray-300 text-xs font-medium text-pink-500 text-center p-0.5 leading-none rounded-full"
                                        style={{ width: "80%" }}
                                    >
                                        {" "}
                                        80%
                                    </div>
                                </div>
                            </div>

                            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                                <img
                                    className="pt-4 w-20 h-30 mx-auto"
                                    src={ReactNative}
                                    alt=""
                                />
                                <p className="my-4">React Native</p>
                                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div
                                        class="bg-gray-300 text-xs font-medium text-pink-500 text-center p-0.5 leading-none rounded-full"
                                        style={{ width: "76%" }}
                                    >
                                        {" "}
                                        76%
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                                <img
                                    className="pt-4 w-20 mx-auto"
                                    src={Kotlin}
                                    alt=""
                                />
                                <p className="my-4">Kotlin</p>
                                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div
                                        class="bg-gray-300 text-xs font-medium text-pink-500 text-center p-0.5 leading-none rounded-full"
                                        style={{ width: "75%" }}
                                    >
                                        {" "}
                                        75%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                        <div>
                            <p className="font-bold">Testing Tools</p>
                        </div>

                        <div className="w-full grid sm:grid-cols-3 grid-cols-2 py-6 text-center gap-4 ">
                            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                                <img
                                    className="pt-4 w-20 mx-auto"
                                    src={Selenium}
                                    alt=""
                                />
                                <p className="my-4">Selenium</p>
                                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div
                                        class="bg-gray-300 text-xs font-medium text-pink-500 text-center p-0.5 leading-none rounded-full"
                                        style={{ width: "85%" }}
                                    >
                                        {" "}
                                        78%
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                                <img
                                    className="pt-4 w-20 mx-auto"
                                    src={Jmeter}
                                    alt=""
                                />
                                <p className="my-4"> Apache Jmeter</p>
                                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div
                                        class="bg-gray-300 text-xs font-medium text-pink-500 text-center p-0.5 leading-none rounded-full"
                                        style={{ width: "85%" }}
                                    >
                                        {" "}
                                        85%
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                                <img
                                    className="pt-4 w-20 mx-auto"
                                    src={Loadrunner}
                                    alt=""
                                />
                                <p className="my-4">Loadrunner</p>
                                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div
                                        class="bg-gray-300 text-xs font-medium text-pink-500 text-center p-0.5 leading-none rounded-full"
                                        style={{ width: "85%" }}
                                    >
                                        {" "}
                                        82%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ==================================================================================== */}
                <div>
                    <div>
                        <p className="font-bold">DevOps Tools</p>
                    </div>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-6 text-center gap-4 py-6">
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="pt-4 w-20 h-30 mx-auto mt-2"
                                src={Jenkins}
                                alt=""
                            />
                            <p className="my-4">Jenkins</p>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div
                                    class="bg-gray-300 text-xs font-medium text-pink-500 text-center p-0.5 leading-none rounded-full"
                                    style={{ width: "70%" }}
                                >
                                    {" "}
                                    70%
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="pt-4 w-20 mx-auto"
                                src={Gitlab}
                                alt=""
                            />
                            <p className="my-4">Gitlab</p>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div
                                    class="bg-gray-300 text-xs font-medium text-pink-500 text-center p-0.5 leading-none rounded-full"
                                    style={{ width: "78%" }}
                                >
                                    {" "}
                                    78%
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="pt-4 w-20 mx-auto"
                                src={Docker}
                                alt=""
                            />
                            <p className="my-4">Docker</p>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div
                                    class="bg-gray-300 text-xs font-medium text-pink-500 text-center p-0.5 leading-none rounded-full"
                                    style={{ width: "80%" }}
                                >
                                    {" "}
                                    80%
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="pt-4 w-20 h-30 mx-auto"
                                src={Kubernetes}
                                alt=""
                            />
                            <p className="my-4">Kubernetes</p>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div
                                    class="bg-gray-300 text-xs font-medium text-pink-500 text-center p-0.5 leading-none rounded-full"
                                    style={{ width: "78%" }}
                                >
                                    {" "}
                                    78%
                                </div>
                            </div>
                        </div>

                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="pt-4 w-20 mx-auto"
                                src={Dynatrace}
                                alt=""
                            />
                            <p className="my-4">Dynatrace</p>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div
                                    class="bg-gray-300 text-xs font-medium text-pink-500 text-center p-0.5 leading-none rounded-full"
                                    style={{ width: "78%" }}
                                >
                                    {" "}
                                    78%
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="pt-4 w-20 mx-auto"
                                src={Datadog}
                                alt=""
                            />
                            <p className="my-4">Datadog</p>
                            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div
                                    class="bg-gray-300 text-xs font-medium text-pink-500 text-center p-0.5 leading-none rounded-full"
                                    style={{ width: "80%" }}
                                >
                                    {" "}
                                    80%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ========================= */}
            </div>
        </div>
    );
};

export default Skills;

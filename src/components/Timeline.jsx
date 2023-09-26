import React from "react";

function Timeline() {
    return (
        <div
            name="hero"
            className="w-full h-screen bg-[#0a192f] hidden sm:block"
        >
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div class="wrap overflow-hidden p-10 h-full">
                    <div
                        class="border-2-2 absolute border-opacity-20 border-gray-700 h-4/5 border"
                        style={{ left: "50%", top: "200%" }}
                    ></div>

                    <div class="mb-8 flex justify-between items-center w-full right-timeline">
                        <div class="order-1 w-5/12"></div>
                        <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 class="mx-auto font-semibold text-lg text-white">
                                1
                            </h1>
                        </div>
                        <div className="order-1 w-5/12 px-6 py-4 text-[#ccd6f6]">
                            <h4 className="font-bold text-[#ccd6f6] text-xl">
                                Addis Ababa University
                            </h4>
                            <h4 className="mb-3 text-gray-300 text-sm">
                                (September 2018 - July 2022)
                            </h4>
                            <p className="text-sm leading-snug tracking-wide text-[#9892b8]">
                                BSc. in Information Technology Engineering
                            </p>
                        </div>
                    </div>

                    <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div class="order-1 w-5/12"></div>
                        <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 class="mx-auto text-white font-semibold text-lg">
                                2
                            </h1>
                        </div>
                        <div className="order-1 w-5/12 px-6 py-4 text-[#ccd6f6]">
                            <h4 className="font-bold text-[#ccd6f6] text-xl">
                                Kirar Developers
                            </h4>
                            <h4 className="mb-3 text-gray-300 text-sm">
                                (July 2021 - September 2021)
                            </h4>
                            <p className="text-sm leading-snug tracking-wide text-[#9892b8]">
                                Attended internship in frontend development of
                                mobile applications with Flutter as well as
                                robust backend APIs in Django REST framework.
                            </p>
                        </div>
                    </div>

                    <div class="mb-8 flex justify-between items-center w-full right-timeline">
                        <div class="order-1 w-5/12"></div>
                        <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 class="mx-auto font-semibold text-lg text-white">
                                3
                            </h1>
                        </div>
                        <div className="order-1 w-5/12 px-6 py-4 text-[#ccd6f6]">
                            <h4 className="font-bold text-[#ccd6f6] text-xl">
                                Ethiofruit Technologies
                            </h4>
                            <h4 className="mb-3 text-gray-300 text-sm">
                                (September 2022 - present)
                            </h4>
                            <p className="text-sm leading-snug tracking-wide text-[#9892b8]">
                                Involved in both Application Development and QA
                                Engineering in product delivery.
                            </p>
                        </div>
                    </div>

                    {/* <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div class="order-1 w-5/12"></div>
                            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 class="mx-auto text-white font-semibold text-lg">
                                    4
                                </h1>
                            </div>
                            <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 class="mb-3 font-bold text-white text-xl">
                                    Lorem Ipsum
                                </h3>
                                <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </p>
                            </div>
                        </div>  */}
                </div>
            </div>
        </div>
    );
}

export default Timeline;

import { useState } from "react";
const EducationNExperience = () => {
    const [education, setEducation] = useState("false");
    const [experience, setExperience] = useState("true");

    const handleEducation = () => {
        setEducation("true");
        setExperience("false");

    }

    const handleExperience = () => {
        setExperience("true");
        setEducation("false");

    }


    return (
        <>
            <div className="my-24 h-auto p-12 md:block hidden">
                <h1 className="text-3xl  text-center m-8">Education & Experience</h1>

                <div className="flex flex-row justify-center items-center font-bold mb-8 rounded-md bg-white p-2 w-min mx-auto text-2xl">
                    <button onClick={handleEducation} className={education === "true" ? "m-2 px-8 py-2 bg-[#E5BA73] rounded-md cursor-pointer text-white text-2xl" : "m-2 px-8 py-2 bg-white rounded-md cursor-pointer text-black hover:bg-[#f1f5f9]"}>Education</button>
                    <button onClick={handleExperience} className={experience === "true" ? "m-2 px-8 py-2 bg-[#E5BA73] rounded-md cursor-pointer text-white text-2xl" : "m-2 px-8 py-2 bg-white rounded-md cursor-pointer text-black hover:bg-[#f1f5f9]"}>Experience</button>
                </div>
                {
                    // Education
                    education === "true" &&
                    <div>
                        <div className="relative h-24 m-0 p-0 ">
                            <div>

                                <div className="bg-white p-4 text-black w-[40%] rounded-md ml-8 float-left ">
                                    <div className="border-l-2 h-56 absolute left-[50%] border-solid border-black"></div>
                                    <div className="absolute  w-[30px] h-[30px] top-[50%] rounded-full bg-black left-[49%]  "></div>
                                    <h1 className="font-bold text-2xl ">Maharaja Surajmal Institute of Technology | GGSIPU</h1>
                                    <h3 className="font-semibold text-gray-500">BTech in Information Technology | 2022-2025</h3>
                                    <ul className="text-gray-500 p-2">
                                        <li className=" list-disc mx-0">WebDeveloper at GDSC MSIT.</li>
                                        <li className=" list-disc mx-0">Part of MSI(T) Football Team.</li>
                                        <li className=" list-disc mx-0">Played as striker and helped the IT Department win the Inter-Department Football Tournament 2022-23.</li>
                                        <li className=" list-disc mx-0">Won several individual medals as well as relay race in athletics in MSI(T) sports meet.</li>
                                        <li className=" list-disc mx-0">Secured 7.4 CGPA (till 3rd Semester).</li>

                                    </ul>
                                </div>
                            </div>


                        </div>
                        <div className="">

                            <div className="relative h-24  my-8 p-0 ">

                                <div className="bg-white p-4  text-black w-[40%] float-right mr-8 rounded-md ">
                                    <div className="border-l-2 h-56 absolute left-[50%] border-solid border-black"></div>
                                    <div className="absolute w-[30px] h-[30px] top-[50%] rounded-full bg-black left-[49%]  "></div>
                                    <h1 className="font-bold text-2xl ">Ambedkar Institute of Technology | DSEU</h1>
                                    <h3 className="font-semibold text-gray-500">Diploma in Computer Engineering | 2019-2022</h3>
                                    <ul className="text-gray-500 p-2">
                                        <li className=" list-disc mx-0">Secured 86.7% in diploma, 3rd rank in the Computer Engineering department.</li>
                                        <li className=" list-disc mx-0">Did an internship at DSEU and got to interact with the then Deputy CM & Education Minister Shri Manish Sisodiya ji.</li>
                                        <li className=" list-disc mx-0">Been Class Representative for 5 semesters.</li>

                                    </ul>

                                </div>
                            </div>


                        </div>
                    </div>
                }
                {
                    // Experience
                    experience === "true" &&
                    <div className="h-auto">
                        <div className="relative h-24 m-0 p-0 ">
                            <div className="flex flex-col justify-center">
                                <div className="border-l-2 h-56 absolute left-[50%] border-solid border-black "></div>
                                <div className="absolute w-[30px] h-[30px] top-[80%] my-auto rounded-full bg-black left-[49%]  "></div>
                                <div className="bg-white p-4 text-black w-[40%] rounded-md ml-8 float-left ">

                                    <h1 className="font-bold text-2xl ">A2D Innovations Pvt. Ltd.</h1>
                                    <h3 className="font-semibold text-gray-600">VueJS Developer Intern | February 2022 - April 2022 | Remote</h3>
                                    <ul className="text-gray-500 p-2">
                                        <li className=" list-disc mx-0">Built fully functional front-end for the clients of A2D.</li>
                                        <li className=" list-disc mx-0">Integrated backend APIs and handled routing.</li>
                                        <li className=" list-disc mx-0">Skills: VueJS, Vue-Router, VueX.</li>
                                    </ul>

                                </div>
                            </div>


                        </div>
                        <div className="relative h-24  m-8 p-0 ">
                            <div>
                                <div className="border-l-2 h-56 absolute left-[50%] border-solid border-black"></div>
                                <div className="absolute w-[30px] h-[30px] top-[70%] rounded-full bg-black left-[49%]  "></div>
                                <div className="bg-white p-4 text-black w-[40%] float-right mr-5 rounded-md ">

                                    <h1 className="font-bold text-2xl ">Delhi Skill & Entrepreneurship University</h1>
                                    <h3 className="font-semibold text-gray-600">Intern | August 2021 - September 2021 | New Delhi</h3>
                                    <ul className="text-gray-500 p-2">
                                        <li className=" list-disc mx-0">Worked directly under the supervision of the then Deputy CM and Education Minister of Delhi Shri Manish Sisodiya ji. .</li>
                                        <li className=" list-disc mx-0">Contributed to the successful organisation of first ever qualification rounds of World Skill Contest for Delhi NCR.</li>
                                        <li className=" list-disc mx-0">Skills: Communication Skills, Excel, Database Management.</li>
                                    </ul>
                                </div>
                            </div>


                        </div>

                    </div>
                }
            </div>
            {/* Small screen  view */}
            <div className="my-24 h-auto p-6 md:hidden block">
                <h1 className="text-3xl  text-center m-8">Education & Experience</h1>

                <div className="flex flex-row justify-center items-center font-bold mb-8 rounded-md bg-white p-1 w-min mx-auto text-xl">
                    <button onClick={handleEducation} className={education === "true" ? "m-2 px-4 py-1 bg-[#E5BA73] rounded-md cursor-pointer text-white text-2xl" : "m-2 px-4 py-1 bg-white rounded-md cursor-pointer text-black hover:bg-[#f1f5f9]"}>Education</button>
                    <button onClick={handleExperience} className={experience === "true" ? "m-2 px-4 py-1 bg-[#E5BA73] rounded-md cursor-pointer text-white text-2xl" : "m-2 px-4 py-1 bg-white rounded-md cursor-pointer text-black hover:bg-[#f1f5f9]"}>Experience</button>
                </div>
                {
                    education ==="true" &&
                    <div className="flex border-l-4 border-black h-108 flex-col ">

                        <div className="bg-white p-4 text-black w-[100%] rounded-md ml-8 float-left relative ">
                            <div className="absolute w-[30px] h-[30px]  my-auto rounded-full bg-black left-[-14%] top-[50%]  "></div>


                            <h1 className="font-bold text-xl ">Maharaja Surajmal Institute of Technology | GGSIPU</h1>
                            <h3 className="font-semibold text-gray-600">BTech in Information Technology | 2022-2025</h3>
                            <ul className="text-gray-500 p-2">
                                <li className=" list-disc mx-0">WebDeveloper at GDSC MSIT.</li>
                                <li className=" list-disc mx-0">Part of MSI(T) Football Team.</li>
                                <li className=" list-disc mx-0">Played as striker and helped the IT Department win the Inter-Department Football Tournament 2022-23.</li>
                                <li className=" list-disc mx-0">Won several individual medals as well as relay race in athletics in MSI(T) sports meet.</li>
                                <li className=" list-disc mx-0">Secured 7.4 CGPA (till 3rd Semester).</li>

                            </ul>

                        </div>

                        <div className="bg-white p-4 text-black w-[100%] rounded-md ml-8 float-left relative mt-8">
                            <div className="absolute w-[30px] h-[30px]  my-auto rounded-full bg-black left-[-14%] top-[50%]  "></div>


                            <h1 className="font-bold text-xl ">Ambedkar Institute of Technology | DSEU</h1>
                            <h3 className="font-semibold text-gray-600">Diploma in Computer Engineering | 2019-2022</h3>

                            <ul className="text-gray-500 p-2">
                                <li className=" list-disc mx-0">Secured 86.7% in diploma, 3rd rank in the Computer Engineering department.</li>
                                <li className=" list-disc mx-0">Did an internship at DSEU and got to interact with the then Deputy CM & Education Minister Shri Manish Sisodiya ji.</li>
                                <li className=" list-disc mx-0">Been Class Representative for 5 semesters.</li>

                            </ul>
                        </div>



                    </div>
                }

                {
                    experience ==="true" &&
                    <div className="flex border-l-4 border-black h-108 flex-col ">

                        <div className="bg-white p-4 text-black w-[100%] rounded-md ml-8 float-left relative ">
                            <div className="absolute w-[30px] h-[30px]  my-auto rounded-full bg-black left-[-14%] top-[50%]  "></div>


                            <h1 className="font-bold text-xl ">A2D Innovations Pvt. Ltd.</h1>
                            <h3 className="font-semibold text-gray-600">VueJS Developer Intern | February 2022 - April 2022 | Remote</h3>
                            <ul className="text-gray-500 p-2">
                                <li className=" list-disc mx-0">Built fully functional front-end for the clients of A2D.</li>
                                <li className=" list-disc mx-0">Integrated backend APIs and handled routing.</li>
                                <li className=" list-disc mx-0">Skills: VueJS, Vue-Router, VueX.</li>
                            </ul>

                        </div>

                        <div className="bg-white p-4 text-black w-[100%] rounded-md ml-8 float-left relative mt-8">
                            <div className="absolute w-[30px] h-[30px]  my-auto rounded-full bg-black left-[-14%] top-[50%]  "></div>


                            <h1 className="font-bold text-xl ">Delhi Skill & Entrepreneurship University</h1>
                            <h3 className="font-semibold text-gray-600">Intern | August 2021 - September 2021 | New Delhi</h3>

                            <ul className="text-gray-500 p-2">
                                <li className=" list-disc mx-0">Worked directly under the supervision of the then Deputy CM and Education Minister of Delhi Shri Manish Sisodiya ji. .</li>
                                <li className=" list-disc mx-0">Contributed to the successful organisation of first ever qualification rounds of World Skill Contest for Delhi NCR.</li>
                                <li className=" list-disc mx-0">Skills: Communication Skills, Excel, Database Management.</li>
                            </ul>
                        </div>



                    </div>
                }
            </div>


        </>
    )
}
export default EducationNExperience;
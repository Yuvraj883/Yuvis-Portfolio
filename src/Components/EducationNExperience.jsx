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
            <div className="my-24 h-auto p-12">
                <div className="flex flex-row justify-center items-center font-bold mb-8 rounded-md bg-white p-2 w-min mx-auto text-2xl">
                    <button onClick={handleEducation} className={education==="true" ? "m-2 px-8 py-2 bg-[#E5BA73] rounded-md cursor-pointer text-white text-2xl" : "m-2 px-8 py-2 bg-white rounded-md cursor-pointer text-black hover:bg-[#f1f5f9]"}>Education</button>
                    <button onClick={handleExperience} className={experience==="true" ? "m-2 px-8 py-2 bg-[#E5BA73] rounded-md cursor-pointer text-white text-2xl" : "m-2 px-8 py-2 bg-white rounded-md cursor-pointer text-black hover:bg-[#f1f5f9]"}>Experience</button>
                </div>
                {
                    // Education
                    education==="true" &&
                    <div>
                        <div className="relative h-24 m-0 p-0 ">
                            <div>
                               
                                <div className="bg-white p-4 text-black w-[40%] rounded-md ml-8 float-left ">
                                <div className="border-l-2 h-56 absolute left-[50%] border-solid border-black"></div>
                                <div className="absolute  w-[30px] h-[30px] top-[50%] rounded-full bg-black left-[49%]  "></div>
                                    <h1 className="font-bold text-2xl ">Maharaja Surajmal Institute of Technology | GGSIPU</h1>
                                    <h3 className="font-semibold text-gray-500">BTech in Information Technology | 2022-2025</h3>

                                </div>
                            </div>


                        </div>
                        <div className="">

                        <div className="relative h-24  my-8 p-0 ">
                               
                                <div className="bg-white p-4  text-black w-[40%] float-right mr-8 rounded-md ">
                                <div className="border-l-2  absolute left-[50%] border-solid border-black"></div>
                                <div className="absolute w-[30px] h-[30px] top-[50%] rounded-full bg-black left-[49%]  "></div>
                                    <h1 className="font-bold text-2xl ">Ambedkar Institute of Technology | DSEU</h1>
                                    <h3 className="font-semibold text-gray-500">Diploma in Computer Engineering | 2019-2022</h3>

                                </div>
                            </div>


                        </div>
                    </div>
                }
                  {
                    // Experience
                    experience ==="true" &&
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
                        {/* <div className="relative h-24 m-0 p-0 ">
                            <div>
                            <div className="border-l-2 h-48 absolute left-[50%] border-solid border-black "></div>
                                <div className="absolute w-[30px] h-[30px] top-[50%] rounded-full bg-black left-[49%]  "></div>
                                <div className="bg-white p-4 text-black w-[40%] rounded-md float-left ">

                                    <h1 className="font-bold text-2xl ">A2D Innovations Pvt. Ltd.</h1>
                                    <h3 className="font-semibold text-gray-600">VueJS Developer Intern | February 2022 - April 2022 | Remote</h3>
                                    <ul className="text-gray-500 p-2">
                                        <li className=" list-disc mx-0">Built fully functional front-end for the clients of A2D.</li>
                                        <li className=" list-disc mx-0">Integrated backend APIs and handled routing.</li> 
                                        <li className=" list-disc mx-0">Skills: VueJS, Vue-Router, VueX.</li>
                                    </ul>

                                </div>
                            </div>


                        </div> */}
                    </div>
                }
            </div>

        </>
    )
}
export default EducationNExperience;
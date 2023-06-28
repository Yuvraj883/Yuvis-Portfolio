import { useState } from "react";
const EducationNExperience = ()=>{
    const [education, setEducation] = useState(false);
    const [experience, setExperience] = useState(true);

    const handleEducation = ()=>{
        setEducation(true);
        setExperience(false);

    }
    
    const handleExperience = ()=>{
        setExperience(true);
        setEducation(false);

    }
    

    return(
        <>
<div className="m-8 p-8">
        <div className="flex flex-row justify-center items-center mb-8 bg-white p-4 w-min mx-auto">
            <button className="m-2 px-8 py-2 bg-yellow-800 text-white font-semibold text-2xl">Education</button>
            <button className="m-2 px-8 py-2 bg-yellow-800 text-white font-semibold text-2xl">Experience</button>
        </div>
        
        <div className="relative h-24 m-0 p-0 ">
            <div>
                <div  className="border-l-2 h-72 absolute left-[50%] border-solid border-black "></div>
                    <div className="absolute w-[30px] h-[30px] top-[50%] rounded-full bg-black left-[49%]  "></div>
                    <div className="bg-white p-4 text-black w-[40%]  ">
                        <h1 className="font-extrabold text-2xl ">Maharaja Surajmal Institute of Technology | GGSIPU</h1>
                        <h3 className="font-semibold text-gray-500">BTech Information Technology | 2022-2025</h3>

                    </div>
                    </div>

                
        </div>
        <div className="relative h-24 flex flex-col   m-8 p-0 ">
            <div>
                <div  className="border-l-2  absolute left-[50%] border-solid border-black"></div>
                    <div className="absolute w-[30px] h-[30px] top-[50%] rounded-full bg-black left-[49%]  "></div>
                    <div className="bg-white p-4 text-black w-[40%] float-right  ">
                        <h1 className="font-extrabold text-2xl ">Maharaja Surajmal Institute of Technology | GGSIPU</h1>
                        <h3 className="font-semibold text-gray-500">BTech Information Technology | 2022-2025</h3>

                    </div>
                    </div>

                
        </div>
        </div>
        
        </>
    )
}
export default EducationNExperience;
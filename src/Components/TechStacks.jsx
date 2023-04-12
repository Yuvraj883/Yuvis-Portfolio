import { useState } from 'react';
import { FaHtml5, FaReact, FaCss3Alt, FaAngular, FaVuejs, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiBootstrap, SiMongodb } from 'react-icons/si';


function TechStacks() {
    const [frontEnd, setFrontEnd] = useState(true);
    const [backEnd, setBackEnd] = useState(false);
    const [others, setOthers] = useState(false);

    // function setFrontEnd(){
    //     setBackEnd(false);
    //     setOthers(false); 
    // }
    // function setBackEnd(){
    //     setFrontEnd(false);
    //     setOthers(false); 
    // }
    // function setOthers(){
    //     setBackEnd(false);
    //     setFrontEnd(false); 
    // }

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl  ">Tech Stacks</h1>
                <div className="flex space-x-8 shadow-lg rounded-md p-2  font-bold text-2xl bg-white m-8">
                    <button onClick={() => { setBackEnd(false); setOthers(false); setFrontEnd(true) }} 
                    className={`hover:bg-[#f1f5f9] py-2 px-8 rounded-md ${this.frontEnd ? "bg-blue-800": " "}`}>Front-End</button>
                    <button onClick={() => { setFrontEnd(false); setOthers(false); setBackEnd(true) }} className="hover:bg-[#f1f5f9] py-2 px-8 rounded-md">Back-End</button>
                    <button onClick={() => { setBackEnd(false); setFrontEnd(false); setOthers(true) }} className="hover:bg-[#f1f5f9] py-2 px-8 rounded-md">Others</button>
                </div>
                {frontEnd === true &&
                    <div >
                        {/* Front-End */}
                        <ul className='flex  w-4/5 m-auto items-center flex-wrap '>

                            <div className='rounded-full m-2 bg-orange-50 p-6 '>
                                <li><FaHtml5 className='text-8xl text-orange-500 ' /> </li>
                            </div>
                            <div className='rounded-full m-2 bg-blue-50 p-6 '>
                                <li><FaCss3Alt className='text-8xl text-blue-500 bg-blue-50 ' /> </li>

                            </div>
                            <div className='rounded-full m-2 bg-yellow-50 p-6 '>
                                <li><SiJavascript className='text-8xl text-yellow-300 bg-yellow-50 ' /> </li>

                            </div>
                            <div className='rounded-full m-2 bg-blue-100 p-6 ' >
                                <li><FaReact className='text-8xl text-blue-400 ' /> </li>

                            </div>
                            <div className='rounded-full m-2  bg-green-50 p-6 '>
                                <li><FaVuejs className='text-8xl text-green-500 bg-green-50 ' /> </li>

                            </div>

                            <div className='rounded-full m-2 bg-red-50 p-6 '>
                                <li><FaAngular className='text-8xl text-red-500 bg-red-50' /> </li>

                            </div>


                            <div className='rounded-full m-2 bg-blue-50 p-6 '>
                                <li><SiTailwindcss className='text-8xl text-blue-400 bg-blue-50 ' /> </li>

                            </div>

                            <div className='rounded-full m-2 bg-purple-50 p-6 '>
                                <li><SiBootstrap className='text-8xl text-purple-400' /> </li>


                            </div>

                        </ul>
                    </div>
                }

                {/* Back End */}
                {
                    backEnd === true && <div className="flex  w-4/5 m-auto items-center flex-wrap">
                        <div>
                            <div className='rounded-full m-2 bg-green-50 p-6 '>
                                <FaNodeJs className='text-8xl text-green-400 ' />
                            </div>
                            <p className='font-semibold text-xl text-center'>NodeJs</p>

                        </div>
                        <div>
                            <div className='rounded-full m-2 bg-green-50 p-6 '>

                                <SiMongodb className='text-8xl text-green-600 ' />
                            </div>
                            <p className='font-semibold text-xl text-center'>MongoDB</p>

                        </div>
                    </div>

                }

                {/* Others */}

                {
                    others === true && <div className="flex  w-4/5 m-auto items-center flex-wrap">
                        <div>
                            <div className='rounded-full m-2 bg-blue-50 p-6 '>
                                <img src="https://cdn.iconscout.com/icon/free/png-256/c-57-1175191.png" className='h-24' alt="Java" />
                            </div>
                            <p className='font-semibold text-xl text-center'>C</p>

                        </div>
                        <div>
                            <div className='rounded-full m-2 bg-purple-50 p-6 '>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" className='h-24' alt="Java" />

                            </div>
                            <p className='font-semibold text-xl text-center'>C++</p>

                        </div>

                        <div>
                            <div className='rounded-full m-2 bg-red-50 p-6 '>
                                <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" className='h-24' alt="Java" />
                            </div>
                            <p className='font-semibold text-xl text-center'>Java</p>

                        </div>


                        <div>
                            <div className='rounded-full m-2 bg-orange-50 p-6 '>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/480px-Git_icon.svg.png" className='h-24' alt="Java" />

                            </div>

                            <p className='font-semibold text-xl text-center'>Git</p>
                        </div>

                        <div>
                            <div className='rounded-full m-2 bg-[#f9fafb] p-6 '>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" className='h-24' alt="Java" />

                            </div>
                            <p className='font-semibold text-xl text-center'>Git Hub</p>

                        </div>

                        <div>
                            <div className='rounded-full m-2 bg-green-50 p-6 '>
                                <img src="https://cdn.iconscout.com/icon/free/png-256/netlify-3628945-3030170.png" className='h-24' alt="Java" />

                            </div>
                            <p className='font-semibold text-xl text-center'>Netlify</p>

                        </div>



                    </div>
                }

            </div>

        </>
    )
}
export default TechStacks; 
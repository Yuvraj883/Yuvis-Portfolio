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
            <div className="md:flex hidden flex-col  w-4/5 m-auto justify-center items-center px-auto">
                <h1 className="text-4xl  ">Tech Stacks</h1>
                <div className="flex space-x-8 shadow-lg rounded-md p-2  font-bold text-2xl bg-white m-8">
                    <button onClick={() => { setBackEnd(false); setOthers(false); setFrontEnd(true) }}
                        className={` ${frontEnd ? "bg-[#E5BA73] text-white py-2 px-8 rounded-md" : "hover:bg-[#f1f5f9] py-2 px-8 rounded-md  "}`}>Front-End</button>
                    <button onClick={() => { setFrontEnd(false); setOthers(false); setBackEnd(true) }}
                        className={` ${backEnd ? "bg-[#E5BA73] text-white py-2 px-8 rounded-md" : "hover:bg-[#f1f5f9] py-2 px-8 rounded-md  "}`}>Back-End</button>
                    <button onClick={() => { setBackEnd(false); setFrontEnd(false); setOthers(true) }}
                        className={` ${others ? "bg-[#E5BA73] text-white py-2 px-8 rounded-md" : "hover:bg-[#f1f5f9] py-2 px-8 rounded-md  "}`}>Others</button>
                </div>
                {frontEnd === true &&
                    <div className='flex   w-4/5 m-auto items-center  flex-wrap  '>
                        {/* Front-End */}

                        <div>
                            <div className='rounded-full m-6 bg-orange-50 p-6 '>
                                <FaHtml5 className='text-8xl text-orange-500 ' />
                            </div>
                            <p className='font-semibold text-xl text-center'>HTML 5</p>

                        </div>
                        <div>
                            <div className='rounded-full m-6 bg-blue-50 p-6 '>
                                <FaCss3Alt className='text-8xl text-blue-500 bg-blue-50 ' />

                            </div>
                            <p className='font-semibold text-xl text-center'>CSS 3</p>
                        </div>
                        <div>
                            <div className='rounded-full m-6 bg-yellow-50 p-6 '>
                                <SiJavascript className='text-8xl text-yellow-300 bg-yellow-50 ' />

                            </div>
                            <p className='font-semibold text-xl text-center'>Javascript</p>
                        </div>
                        <div>
                            <div className='rounded-full m-6 bg-blue-100 p-6 ' >
                                <FaReact className='text-8xl text-blue-400 ' />

                            </div>
                            <p className='font-semibold text-xl text-center'>ReactJs</p>
                        </div>
                        <div>
                            <div className='rounded-full m-6  bg-green-50 p-6 '>
                                <FaVuejs className='text-8xl text-green-500 bg-green-50 ' />

                            </div>
                            <p className='font-semibold text-xl text-center'>VueJs</p>
                        </div>
                        <div>
                            <div className='rounded-full m-6 bg-red-50 p-6 '>
                                <FaAngular className='text-8xl text-red-500 bg-red-50' />

                            </div>
                            <p className='font-semibold text-xl text-center'>AngularJs</p>
                        </div>
                        <div>
                            <div className='rounded-full m-6 bg-blue-50 p-6 '>
                                <SiTailwindcss className='text-8xl text-blue-400 bg-blue-50 ' />

                            </div>
                            <p className='font-semibold text-xl text-center'>Tailwind CSS</p>
                        </div>
                        <div>
                            <div className='rounded-full m-6 bg-purple-50 p-6 '>
                                <SiBootstrap className='text-8xl text-purple-400' />


                            </div>
                            <p className='font-semibold text-xl text-center'>BootStrap</p>
                        </div>


                    </div>
                }

                {/* Back End */}
                {
                    backEnd === true && <div className="flex  w-4/5 m-auto items-center flex-wrap">
                        <div>
                            <div className='rounded-full m-6 bg-green-50 p-6 '>
                            {/* <img src={require('../assets/node.png')} className='h-24 w-24' alt="Java" /> */}
                               <FaNodeJs className='text-8xl text-green-400 '/> 
                            </div>
                            <p className='font-semibold text-xl text-center'>NodeJs</p>

                        </div>
                        <div>
                            <div className='rounded-full m-6 bg-green-50 p-6 '>

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
                            <div className='rounded-full m-6 bg-blue-50 p-6 '>
                                <img src={require('../assets/c.png')} className='h-24' alt="Java" />
                            </div>
                            <p className='font-semibold text-xl text-center'>C</p>

                        </div>
                        <div>
                            <div className='rounded-full m-6 bg-purple-50 p-6 '>
                                <img src={require('../assets/c++.png')} className='h-24' alt="Java" />

                            </div>
                            <p className='font-semibold text-xl text-center'>C++</p>

                        </div>

                        <div>
                            <div className='rounded-full m-6 bg-red-50 p-6 '>
                                <img src={require('../assets/Java.png')} className='h-24' alt="Java" />
                            </div>
                            <p className='font-semibold text-xl text-center'>Java</p>

                        </div>


                        <div>
                            <div className='rounded-full m-6 bg-orange-50 p-6 '>
                                <img src={require('../assets/Git.png')} className='h-24' alt="Java" />

                            </div>

                            <p className='font-semibold text-xl text-center'>Git</p>
                        </div>

                        <div>
                            <div className='rounded-full m-6 bg-[#f9fafb] p-6 '>
                                <img src={require('../assets/github.png')} className='h-24' alt="Java" />

                            </div>
                            <p className='font-semibold text-xl text-center'>Git Hub</p>

                        </div>

                        <div>
                            <div className='rounded-full m-6 bg-green-50 p-6 '>
                                <img src={require('../assets/netlify.webp')} className='h-24' alt="Java" />

                            </div>
                            <p className='font-semibold text-xl text-center'>Netlify</p>

                        </div>



                    </div>
                }

            </div>
            {/* Mobile view */}
            <div className="md:hidden flex flex-col  w-full mx-auto my-8 justify-center items-center px-auto">
                <h1 className="text-4xl  ">Tech Stacks</h1>
                <div className="flex space-x-4 shadow-lg rounded-md p-2  font-bold text-lg w-[90%] bg-white m-4">
                    <button onClick={() => { setBackEnd(false); setOthers(false); setFrontEnd(true) }}
                        className={` ${frontEnd ? "bg-[#E5BA73] text-white py-2 px-4 rounded-md" : "hover:bg-[#f1f5f9] py-2 px-8 rounded-md  "}`}>Front-End</button>
                    <button onClick={() => { setFrontEnd(false); setOthers(false); setBackEnd(true) }}
                        className={` ${backEnd ? "bg-[#E5BA73] text-white py-2 px-4 rounded-md" : "hover:bg-[#f1f5f9] py-2 px-8 rounded-md  "}`}>Back-End</button>
                    <button onClick={() => { setBackEnd(false); setFrontEnd(false); setOthers(true) }}
                        className={` ${others ? "bg-[#E5BA73] text-white py-2 px-4 rounded-md" : "hover:bg-[#f1f5f9] py-2 px-8 rounded-md  "}`}>Others</button>
                </div>
                {frontEnd === true &&
                    <div className='flex flex-row w-4/5 mx-auto space-x-4 items-center justify-center flex-wrap  '>
                        {/* Front-End */}

                        <div>
                            <div className='rounded-full m-4  bg-orange-50 p-2 '>
                                <FaHtml5 className='text-6xl mx-auto text-orange-500 ' />
                            </div>
                            <p className='font-semibold text-lg text-center'>HTML 5</p>

                        </div>
                        <div>
                            <div className='rounded-full m-4 bg-blue-50 p-2 '>
                                <FaCss3Alt className='text-6xl mx-auto text-blue-500 bg-blue-50 ' />

                            </div>
                            <p className='font-semibold text-lg text-center'>CSS 3</p>
                        </div>
                        <div>
                            <div className='rounded-full m-4 bg-yellow-50 p-2 '>
                                <SiJavascript className='text-6xl mx-auto text-yellow-300 bg-yellow-50 ' />

                            </div>
                            <p className='font-semibold text-lg text-center'>Javascript</p>
                        </div>
                        <div>
                            <div className='rounded-full m-2 bg-blue-100 p-2 ' >
                                <FaReact className='text-6xl mx-auto text-blue-400 ' />

                            </div>
                            <p className='font-semibold text-lg text-center'>ReactJs</p>
                        </div>
                        <div>
                            <div className='rounded-full m-2  bg-green-50 p-2 '>
                                <FaVuejs className='text-6xl mx-auto text-green-500 bg-green-50 ' />

                            </div>
                            <p className='font-semibold text-lg text-center'>VueJs</p>
                        </div>
                        <div>
                            <div className='rounded-full m-2 bg-red-50 p-2 '>
                                <FaAngular className='text-6xl mx-auto text-red-500 bg-red-50' />

                            </div>
                            <p className='font-semibold text-lg text-center'>AngularJs</p>
                        </div>
                        <div>
                            <div className='rounded-full m-2 bg-blue-50 p-2 '>
                                <SiTailwindcss className='text-6xl mx-auto text-blue-400 bg-blue-50 ' />

                            </div>
                            <p className='font-semibold text-lg text-center'>Tailwind CSS</p>
                        </div>
                        <div>
                            <div className='rounded-full m-2 bg-purple-50 p-2 '>
                                <SiBootstrap className='text-6xl mx-auto  text-purple-400' />


                            </div>
                            <p className='font-semibold text-lg text-center'>BootStrap</p>
                        </div>


                    </div>
                }

                {/* Back End */}
                {
                    backEnd === true && <div className="flex space-x-4 w-4/5 m-auto justify-center items-center flex-wrap">
                        <div>
                            <div className='rounded-full m-4 bg-green-50 p-2 '>
                            {/* <img src={require('../assets/node.png')} className='h-24 w-24' alt="Java" /> */}
                               <FaNodeJs className='text-6xl m-auto text-green-400 '/> 
                            </div>
                            <p className='font-semibold text-lg text-center'>NodeJs</p>

                        </div>
                        <div>
                            <div className='rounded-full m-4 bg-green-50 p-2 '>

                                <SiMongodb className='text-6xl m-auto text-green-600 ' />
                            </div>
                            <p className='font-semibold text-lg text-center'>MongoDB</p>

                        </div>
                    </div>

                }

                {/* Others */}

                {
                    others === true && <div className="flex space-x-2 w-4/5 m-auto justify-center items-center flex-wrap">
                        <div>
                            <div className='rounded-full m-4 bg-blue-50 p-2 '>
                                <img src={require('../assets/c.png')} className='h-[3.75rem] m-auto' alt="C" />
                            </div>
                            <p className='font-semibold text-lg text-center'>C</p>

                        </div>
                        <div>
                            <div className='rounded-full m-4 bg-purple-50 p-2 '>
                                <img src={require('../assets/c++.png')} className='h-[3.75rem] m-auto' alt="C++" />

                            </div>
                            <p className='font-semibold text-lg text-center'>C++</p>

                        </div>

                        <div>
                            <div className='rounded-full  m-4 bg-red-50 p-2 '>
                                <img src={require('../assets/Java.png')} className='h-[3.75rem] m-auto' alt="Java" />
                            </div>
                            <p className='font-semibold text-lg text-center'>Java</p>

                        </div>


                        <div>
                            <div className='rounded-full m-4 bg-orange-50 p-2 '>
                                <img src={require('../assets/Git.png')} className='h-[3.75rem] m-auto' alt="Git" />

                            </div>

                            <p className='font-semibold text-lg text-center'>Git</p>
                        </div>

                        <div>
                            <div className='rounded-full m-4 bg-[#f9fafb] p-2 '>
                                <img src={require('../assets/github.png')} className='h-[3.75rem] m-auto' alt="Github" />

                            </div>
                            <p className='font-semibold text-lg text-center'>Git Hub</p>

                        </div>

                        <div>
                            <div className='rounded-full m-4 bg-green-50 p-2 '>
                                <img src={require('../assets/netlify.webp')} className='h-[3.75rem] m-auto' alt="Netlify" />

                            </div>
                            <p className='font-semibold text-lg text-center'>Netlify</p>

                        </div>



                    </div>
                }

            </div>


        </>
    )
}
export default TechStacks; 
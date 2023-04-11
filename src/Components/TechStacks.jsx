import { FaHtml5, FaReact, FaCss3Alt, FaAngular, FaVuejs } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiBootstrap  } from 'react-icons/si'

function TechStacks() {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl  ">Tech Stacks</h1>
                <div className="flex space-x-8 shadow-lg rounded-md p-2  font-bold text-2xl bg-white m-8">
                    <button className="hover:bg-[#f1f5f9] py-2 px-8 rounded-md">Front-End</button>
                    <button className="hover:bg-[#f1f5f9] py-2 px-8 rounded-md">Back-End</button>
                    <button className="hover:bg-[#f1f5f9] py-2 px-8 rounded-md">Others</button>
                </div>
                <div>
                    <ul className='flex  w-4/5 m-auto items-center flex-wrap '>

                        <div className='rounded-full m-2 bg-orange-50 p-8 '>
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
            </div>

        </>
    )
}
export default TechStacks; 
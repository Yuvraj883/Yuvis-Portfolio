import {IoPinSharp} from 'react-icons/io5';
import TechStacks from './TechStacks';
// import {yuvraj} from '../assets/YuvrajSingh.jpg';
import {FaGithubSquare, FaLinkedin } from 'react-icons/fa';

//  import {SiJavascript, SiTailwindcss, SiMongodb, SiBootstrap} from 'react-icons/si';
// import {DiNodejs} from 'react-icons/di'
function Home(){
    return(
        <>
        <div className="h-auto w-auto flex flex-col pt-20 mb-8  ">
            <div className="flex m-auto w-[50%] justify-around ">
                <div className="py-12">
                    <h1 className="text-5xl my-4 font-extrabold ">Front-End Developer</h1>
                    <p className="py-8 px-2 inline">Hi, I am <b>Yuvraj Singh</b>, a passionate front-end developer,<br/>
                    based in <b>New Delhi, India</b><IoPinSharp className='text-red-700 inline font-bold'/>.
                                

                    </p>
                    <p className='flex my-2 '>
                    <a href="https://www.linkedin.com/in/yuvraj-singh-2942781a3/" className='inline p-1 text-3xl'><FaLinkedin/></a>
                    <a href="https://github.com/Yuvraj883" className='inline p-1 text-3xl'><FaGithubSquare/> </a>
                    </p>
                </div>
                <div>
                    <img src={require('../assets/image3.jpeg')}
                     className="h-64 w-auto rounded-full" alt="Yuvraj Singh"/>
                </div>
                
            </div>
           <TechStacks/>
             
            {/* <div className='flex flex-col m-auto py-[-20] my-[-20] w-50%'>
                <div className='flex'>
                <span className='font-bold text-2xl inline'>Tech Stack: </span>
                <p >
                    <ul className='flex justify-around'>
                        <li><FaHtml5 className='text-4xl text-orange-500 '/> </li>
                        <li><FaCss3Alt className='text-4xl text-blue-500' /> </li>
                        <li><SiJavascript className='text-4xl text-yellow-300 '/> </li>
                        <li><FaReact className='text-4xl text-blue-400 '/> </li>
                        <li><SiTailwindcss className='text-4xl text-blue-400 ' /> </li>
                    </ul>
                   </p>
                   </div>
                   <div className='flex mt-4'>
                <span className='font-bold  text-2xl inline'>Familiar With: </span>
                <p >
                    <ul className='flex justify-around'>
                        <li><FaAngular className='text-4xl text-red-500 '/> </li>
                        <li><FaVuejs className='text-4xl text-green-500' /> </li>
                        <li><FaNodeJs className='text-4xl text-green-400 '/> </li>
                        <li><SiMongodb className='text-4xl text-green-600 '/> </li>
                        <li><SiBootstrap className='text-4xl text-purple-400' /> </li>
                    </ul>
                   </p>
                   </div>
                 
                
            </div>
             */}
            </div>
            <div>
          
            </div>

        
        </>
    )
}
export default Home; 
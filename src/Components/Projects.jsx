import { useState } from "react";
import Project from "./Project";
import SliderCard from "./SliderCard";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
function Projects(){
    
    const [index, setIndex] = useState(0);

    const prevCard = ()=>{
        const newIndex = index === 0? projects.length -1 : index-1; 
        setIndex(newIndex); 
        console.log(index);
    }

    const nextCard = ()=>{
        const newIndex = index === projects.length-1? 0 : index+1; 
        setIndex(newIndex); 
        console.log(index);

    }

    const projects = [
        {   id:1,
            coverImg:'../images/whiteBoard.jpeg',
            title: 'White Board',
            description:'It is a white board made using Canvas API, can be used for teaching students by drawing shapes and figures.',
            techstack: 'HTML, CSS, JS, Canva',
            github: 'https://github.com/Yuvraj883/LinkedInJsChallenge2', 
            live: 'https://yuvis-whiteboard.netlify.app/'

        },
        {   id:2,
            coverImg:'../images/Diusburg.jpeg',
            title: 'Diusburg Landing Page',
            description:'Diusburg is a edTech organisation, which is dedicated to help students willing to study abroad..',
            techstack: 'HTML, CSS',
            github: 'https://github.com/Diusburg/LandingPage', 
            live: 'https://diusburg.github.io/LandingPage/'

        },
        {   id:3,
            coverImg:'../images/TextToSpeech.jpeg',
            title: 'Text To Speech Convertor',
            description:'This is a text to speech convertor made using the JS SpeechSynthesis api.',
            techstack: 'HTML, CSS, JS, SpeechSynthesis API',
            github: 'https://github.com/Yuvraj883/Text-to-Speech', 
            live: 'https://convrt-txt-to-speech.netlify.app/'

        },
        {   id:4,
            coverImg:'./images/PasswordGenerator.jpeg',
            title: 'Unique Password Generator',
            description:'It is a random password generator, which generates unique 15 characters long password using JS.',
            techstack: 'HTML, CSS, JS',
            github: 'https://github.com/Yuvraj883/Password-Generator', 
            live: 'https://newpasswordgenerator.netlify.app/'

        },
        {   id:5,
            coverImg:'../images/RealEstate.jpeg',
            title: 'Real Estate Site Landing Page',
            description:'It is a landing page for some real-estate site, made as part of an assignment.',
            techstack: 'VueJs',
            github: 'https://github.com/Yuvraj883/Real-Estate-Site', 
            live: 'https://real-estate-site-assignment.netlify.app/'

        },
        {   id:6,
            coverImg:'../images/TaskManager.jpeg',
            title: 'Task Manager',
            description:'It is a practice website made while learning VueJS, it usage the local storage of the browser to store data.',
            techstack: 'VueJs, LocalStorage',
            github: 'https://github.com/Yuvraj883/Task-Manager', 
            live: 'https://github.com/Yuvraj883/Task-Manager'

        }
    ]
    return(
        <div className="flex flex-col my-16 ">
        <h1 className="text-4xl text-cneter m-auto p-4">Projects</h1>
{/* 
        <div className="flex flex-wrap w-4/5 p-auto m-auto  justify-center items-center">
            
        {
            projects.map((project, i)=> <Project props = {project} key={project.id} ></Project>)
        }
     
       
        </div> */}

        <div className="w-[60%] mx-auto relative md:flex hidden overflow-hidden justify-center align-center ">
            {/* <img src={projects[index].coverImg} alt="Project card"/> */}
            <SliderCard props = {projects[index-1<0?projects.length-1:index-1]} key = {projects[index-1<0?projects.length-1:index-1]} ></SliderCard>
            <SliderCard className="w-[125%] h-auto " props = {projects[index]} key = {projects[index].id} ></SliderCard>
            <SliderCard props = {projects[index+1>projects.length-1?0:index+1]} key = {projects[index+1>projects.length-1?0:index+1].id} ></SliderCard>

           <BsChevronCompactLeft onClick={prevCard} className="absolute top-[50%] left-5 text-3xl -translate-x-0 -translate-y-[50%] duration-500  cursor-pointer bg-black/20 text-white rounded-full " size={30} ></BsChevronCompactLeft>
            <BsChevronCompactRight onClick={nextCard}  className="absolute top-[50%] right-5 text-3xl  cursor-pointer bg-black/20 -translate-x-0 -translate-y-[50%] duration-500 text-white rounded-full " size={30} ></BsChevronCompactRight>
        </div>
{/* Mobile View */}
        <div className="md:hidden w-[80%] mx-auto relative flex overflow-hidden">
            {/* <img src={projects[index].coverImg} alt="Project card"/> */}
           
            <SliderCard props = {projects[index]}  ></SliderCard>
           
           <BsChevronCompactLeft onClick={prevCard} className="absolute top-[50%] left-5 text-3xl  -translate-x-0 -translate-y-[50%]  cursor-pointer bg-black/20 text-white rounded-full " size={30} ></BsChevronCompactLeft>
            <BsChevronCompactRight onClick={nextCard}  className="absolute top-[50%] right-5 text-3xl  -translate-x-0 -translate-y-[50%] cursor-pointer bg-black/20 text-white rounded-full " size={30} ></BsChevronCompactRight>
        </div>

        </div>
    )
}
export default Projects; 
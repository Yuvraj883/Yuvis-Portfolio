import { useState } from "react";
import Project from "./Project";
import SliderCard from "./SliderCard";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
function Projects(){
    
    const [index, setIndex] = useState(1);

    const prevCard = ()=>{
        const newIndex = index ===0? projects.length -1 : index-1; 
        setIndex(newIndex); 
    }

    const nextCard = ()=>{
        const newIndex = index === projects.length-1? 0 : index+1; 
        setIndex(newIndex); 
    }

    const projects = [
        {   id:1,
            coverImg:'../whiteBoard.jpeg',
            title: 'White Board',
            description:'It is a white board made using Canvas API, can be used for teaching students by drawing shapes and figures.',
            techstack: 'HTML, CSS, JS, Canva',
            github: 'https://github.com/Yuvraj883/LinkedInJsChallenge2', 
            live: 'https://yuvis-whiteboard.netlify.app/'

        },
        {   id:2,
            coverImg:'../WhiteBoard.jpeg',
            title: 'Black Board',
            description:'It is a white board made using Canvas API, can be used for teaching students by drawing shapes and figures.',
            techstack: 'HTML, CSS, JS, Canva',
            github: 'https://github.com/Yuvraj883/LinkedInJsChallenge2', 
            live: 'https://yuvis-whiteboard.netlify.app/'

        },
        {   id:3,
            coverImg:'../WhiteBoard.jpeg',
            title: 'Brown Board',
            description:'It is a white board made using Canvas API, can be used for teaching students by drawing shapes and figures.',
            techstack: 'HTML, CSS, JS, Canva',
            github: 'https://github.com/Yuvraj883/LinkedInJsChallenge2', 
            live: 'https://yuvis-whiteboard.netlify.app/'

        },
        {   id:1,
            coverImg:'../whiteBoard.jpeg',
            title: 'White Board',
            description:'It is a white board made using Canvas API, can be used for teaching students by drawing shapes and figures.',
            techstack: 'HTML, CSS, JS, Canva',
            github: 'https://github.com/Yuvraj883/LinkedInJsChallenge2', 
            live: 'https://yuvis-whiteboard.netlify.app/'

        },
        {   id:2,
            coverImg:'../WhiteBoard.jpeg',
            title: 'Black Board',
            description:'It is a white board made using Canvas API, can be used for teaching students by drawing shapes and figures.',
            techstack: 'HTML, CSS, JS, Canva',
            github: 'https://github.com/Yuvraj883/LinkedInJsChallenge2', 
            live: 'https://yuvis-whiteboard.netlify.app/'

        },
        {   id:3,
            coverImg:'../WhiteBoard.jpeg',
            title: 'Brown Board',
            description:'It is a white board made using Canvas API, can be used for teaching students by drawing shapes and figures.',
            techstack: 'HTML, CSS, JS, Canva',
            github: 'https://github.com/Yuvraj883/LinkedInJsChallenge2', 
            live: 'https://yuvis-whiteboard.netlify.app/'

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

        <div className="w-[60%] mx-auto relative flex overflow-hidden ">
            {/* <img src={projects[index].coverImg} alt="Project card"/> */}
            <SliderCard props = {projects[index-1<0?projects.length-1:index-1]} key = {projects[0].id} ></SliderCard>
            <SliderCard className="w-[125%] h-auto " props = {projects[index]} key = {projects[0].id} ></SliderCard>
            <SliderCard props = {projects[index+1>projects.length-1?0:index+1]} key = {projects[0].id} ></SliderCard>

           <BsChevronCompactLeft onClick={prevCard} className="absolute top-[50%] left-5 text-3xl -translate-x-0 -translate-y-[50%]  cursor-pointer bg-black/20 text-white rounded-full " size={30} ></BsChevronCompactLeft>
            <BsChevronCompactRight onClick={nextCard}  className="absolute top-[50%] right-5 text-3xl  cursor-pointer bg-black/20 text-white rounded-full " size={30} ></BsChevronCompactRight>
        </div>

        </div>
    )
}
export default Projects; 
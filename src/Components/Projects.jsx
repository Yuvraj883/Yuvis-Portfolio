import { useState } from "react";
// import Project from "./Project";
import { RxDotFilled } from 'react-icons/rx'
import SliderCard from "./SliderCard";
import projects from './ProjectsArray';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
function Projects() {

    const [index, setIndex] = useState(0);

    const prevCard = () => {
        const newIndex = index === 0 ? projects.length - 1 : index - 1;
        setIndex(newIndex);
        // console.log(index);
    }

    const nextCard = () => {
        const newIndex = index === projects.length - 1 ? 0 : index + 1;
        setIndex(newIndex);
        // console.log(index);

    }

    const goToSlide = (index)=>{
        setIndex(index);
    }

  
    return (
        <div className="flex flex-col my-16 ">
            <h1 className="text-4xl text-cneter m-auto p-4">Projects</h1>
            {/* 
        <div className="flex flex-wrap w-4/5 p-auto m-auto  justify-center items-center">
            
        {
            projects.map((project, i)=> <Project props = {project} key={project.id} ></Project>)
        }
     
       
        </div> */}

            <div className="mx-auto bg-white  p-6 shadow-lg md:block hidden group  cursor-pointer justify-center items-center w-[80%]">
                <div className="flex relative justify-center align-center p-6">
                    {/* <img src={projects[index].coverImg} alt="Project card"/> */}
                    <SliderCard centerCard='false' props={projects[index - 1 < 0 ? projects.length - 1 : index - 1]} key={projects[index - 1 < 0 ? projects.length - 1 : index - 1]} ></SliderCard>
                    <SliderCard centerCard='true' props={projects[index]} key={projects[index].id} ></SliderCard>
                    <SliderCard centerCard= 'false' props={projects[index + 1 > projects.length - 1 ? 0 : index + 1]} key={projects[index + 1 > projects.length - 1 ? 0 : index + 1].id} ></SliderCard>

                    <BsChevronCompactLeft onClick={prevCard} className="absolute hidden group-hover:block top-[50%] left-5 text-3xl -translate-x-0 -translate-y-[50%] duration-500  cursor-pointer bg-black/20 text-white rounded-full " size={30} ></BsChevronCompactLeft>
                    <BsChevronCompactRight onClick={nextCard} className="absolute hidden group-hover:block top-[50%] right-5 text-3xl  cursor-pointer bg-black/20 -translate-x-0 -translate-y-[50%] duration-500 text-white rounded-full " size={30} ></BsChevronCompactRight>


                </div>
                <div className="flex flex-row justify-center items-center mt-4 text-black/20">
                    {

                        projects.map((project,i) => (
                          
                            <RxDotFilled className={i===index?"text-black":''} key={i} onClick={()=>{goToSlide(i)}}></RxDotFilled>
                        ))
                    }
                </div>

            </div>
            {/* Mobile View */}
            <div className="md:hidden w-[80%] mx-auto  bg-white shadow-lg p-8 block overflow-auto">
                {/* <img src={projects[index].coverImg} alt="Project card"/> */}
                <div className="relative flex">

                <SliderCard props={projects[index]}  ></SliderCard>

                <BsChevronCompactLeft onClick={prevCard} className="absolute top-[50%] left-1 text-3xl  -translate-x-0 -translate-y-[50%]  cursor-pointer bg-black/20 text-white rounded-full " size={30} ></BsChevronCompactLeft>
                <BsChevronCompactRight onClick={nextCard} className="absolute top-[50%] right-1 text-3xl  -translate-x-0 -translate-y-[50%] cursor-pointer bg-black/20 text-white rounded-full " size={30} ></BsChevronCompactRight>
              </div>
              <div className="flex flex-row justify-center items-center mt-4 text-black/20 ">
                    {

                        projects.map((project, i) => (

                            <RxDotFilled className={i===index?"text-black":""} key={i} onClick={()=>{goToSlide(i)}}></RxDotFilled>
                            

                        ))
                    }
                </div>

            </div>

        </div>
    )
}
export default Projects; 
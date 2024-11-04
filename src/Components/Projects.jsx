import React, { useState } from "react";
import { RxDotFilled } from 'react-icons/rx';
import SliderCard from "./SliderCard";
import projects from './ProjectsArray';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function Projects() {
    const [index, setIndex] = useState(0);
    const numProjects = projects.length;

    const prevIndex = (index - 1 + numProjects) % numProjects;
    const nextIndex = (index + 1) % numProjects;

    const goToSlide = (index) => {
        setIndex(index);
    }

    const handlePrevNext = (increment) => {
        setIndex((index + increment + numProjects) % numProjects);
    }

    return (
        <div className="flex flex-col my-16">
            <h1 className="text-4xl text-center m-auto p-4">Projects</h1>
            <div className="mx-auto bg-white p-6 shadow-lg md:block hidden group cursor-pointer justify-center items-center w-[80%]">
                <div className="flex relative justify-center align-center p-6">
                    {[prevIndex, index, nextIndex].map((i, idx) => (
                        <SliderCard
                            key={projects[i].id}
                            props={projects[i]}
                            centerCard={i === index ? 'true' : 'false'}
                            className={`transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0'}`} // Apply opacity transition
                        />
                    ))}
                    <BsChevronCompactLeft
                        onClick={() => handlePrevNext(-1)}
                        className="absolute hidden group-hover:block top-[50%] left-5 text-3xl -translate-x-0 -translate-y-[50%] duration-500  cursor-pointer bg-black/20 text-white rounded-full"
                        size={30}
                    />
                    <BsChevronCompactRight
                        onClick={() => handlePrevNext(1)}
                        className="absolute hidden group-hover:block top-[50%] right-5 text-3xl cursor-pointer bg-black/20 -translate-x-0 -translate-y-[50%] duration-500 text-white rounded-full"
                        size={30}
                    />
                </div>
                <div className="flex flex-row justify-center items-center mt-4 text-black/20">
                    {projects.map((project, i) => (
                        <RxDotFilled
                            key={i}
                            className={i === index ? "text-black" : ''}
                            onClick={() => goToSlide(i)}
                        />
                    ))}
                </div>
                    <div className="flex justify-center mt-4">
                    <button className="bg-black text-white px-4 py-2 rounded-r-full rounded-l-full text-lg "><a href="https://github.com/Yuvraj883?tab=repositories"> See All Projects</a></button>

                    </div>
            </div>
            {/* Mobile View */}
            <div className="md:hidden w-[80%] mx-auto bg-white shadow-lg p-8 block overflow-auto">
                <div className="relative flex">
                    <SliderCard props={projects[index]} centerCard='true' className="transition-opacity duration-500 opacity-100" />
                    <BsChevronCompactLeft
                        onClick={() => handlePrevNext(-1)}
                        className="absolute top-[50%] left-1 text-3xl -translate-x-0 -translate-y-[50%] cursor-pointer bg-black/20 text-white rounded-full"
                        size={30}
                    />
                    <BsChevronCompactRight
                        onClick={() => handlePrevNext(1)}
                        className="absolute top-[50%] right-1 text-3xl -translate-x-0 -translate-y-[50%] cursor-pointer bg-black/20 text-white rounded-full"
                        size={30}
                    />
                </div>
                <div className="flex flex-row justify-center items-center mt-4 text-black/20">
                    {projects.map((project, i) => (
                        <RxDotFilled
                            key={i}
                            className={i === index ? "text-black" : ''}
                            onClick={() => goToSlide(i)}
                        />
                    ))}
                </div>
                <div className="flex justify-center mt-4">
                    <button className="bg-black text-white px-4 py-2 rounded-r-full rounded-l-full text-lg "><a href="https://github.com/Yuvraj883?tab=repositories"> See All Projects</a></button>

                    </div>
            </div>

        </div>
    )
}

export default Projects;

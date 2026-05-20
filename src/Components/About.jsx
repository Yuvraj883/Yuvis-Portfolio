function About() {
    return (
        <>
            <div className="md:flex hidden flex-col align-middle w-3/5 h-auto m-auto p-12 shadow-lg bg-white my-16">
                <div className="flex">
                    <div className="flex-1 p-4 py-16 ">
                        <img src={require('../assets/web-development.webp')} alt="about-img"
                            className="shadow-md"
                        />

                    </div>
                    <div className="flex-1 p-4">
                        <h3 className="text-blue-500 font-semibold">About Me</h3>
                        <h1 className="font-extrabold text-lg">A dedicated Backend & AI Engineer based in New Delhi, India</h1>
                        <p>
                            I have completed my Bachelors of Technology in Information Technology
                            from Maharaja Surajmal Institute of Technology, New Delhi. As a Backend & AI Engineer, I have a strong
                            arsenal of skills in Python, Node.js, FastAPI, and GenAI technologies like LangChain and n8n. <br />
                            I specialize in building scalable microservices, distributed systems, and agentic RAG-based AI applications.
                        </p>
                    </div>
                </div>
                <a href={require("../assets/Yuvraj-Singh-Resume.pdf")} className=" w-4/5" download="Yuvraj Singh's Resume"><button className="bg-black text-white font-bold text-lg m-auto p-6 w-3/5 rounded-md  ">Download Resume</button></a>

            </div>

            {/* mobile view */}
            <div className='md:hidden bg-white rounded-md shadow-md w-4/5 m-auto p-4'>
                <div className="flex flex-col">
                    <div className="flex-1 px-4 py-8">
                        <img src={require('../assets/web-development.webp')} alt="about-img"
                            className="shadow-md"
                        />

                    </div>
                    <div className="flex-1 p-4">
                        <h3 className="text-blue-500 font-semibold">About Me</h3>
                        <h1 className="font-extrabold text-lg ">A dedicated Backend & AI Engineer based in New Delhi, India</h1>
                        <p className='p-2'>
                            I have completed my Bachelors of Technology in Information Technology
                            from Maharaja Surajmal Institute of Technology, New Delhi. I specialize in building scalable microservices,
                            distributed systems, and agentic RAG-based AI applications using Python, Node.js, and FastAPI.
                        </p>

                        <a href={require("../assets/Yuvraj-Singh-Resume.pdf")} className="flex justify-center items-center mt-4" download="Yuvraj Singh's Resume"><button className="bg-black text-white font-bold text-lg m-auto px-6 rounded-md py-2 w-4/5  ">Download Resume</button></a>

                    </div>
                </div>

            </div>
        </>
    )
}
export default About;

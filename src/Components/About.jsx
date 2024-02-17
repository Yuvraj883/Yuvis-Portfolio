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
                        <h1 className="font-extrabold text-lg">A dedicated Front-End Developer based in New Delhi, India</h1>
                        <p>
                            I am currently pursuing degree in Bachelors of Technology, in the field of Information and Technology,
                            from Maharaja Surajmal Institute of Technology, New Delhi, India. As a front end developer I have a impressive
                            arsenal of skills in HTML, CSS, Javascript, ReactJS and TailwindCSS. <br />
                            I have also worked with VueJS and AngularJS and am familiar with NodeJs/ExpressJS and MongoDB.

                        </p>
                    </div>
                </div>
                <a href={require("../assets/Yuvraj-resume.pdf")} className=" w-4/5" download="Yuvraj Singh's Resume"><button className="bg-black text-white font-bold text-lg m-auto p-6 w-3/5 rounded-md  ">Download Resume</button></a>

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
                        <h1 className="font-extrabold text-lg ">A dedicated Front-End Developer based in New Delhi, India</h1>
                        <p className='p-2'>
                            I am currently pursuing degree in Bachelors of Technology, in the field of Information and Technology,
                            from Maharaja Surajmal Institute of Technology, New Delhi, India. As a front end developer I have a impressive
                            arsenal of skills in HTML, CSS, Javascript, ReactJS and TailwindCSS. <br />
                            I have also worked with VueJS and AngularJS and am familiar with NodeJs/ExpressJS and MongoDB.

                        </p>

                        <a href={require("../assets/Yuvraj-resume.pdf")} className="flex justify-center items-center mt-4" download="Yuvraj Singh's Resume"><button className="bg-black text-white font-bold text-lg m-auto px-6 rounded-md py-2 w-4/5  ">Download Resume</button></a>

                    </div>
                </div>

            </div>
        </>
    )
}
export default About; 
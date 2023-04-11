function About(){
    return(
        <>
        <div className="flex flex-col align-middle w-3/5 h-auto m-auto p-12 shadow-lg ">
        <div className="flex">
            <div className="flex-1 p-4 py-16">
                <img src = "https://showmecourses.com/wp-content/uploads/2021/10/web-development.webp" alt="about-img"
                className=""
                />

            </div>
            <div className="flex-1 p-4">
                <h3 className="text-blue-500 font-semibold">About Me</h3>
                <h1 className="font-extrabold text-lg">A dedicated Front-End Developer based in New Delhi, India</h1>
                <p>
                    I am currently pursuing degree in Bachelors of Technology, in the field of Information and Technology,
                    from Maharaja Surajmal Institute of Technology, New Delhi, India. As a front end developer I have a impressive
                    arsenal of skills in HTML, CSS, Javascript, ReactJS and TailwindCSS. <br/>
                    I have also worked with VueJS and AngularJS and am familiar with NodeJs/ExpressJS and MongoDB. 

                </p>
            </div>
        </div>
        <a href={require("https://drive.google.com/file/d/1lRurAlaYeltvg2Mc9nB_i_RzKCCQ3Gjj/view?usp=share_link")} className=" w-4/5" download="Yuvraj Singh's Resume"><button className="bg-black text-white font-bold text-lg m-auto p-6 w-3/5  ">Download Resume</button></a>
       
        </div> 
        </>
    )
}
export default About; 
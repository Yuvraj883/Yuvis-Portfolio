import Project from "./Project";
function Projects(){
    const projects = [
        {   id:1,
            title: 'White Board',
            description:'It is a white board made using Canvas API, can be used for teaching students by drawing shapes and figures.',
            techstack: 'HTML, CSS, JS, Canva',
            github: 'https://github.com/Yuvraj883/LinkedInJsChallenge2', 
            live: 'https://yuvis-whiteboard.netlify.app/'

        }
    ]
    return(
        <div className="flex flex-col my-16 ">
        <h1 className="text-4xl text-cneter m-auto p-4">Projects</h1>

        <div className="flex flex-wrap w-4/5 p-auto m-auto  justify-center items-center">
            
        {
            projects.map((project, i)=> <Project props = {project} key={project.id} ></Project>)
        }
     
       
        </div>

        </div>
    )
}
export default Projects; 
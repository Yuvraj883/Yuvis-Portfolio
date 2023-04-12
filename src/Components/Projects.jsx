import Project from "./Project";
function Projects(){
    return(
        <div className="flex flex-col my-16 ">
        <h1 className="text-4xl text-cneter m-auto p-4">Projects</h1>

        <div className="flex flex-wrap w-4/5 p-auto m-auto  justify-center items-center">

        <Project className=""></Project>
        <Project className=""></Project>
        <Project className=""></Project>
        <Project className=""></Project>
        <Project className=""></Project>
        <Project className=""></Project>
       
        </div>

        </div>
    )
}
export default Projects; 
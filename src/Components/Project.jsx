import {BsGithub} from 'react-icons/bs'; 
import {RiExternalLinkFill} from 'react-icons/ri'
function Project(){
    return (
        <>
        <card className="flex flex-col w-1/4 m-3 shadow-md rounded-md p-4 bg-white">
            <img src={require('../assets/WhiteBoard.jpeg')} alt="Project Name"
            className="h-48 w-auto"/>
            <h1 className='font-semibold text-xl'>White Board</h1>
            <p>
                <b>Description: </b>This is a whiteboard which can be used for teaching students, by drawing the shapes provided in it. 
            </p>
            <p className='p-1'>
                <b>Tech Stack: </b> HTML, CSS, JS, Canva
            </p>
        <div className='flex '>
            <a href="https://github.com/Yuvraj883/LinkedInJsChallenge2" 
            className='p-1 hover:text-blue-700 font-semibold text-md '>Code <BsGithub className='inline' /> </a>
            <a href="https://github.com/Yuvraj883/LinkedInJsChallenge2"
             className="p-1 hover:text-blue-700 font-semibold text-md ">Live Demo <RiExternalLinkFill className='inline'/> </a>

        </div>

        </card>
        
        </>
    )
}
export default Project; 
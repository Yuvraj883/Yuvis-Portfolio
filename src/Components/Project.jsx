import { BsGithub } from 'react-icons/bs';
import { RiExternalLinkFill } from 'react-icons/ri'
function Project(props) {


    return (
        <>
            <div className="md:flex hidden flex-col w-1/4 m-3 shadow-md rounded-md p-4 bg-white">
                <img src={props.props.coverImg} alt="Project Cover Img"
                    className="h-48 w-auto" />
                <h1 className='font-semibold text-xl'>{props.props.title}</h1>
                <p>
                    <b>Description: </b> {props.props.description}
                </p>
                <p className='p-1'>
                    <b>Tech Stack: </b> {props.props.techstack}
                </p>
                <div className='flex '>
                    <a href={props.props.github}
                        className='p-1 hover:text-blue-700 font-semibold text-md '
                        target='blank'>Code <BsGithub className='inline' /> </a>

                    <a href={props.props.live}
                        target='blank'
                        className="p-1 hover:text-blue-700 font-semibold text-md ">Live Demo <RiExternalLinkFill className='inline' /> </a>

                </div>

            </div>

            <div className="md:hidden flex flex-col w-[50%] m-2 shadow-md rounded-md p-2 bg-white">
                <img src={props.props.coverImg} alt="Project Name"
                    className="h-48 w-auto" />
                <h1 className='font-semibold text-xl'>{props.props.title}</h1>
                <p>
                    <b>Description: </b> {props.props.description}
                </p>
                <p className='p-1'>
                    <b>Tech Stack: </b> {props.props.techstack}
                </p>
                <div className='flex '>
                    <a href={props.props.github}
                        className='p-1 hover:text-blue-700 font-semibold text-md '
                        target='blank'>Code <BsGithub className='inline' /> </a>

                    <a href={props.props.live}
                        target='blank'
                        className="p-1 hover:text-blue-700 font-semibold text-md ">Live Demo <RiExternalLinkFill className='inline' /> </a>

                </div>

            </div>

        </>
    )
}
export default Project; 
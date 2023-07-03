import { BsGithub } from 'react-icons/bs';
import { RiExternalLinkFill } from 'react-icons/ri'
function SliderCard(props, centerCard) {
// console.log(props.centerCard);

    return (
        <>
            <div className={props.centerCard==='true'?"md:flex hidden flex-col  w-auto  m-4  shadow-2xl rounded-md p-4 bg-white" : "md:flex hidden flex-col w-[1/4] m-4 shadow-md rounded-md p-4 bg-white"}>
                <div className='h-48 w-96  p-1 mx-auto'>  <img src={props?.props?.coverImg} alt="Project Cover Img"
                    className=" object-fit " />
                </div>
                <h1 className='font-semibold text-xl text-gray-700'>{props?.props?.title}</h1>
                <p className={props.centerCard==='true'?'text-gray-600':'line-clamp-2 text-gray-600'}>
                    <b>Description: </b> {props?.props?.description}
                </p>
                <p className='p-1 text-gray-500'>
                    <b className='text-gray-600'>Tech Stack: </b> {props?.props?.techstack}
                </p>
                <div className='flex '>
                    <a href={props?.props?.github}
                        className='p-1 hover:text-blue-700 text-gray-600 font-semibold text-md '
                        target='blank'>Code <BsGithub className='inline' /> </a>

                    <a href={props?.props?.live}
                        target='blank'
                        className="p-1 hover:text-blue-700 font-semibold text-md  text-gray-600">Live Demo <RiExternalLinkFill className='inline' /> </a>

                </div>

            </div>
            {/* Mobile view */}
            <div className="md:hidden m-auto flex flex-col w-[90%]  shadow-md rounded-md p-2 bg-white">
                <img src={props?.props?.coverImg} alt="Project Name"
                    className="h-48 w-auto" />
                <h1 className='font-semibold text-xl  text-gray-700'>{props.props.title}</h1>
                <p className='line-clamp-2 text-gray-600'>
                    <b >Description: </b> {props?.props?.description}
                </p>
                <p className='p-1 text-gray-500'>
                    <b className='text-gray-600'>Tech Stack: </b> {props?.props?.techstack}
                </p>
                <div className='flex '>
                    <a href={props?.props?.github}
                        className='p-1 hover:text-blue-700 font-semibold text-md '
                        target='blank'>Code <BsGithub className='inline' /> </a>

                    <a href={props?.props?.live}
                        target='blank'
                        className="p-1 hover:text-blue-700 font-semibold text-md ">Live Demo <RiExternalLinkFill className='inline' /> </a>

                </div>

            </div>

        </>
    )
}
export default SliderCard; 
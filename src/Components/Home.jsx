import { IoPinSharp } from 'react-icons/io5';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import TechStacks from './TechStacks';
import { Typewriter } from 'react-simple-typewriter'

function Home() {

    return (
        <>
            <div className="h-auto w-auto md:flex flex-col pt-20 hidden  ">
                <div className="flex mx-auto w-[50%] justify-around mb-8 ">

                    <div className='py-16 w-[65%] pr-4'>
                        <div>
                            <h3 className='text-xl font-semibold inline mt-4'>Hi <span className='inline text-xl'>&#128075;</span>	</h3>
                        </div>
                        <h1 className='inline text-lg font-semibold'>I am &nbsp; </h1>
                        <span className='text-[#E5BA73] font-extrabold text-4xl h-16 mb-8 '>
                            <Typewriter
                                words={[" a Front-End Developer", ' a Back-End Developer', ' a Full Stack Developer', ' Yuvraj Singh!!!']}
                                loop={99999}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            /></span>
                        <p className="py-8 px-2 inline"><br />
                            based in <b>New Delhi, India</b><IoPinSharp className='text-red-700 inline font-bold' />.


                        </p>
                        <p className='flex my-2 '>
                            <a href="https://www.linkedin.com/in/yuvraj-singh-2942781a3/" className='inline p-1 text-3xl'><FaLinkedin /></a>
                            <a href="https://github.com/Yuvraj883" className='inline p-1 text-3xl'><FaGithubSquare /> </a>
                        </p>
                    </div>
                    <div>
                        <img src={require('../assets/image3.jpeg')}
                            className="h-64 w-auto rounded-full" alt="Yuvraj Singh" />
                    </div>

                </div>


                {/* <TechStacks className="md:block hidden" /> */}


            </div>
            {/* Mobile view  */}
            <div className='md:hidden flex flex-col jutify-center items-center p-4 m-4'>
                <div>
                    <img src={require('../assets/image3.jpeg')}
                        className="h-64 w-auto rounded-full" alt="Yuvraj Singh" />
                </div>
                <div className='py-8 w-[65%] pr-4'>
                    <div>
                        <h3 className='text-xl font-semibold inline mt-4'>Hi <span className='inline text-xl'>&#128075;</span>	</h3>
                    </div>
                    <h1 className='inline text-lg font-semibold'>I am &nbsp; </h1>
                    <span className='text-[#E5BA73] font-extrabold text-4xl h-16 mb-8 '>
                        <Typewriter
                            words={[" a Front-End Developer", ' a Back-End Developer', ' a Full Stack Developer', ' Yuvraj Singh!!!']}
                            loop={1}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /></span>
                    <p className="py-8 px-2 inline"><br />
                        based in <b>New Delhi, India</b><IoPinSharp className='text-red-700 inline font-bold' />.


                    </p>
                    <p className='flex my-2 '>
                        <a href="https://www.linkedin.com/in/yuvraj-singh-2942781a3/" className='inline p-1 text-3xl'><FaLinkedin /></a>
                        <a href="https://github.com/Yuvraj883" className='inline p-1 text-3xl'><FaGithubSquare /> </a>
                    </p>
                </div>

            </div>

            <TechStacks className="md:hidden block" />
        

        </>
    )
}
export default Home; 
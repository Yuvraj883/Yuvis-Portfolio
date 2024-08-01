import React from 'react';
import { IoPinSharp } from 'react-icons/io5';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import { Typewriter } from 'react-simple-typewriter';
import TechStacks from './TechStacks';

function Home() {
  // Define animations using react-spring
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const slideIn = useSpring({
    transform: 'translateX(0%)',
    from: { transform: 'translateX(-100%)' },
    config: { duration: 1000 },
  });

  return (
    <>
      {/* Desktop view */}
      <div className="h-auto w-auto md:flex flex-col pt-20 hidden">
        <animated.div className="flex mx-auto w-[50%] justify-between mb-8" style={fadeIn}>
          <div className='py-16 w-[65%] pr-4'>
            <div>
              <h3 className='text-xl font-semibold inline mt-4'>Hello<img className='inline h-[2.75rem] pb-2' src="../images/waving-hand..gif" alt="waving hand"/> </h3>
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
              />
            </span>
            <p className="py-8 px-2 inline"><br />
              based in <b>New Delhi, India</b><IoPinSharp className='text-red-700 inline font-bold' />.
            </p>
            <p className='flex my-2 '>
              <a href="https://www.linkedin.com/in/yuvraj-singh-2942781a3/" className='inline p-1 text-3xl'><FaLinkedin /></a>
              <a href="https://github.com/Yuvraj883" className='inline p-1 text-3xl'><FaGithubSquare /> </a>
            </p>
          </div>
          <animated.div style={slideIn}>
            <img src="../images/Yuvraj13.jpeg" className="h-64 w-64 rounded-full" alt="Yuvraj Singh" />
          </animated.div>
        </animated.div>
      </div>

      {/* Mobile view */}
      <div className='md:hidden flex flex-col jutify-center items-center p-4 m-4'>
        <animated.div style={slideIn}>
          <img src="../images/Yuvraj13.jpeg" className="h-64 w-64 rounded-full" alt="Yuvraj Singh" />
        </animated.div>
        <animated.div className='py-8 w-[65%] pr-4' style={fadeIn}>
          <div>
            <h3 className='text-xl font-semibold inline mt-4'>Hello <img className='inline h-[2.75rem] pb-2' src="../images/waving-hand..gif" alt="waving hand"/> </h3>
          </div>
          <h1 className='inline text-lg font-semibold'>I am &nbsp; </h1>
          <span className='text-[#E5BA73] font-extrabold text-3xl h-16 mb-8 '>
            <Typewriter
              words={[" a Front-End Developer", ' a Back-End Developer', ' a Full Stack Developer', ' Yuvraj Singh!!!']}
              loop={1}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <p className="pt-8 pb-6 mb-0 mt-4 px-1 inline"><br />
            based in <b>New Delhi, India</b><IoPinSharp className='text-red-700 inline font-bold' />.
          </p>
          <p className='flex my-0 '>
            <a href="https://www.linkedin.com/in/yuvraj-singh-2942781a3/" className='inline p-1 text-3xl'><FaLinkedin /></a>
            <a href="https://github.com/Yuvraj883" className='inline p-1 text-3xl'><FaGithubSquare /> </a>
          </p>
        </animated.div>
      </div>

      <TechStacks className="md:hidden block" />
    </>
  )
}

export default Home;

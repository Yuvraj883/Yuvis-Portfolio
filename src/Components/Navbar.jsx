import { GiCrownOfThorns } from 'react-icons/gi';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useSpring, animated } from 'react-spring';

function Navbar() {
  const [nav, setNav] = useState(true);
  const [rotateCounter, setRotateCounter] = useState(0);

  const handleSetNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setRotateCounter((prevCounter) => prevCounter + 1);
    }, 7000);

    return () => clearInterval(rotateInterval);
  }, []);

  const fadeIn = useSpring({
    opacity: nav ? 1 : 0,
    transform: nav ? 'translateY(0)' : 'translateY(-20px)',
    config: { duration: 300 },
  });

  const rotateIcon = useSpring({
    to: { transform: `rotate(${rotateCounter * 360}deg) scale(1.2)` },
    from: { transform: `rotate(${rotateCounter * 360}deg) scale(1)` },
    config: { duration: 500 }, // Adjust the duration as needed
  });

  return (
    <>
      <nav className="md:flex justify-between text-red-950 fixed w-screen hidden drop-blur bg-white z-10">
        <animated.span style={rotateIcon} className="m-2 p-2 font-extrabold font-serif text-xl text-[#E5BA73]">
          <GiCrownOfThorns className="inline text-3xl" /> Dev-Yuvi
        </animated.span>
        <ul className="flex px-4 font-bold cursor-pointer">
          <Link smooth={true} duration={300} to="home" className="m-2 p-2">
            Home
          </Link>
          <Link smooth={true} duration={300} to="about" className="m-2 p-2">
            About Me
          </Link>
          <Link smooth={true} duration={300} to="projects" className="m-2 p-2">
            Projects
          </Link>
          <Link smooth={true} duration={300} to="experience" className="m-2 p-2">
            Experience
          </Link>
          <Link smooth={true} duration={300} to="contact" className="m-2 p-2">
            Contact
          </Link>
        </ul>
      </nav>

      {/* Mobile View */}
      <div className="flex justify-between items-center cursor-pointer pr-2 md:hidden" onClick={handleSetNav}>
        <animated.span style={rotateIcon} className="m-2 p-2 font-extrabold font-serif text-xl text-[#E5BA73]">
          <GiCrownOfThorns className="inline text-3xl" /> Dev-Yuvi
        </animated.span>
        <div>
          {nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose className="top-5 right-2 fixed" size={20} />}
        </div>
      </div>

      {/* Animated mobile navigation */}
      <animated.div
        style={{
          ...fadeIn,
          position: 'fixed',
          width: '60%',
          height: '100%',
          backgroundColor: '#000',
          color: '#fff',
          padding: '1rem',
          top: 0,
          left: nav ? '100%' : 0,
          zIndex: 10,
        }}
      >
        <animated.span style={rotateIcon} className="m-2 p-2 font-extrabold font-serif text-xl text-[#E5BA73]">
          <GiCrownOfThorns className="inline text-3xl" /> Dev-Yuvi
        </animated.span>

        <animated.ul
          style={{
            ...fadeIn,
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 'auto',
            paddingLeft: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          <Link to="home" smooth={true} duration={300} className="m-2 border-b border-[#ebca95] p-2">
            Home
          </Link>
          <Link to="about" smooth={true} duration={300} className="m-2 border-b border-[#ebca95] p-2">
            About Me
          </Link>
          <Link to="projects" smooth={true} duration={300} className="m-2 border-b border-[#ebca95] p-2">
            Projects
          </Link>
          <Link to="experience" smooth={true} duration={300} className="m-2 border-b border-[#ebca95] p-2">
            Experience
          </Link>
          <Link to="contact" smooth={true} duration={300} className="m-2 p-2">
            Contact
          </Link>
        </animated.ul>
      </animated.div>
    </>
  );
}

export default Navbar;

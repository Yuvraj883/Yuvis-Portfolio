// import {GiCrownOfThorns} from 'react-icon/gi'; 
import { GiCrownOfThorns } from 'react-icons/gi'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import {Link } from 'react-scroll';

function Navbar() {
    const [nav, setNav] = useState(true);

    const handleSetNav = () => {
        setNav(!nav);
    }

    return (
        <>
            <nav className="md:flex justify-between text-red-950  fixed w-screen hidden ">
                <span className="m-2 p-2 font-extrabold font-serif text-xl text-[#E5BA73]"><GiCrownOfThorns className="inline text-3xl" /> Dev-Yuvi</span>
                <ul className="flex px-4 font-bold cursor-pointer">
                    <Link to="home" className="m-2 p-2">Home</Link>
                    <Link to="about" className="m-2 p-2">About Me</Link>
                    <Link to="projects" className="m-2 p-2">Projects</Link>
                    <Link  className="m-2 p-2">Blogs</Link>
                    <Link to="contact" className="m-2 p-2">Contact</Link>
                </ul>

            </nav>

            {/* Mobile View */}
            <div className='flex justify-between items-center cursor-pointer  pr-2 md:hidden' onClick={handleSetNav}>
                <span className="m-2 p-2 font-extrabold font-serif  text-xl text-[#E5BA73]"><GiCrownOfThorns className="inline  text-3xl" /> Dev-Yuvi</span>
                <div>
                    {
                        nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />
                    }
                </div>

            </div>
            <div className={!nav ? 'top-0 left-0 w-[60%] h-full fixed bg-black text-white z-10 p-4 ease-in-out duration-500' : 'fixed w-[60%] h-full p-4 top-0 left-[-100%] ease-in-out duration-500'}>
                <span className="m-2 p-2 font-extrabold font-serif text-xl text-[#E5BA73]"><GiCrownOfThorns className="inline text-3xl" /> Dev-Yuvi</span>

                <ul className="flex flex-col ml-auto px-4 font-bold cursor-pointer">
                    <li className="m-2 border-b border-[#ebca95] p-2">Home</li>
                    <li className="m-2 border-b border-[#ebca95] p-2">About Me</li>
                    <li className="m-2 border-b border-[#ebca95] p-2">Projects</li>
                    <li className="m-2 border-b border-[#ebca95] p-2">Blogs</li>
                    <li className="m-2 p-2">Contact</li>
                </ul>
            </div>

        </>
    )
}
export default Navbar; 
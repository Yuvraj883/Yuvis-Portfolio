function Navbar(){
    return(
        <>
        <nav className="flex text-red-950 ">
            <span className="m-2 p-2 font-bold font-serif text-xl">Dev-Yuvi</span>
            <ul className="flex ml-auto px-4 font-bold cursor-pointer">
                <li className="m-2 p-2">Home</li>
                <li className="m-2 p-2">About Me</li>
                <li className="m-2 p-2">Projects</li>
                <li className="m-2 p-2">Blogs</li>
                <li className="m-2 p-2">Contact</li>
            </ul>
        </nav>
        </>
    )
}
export default Navbar; 
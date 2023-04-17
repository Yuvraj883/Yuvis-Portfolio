import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
// import TechStacks from './Components/TechStacks';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App(){
  return(
    <>
    <div className="bg-[#f4f4f5]">
   <Navbar></Navbar>
   <Home className='my-32'></Home>
   <About></About>
   <Projects></Projects>
   {/* <TechStacks/> */}
   <Contact></Contact>


    </div>
    </>
  )
}
export default App;
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
// import TechStacks from './Components/TechStacks';
import Projects from './Components/Projects';

function App(){
  return(
    <>
    <div className="bg-[#f4f4f5]">
   <Navbar></Navbar>
   <Home></Home>
   <About></About>
   <Projects></Projects>
   {/* <TechStacks/> */}


    </div>
    </>
  )
}
export default App;
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
// import TechStacks from './Components/TechStacks';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { Element } from 'react-scroll';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import {Switch} from 'react-router';

function App() {
  return (
    <>
      <div className="bg-[#f4f4f5] overflow-hidden">
        <Navbar></Navbar>
        <Element name="home">
          <Home></Home>
        </Element>
        <Element name="about">
          <About></About>
        </Element>
        <Element name="projects">
          <Projects></Projects>
        </Element>
        <Element name="contact">
          <Contact></Contact>
        </Element>
      </div>


      {/* <BrowserRouter>
        <div className="bg-[#f4f4f5] overflow-hidden">
        <Navbar></Navbar>
          <Routes>
            <Route path="/#home" element={<Home></Home> }>

            </Route>
            <Route path="#about" element={<About></About>}>
            </Route>
            <Route path='#projects' element={<Projects></Projects>}>

            </Route>
            <Route path='#contact' element={<Contact></Contact>}>

            </Route>
          </Routes>
      </div>

        </BrowserRouter> */}


      {/* <TechStacks/> */}


    </>
  )
}
export default App;
import "./App.css";
import 'animate.css';
import WOW from 'wowjs';
import Nav from "./comphonents/Nav";
import Home from "./comphonents/Home";
import About from "./comphonents/About";
import Skills from "./comphonents/Skills";
import Project from "./comphonents/Project";
import Contact from "./comphonents/Contact";
import Footer from "./comphonents/Footer";
import { useEffect } from "react";


function App() {

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, []);

  return (
    <div className="">
      <Nav />
      <div className="md:mt-[45px] mt-[65px] mb-5 h-full max-w-[1200px] mx-auto min-h-screen">
        <div id="HOME" className="md:mb-[150px] mb-[30px]">
          <Home />
        </div>

        <div id="ABOUT" className="md:mb-[150px] mb-[30px]">
          <About />
        </div>

        <div id="SKILLS" className="md:mb-[150px] mb-[30px]">
          <Skills/>
        </div>

        <div id="PROJECTS" className="md:mb-[150px] mb-[30px]">
          <Project/>
        </div>

        <div id="CONTACT">
          <Contact/>
        </div>
      </div>
      
      <Footer />

    </div>
  );
}

export default App;

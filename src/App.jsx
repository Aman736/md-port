import "./App.css";
import Nav from "./comphonents/Nav";
import Home from "./comphonents/Home";
import About from "./comphonents/About";
import Skills from "./comphonents/Skills";
import Project from "./comphonents/Project";
import Contact from "./comphonents/Contact";
import Footer from "./comphonents/Footer";


function App() {
  return (
    <div>
      <Nav />
      <div className="mt-[60px] mb-5 ">
        <div>
          <Home />
        </div>

        <div>
          <About />
        </div>

        <div>
          <Skills/>
        </div>

        <div>
          <Project/>
        </div>

        <div>
          <Contact/>
        </div>
      </div>
      
      <Footer />

    </div>
  );
}

export default App;

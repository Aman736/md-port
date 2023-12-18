import React from "react";
import { projects } from "./projectData";

const Project = () => {
  return (
    <div id="projects" className="w-full">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className=" w-full flex justify-center items-center flex-col mb-7">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-center ">
            Projects
          </p>
          <p className="py-4 md:text-2xl texl-lg">
          I thrive on delving into the intricacies of new projects and expanding my knowledge base. 
          Here's a glimpse into the technologies I've proficiently engaged with in various projects.
          </p>
        </div>

        <div className="flex flex-wrap">
          {
            projects.map((project) => (
                <a href={project.link} key={project.image} className="md:w-1/2 w-100 p-4" target='_blank' rel='noopener noreferrer'>
                <div className="flex relative md:h-80 wow animate__animated animate__flip overflow-hidden">
                    
                    <img key={project.image} alt="gallery"
                    className="absolute inset-0 w-full h-full object-fill"
                    src={project.image}/>

                    <div className="px-8 py-10 relative z-10 w-full border-2 hover:border-gray-400 bg-green-100 rounded-xl md:opacity-0 hover:opacity-100 opacity-100 transition-opacity duration-200">
                        <h1 key={project.title} className="title-font md:text-2xl font-medium  mb-3">
                            {project.title}
                        </h1>

                        <h2 key={project.subtitle} className="tracking-widest md:text-sm text-xs title-font font-medium text-green-600 mb-1 -mt-2">
                            {project.subtitle}
                        </h2>
                        <br/>
                        <p key={project.description} className="leading-relaxed md:text-lg text-xs">{project.description}</p>
                    </div>
                </div>
                </a>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Project;

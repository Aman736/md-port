import React from "react";

const Skills = () => {
  let skills = [
    { name: "C/C++" },
    { name: "Python" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Tailwind CSS" },
    { name: "BootStrap" },
    { name: "JavaScript" },
    { name: "Nodejs" },
    { name: "Reactjs" },
    { name: "Expresjs" },
    { name: "MongoDB" },
    { name: "MERN Stack" },
    { name: "PHP" },
    { name: "Laravel" },
    { name: "SQL" },
  ];
  return (
    <div id="skills" className="w-full md:min-h-[80vh]">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" w-full flex justify-center items-center flex-col mb-7">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-center ">
            Skills
          </p>
          <p className="py-4 md:text-2xl texl-lg">
            I enjoy diving into and learning new things. Here's a list of
            technologies I've worked with
          </p>
        </div>

        <div className="className='w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8'">
          {skills.map((skill,index) => (
            <div key={index} className='shadow-md shadow-[#040c16] bg-green-200 hover:scale-110 duration-300'>
              <p className='my-3 text-xs md:text-lg'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

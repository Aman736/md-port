import React from 'react'
import myImg from '../image/myImg.webp'
import {ReactComponent as MySvg} from './ImgBack.svg'

const About = () => {
  return (
<div id='about' className="w-full  mt-7 tracking-wide">
  <div className="flex items-center justify-center">
    <p className="text-4xl font-bold inline mx-auto border-b-4 border-cyan-500 ">
      About
    </p>
  </div>

  <div className="md:flex md:flex-row flex flex-col items-center md:justify-evenly max-w-[1200px] mx-auto p-2 gap-16 ">
    <div className=' relative group hidden md:block'>
      <div className='wow animate__animated animate__backInUp'>
      <img src={myImg} alt='mainImg' height={380} width={380} className=' -mt-10 z-[-2] wow animate__animated animate__shakeY animate__infinite animate__slower'/>
      </div>
      <MySvg className={` absolute md:top-20 top-8 z-[-5] mt-[1rem] scale-110 md:scale-125 group-hover:scale-150 duration-200`}/>
    </div>
    <div className="md:w-1/2 w-full">
      <p className="md:text-lg sm:text-base text-justify wow animate__animated animate__backInRight">
      Recently graduated in Computer Science and Engineering, I possess a solid grasp of 
      programming languages, algorithms, and effective problem-solving techniques. 
      My passion lies in software development, and I'm enthusiastic about launching 
      my career in this ever evolving field. With a specialization in front-end development 
      and an ongoing commitment to enhancing my coding proficiency in C++, I'm poised to 
      contribute to innovative projects.
      </p>
      <button className="bg-orange-500 rounded-full px-7 md:py-4 py-3 mt-5 font-semibold text-white hover:bg-orange-400 md:text-xl transition-all duration-150 wow animate__animated animate__tada">
        <a href='https://drive.google.com/file/d/1_demAMLlxUZmZ4UnVe3mLm1mwlhaWTIH/view?usp=sharing' target='_blank' rel='noopener noreferrer'>RESUME</a>
      </button>
    </div>
  </div>
</div>

  )
}

export default About

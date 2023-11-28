import React from 'react'
import abtImg from '../image/abtImg.png'
import myImg from '../image/myImg.png'
import {ReactComponent as MySvg} from './ImgBack.svg'

const About = () => {
  return (
<div id='about' className="w-full md:min-h-screen min-h-[50vh] mt-7 tracking-wide">
  <div className="flex items-center justify-center">
    <p className="text-4xl font-bold inline mx-auto border-b-4 border-cyan-500 ">
      About
    </p>
  </div>

  <div className="md:flex md:flex-row flex flex-col items-center md:justify-evenly max-w-[1200px] mx-auto p-2 gap-16 ">
    <div className=' relative group hidden md:block'>
      <img src={myImg} alt='mainImg' height={380} width={380} className=' -mt-3 z-[-2]'/>
      <MySvg className={`absolute md:top-12 top-8 z-[-5] mt-20 scale-110 md:scale-125 group-hover:scale-150 duration-200`}/>
    </div>
    <div className="md:w-1/2 w-full">
      <p className="md:text-lg sm:text-base break-all">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, obcaecati placeat. Placeat rerum ipsa explicabo,
        animi at delectus ea id modi vitae, voluptatem voluptates dolor alias nesciunt illo atque?
        Officiis adipisci veritatis fugiat omnis perspiciatis, similique exercitationem odit quasi minima
        reprehenderit nam error, delectus aspernatur obcaecati perferendis accusamus! Repellat, tenetur.
      </p>
      <button className="bg-orange-500 rounded-full px-7 md:py-4 py-3 mt-5 font-semibold text-white hover:bg-orange-400 md:text-xl transition-all duration-150">
        RESUME
      </button>
    </div>
  </div>
</div>

  )
}

export default About

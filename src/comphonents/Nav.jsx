import React, { useState } from 'react'
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { MdCloseFullscreen } from "react-icons/md";
import { Link } from 'react-scroll';

const Nav = () => {
  let Links = [
    {name:"HOME", id:1},
    {name:"ABOUT", id:2},
    {name:"SKILLS", id:3},
    {name:"PROJECTS", id:4},
    {name:"CONTACT", id:5},
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className=' shadow-md w-full fixed top-0 left-0 z-20'>
      <div className=' md:flex items-center text-center justify-between bg-green-4 bg-green-400 py-4 md:px-10 px-7'>
        <div className=' font-extrabold text-white text-2xl cursor-pointer items-center'>
          <a href='/'>PORTFOLIO</a>
        </div>

        <div onClick={()=>setOpen(!open)} className=' text-xl absolute right-8 top-6 cursor-pointer md:hidden'>
          {
            open ? <MdCloseFullscreen /> : <BsFillMenuButtonWideFill />
          }
        </div>
        
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  bg-green-400 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in
        ${open ? 'mt-[-20px] top-20 opacity-100':'top-[-490px] md:opacity-100 opacity-0'}`}>
          {
            Links.map((link)=>(
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <Link to={link.name} smooth={true} offset={-110} duration={500} className=' hover:text-green-700 duration-300 group text-white font-bold cursor-pointer'>{link.name}</Link>
                <div className='w-full h-[2px] bg-white opacity-0 group-hover:opacity-100'></div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Nav

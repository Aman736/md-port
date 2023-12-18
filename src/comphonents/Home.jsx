import React, { useEffect, useMemo, useState } from 'react'
import myImgM from '../image/myImgM.webp'
import { Link } from 'react-scroll';
 
const Home = () => {
  const messages = useMemo(()=>['WEB DEVELOPER', 'FRONT-END DEVELOPER', 'BACK-END DEVELOPER', 'FULL-STACK DEVELOPER', 'MERN-STACT DEVELOPER'],[])
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentIndex((prevIndex)=>(prevIndex+1)%messages.length);
    },1500);
    return ()=> clearInterval(interval);
    },[messages]);
    

  return (
    <div className=' w-full '>
      <div className=' md:flex md:flex-row flex flex-col items-center md:justify-center mx-auto p-2 md:gap-16 gap-3'>
        <div className='md:w-[60%] wow animate__animated animate__backInLeft'>
          <p className='md:text-5xl text-3xl'>Hi, I'm <br/><span className=' text-green-500 md:text-7xl text-4xl font-bold italic ml-16'>MD RIZWAN</span></p>
          <p className=' md:text-sm text-xs text-gray-500 md:max-w-[500px] max-w-[400px] text-justify indent-14'>Computer Science and Engineering graduate, passionate about software development. Actively seeking opportunities for innovative projects.</p>

          <p className='md:text-5xl text-2xl font-semibold'>I am a <span className='italic text-orange-400 md:text-4xl font-bold text-xl'>{messages[currentIndex]}</span></p>
          <div className=' bg-orange-500 rounded-full md:px-7 px-5 md:py-4 py-2 md:mt-20 mt-5 font-semibold text-white hover:bg-orange-400 md:text-xl transition-all duration-150 inline-block cursor-pointer'>
          <Link to='CONTACT' smooth={true} offset={-40} duration={1000} >CONTACT ME</Link>
          </div>
        </div>

        <div className='md:w-[40%] relative wow animate__animated animate__backInUp'>
          <img src={myImgM} alt='mainImg' className='md:scale-100 scale-90 z-[-2] md:h-[660px] h-[450px]'/>
        </div>
      </div>
    </div>
  )
}

export default Home

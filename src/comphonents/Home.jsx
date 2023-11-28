import React, { useEffect, useState } from 'react'
import myImgM from '../image/myImgM.png'
import {ReactComponent as MySvg} from './ImgBack.svg'
 
const Home = () => {
  const [messages, setMessages  ] = useState([
    'web developer',
    'Front-End Developer',
    'Back-End Developer',
    'Full Stack Developer',
    'MERN Stack developer'
  ]);
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentMsgIndex((prevIndex) =>
        prevIndex === messages.lenght - 1 ? 0 :prevIndex + 1
      );
    }, 2000)
    return ()=> clearInterval(interval);
  },[messages]);

  return (
    <div className=' w-full min-h-screen'>
      <div className='  md:flex md:justify-evenly md:flex-row flex-col flex items-center p-3 gap-10'>
        <div className=''>
          <p className='md:text-5xl text-3xl'>Hi, I'm <br/><span className=' text-green-500 md:text-7xl text-5xl font-bold italic'>Md Rizwan</span></p>
          <p className=' text-sm text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,<br/> aliquid nostrum sequi nesciunt iusto amet.</p>

          <p className='md:text-5xl text-3xl font-semibold'>I am a <span className='italic text-orange-400 md:text-4xl font-bold'>{messages[currentMsgIndex]}</span></p>

          <button className=' bg-orange-500 rounded-full px-7 md:py-4 py-3 md:mt-20 mt-5 font-semibold text-white hover:bg-orange-400 md:text-xl transition-all duration-150'>CONTACT ME</button>
        </div>

        <div className=' relative'>
          <img src={myImgM} alt='mainImg' height={450} width={450} className='md:scale-100 scale-90 z-[-2]'/>
        </div>
      </div>
    </div>
  )
}

export default Home

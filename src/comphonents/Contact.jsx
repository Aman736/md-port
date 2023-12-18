import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { PiInstagramLogoFill, PiFacebookLogoBold } from "react-icons/pi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";


const Contact = () => {

  const [contData, setContData] = useState({
    name:"",email:"",tel:"",message:""
  });

  function changeHandler(event){
    const {name, value} = event.target;
    setContData(prevContData => {
      return {
        ...prevContData,
        [name]:value
      }
    });
  }

  async function submitHandler(event){
    event.preventDefault();
    try{
        // const {name,email,tel,message} = contData;

        // const res = await fetch("/send", {
        //   method:"POST",
        //   headers:{
        //     "Content-Type":"application/json"
        //   },
        //   body: JSON.stringify({
        //     name, email, tel, message
        //   })
        // });

        // const data = await res.json();

      //print the data
      console.log("message by visitor:");
      console.log(contData);
      //toast
      toast.success("message send!!");
    }
    catch(err){
      toast.error("Faield to send");
    }
  }

  return (
    <div id='contact' className='w-full flex flex-col justify-center items-center p-4'>
        <form method='POST' onSubmit={submitHandler} className='flex flex-col md:max-w-[800px] w-full'>
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>Contact</p>
                <p className='py-4'>Send me a message</p>
            </div>
            <input onChange={changeHandler} value={contData.name} className=' bg-green-200 p-2 border-2 border-green-600 hover:border-0 rounded-md hover:shadow-md hover:shadow-[#040c16] transition-all duration-100 wow animate__animated animate__tada' type="text" placeholder='Name' name='name' required/>
            <div className='flex flex-col md:flex-row md:justify-between w-full md:max-w-[800px] md:gap-3 wow animate__animated animate__tada'>
            <input onChange={changeHandler} value={contData.email} className='bg-green-200 my-4 p-2 md:w-1/2 border-2 border-green-600 hover:border-0 rounded-md hover:shadow-md hover:shadow-[#040c16] transition-all duration-100 ' type="email" placeholder='Email' name='email' required/>
            <input onChange={changeHandler} value={contData.tel} className='bg-green-200 my-4 p-2 md:w-1/2 border-2 border-green-600 hover:border-0 rounded-md hover:shadow-md hover:shadow-[#040c16] transition-all duration-100' type="tel" placeholder='Phone no.' name='tel' required/>
            </div>
            <textarea onChange={changeHandler} value={contData.message} className='bg-green-200 p-2 border-2 border-green-600 hover:border-0 rounded-md hover:shadow-md hover:shadow-[#040c16] transition-all duration-100 wow animate__animated animate__tada' name="message" rows="7" placeholder='Message'></textarea>
            <div>
              <button className=' border-2 bg-green-300 rounded-xl hover:bg-green-500 hover:border-green-600 px-4 py-3 my-8 mx-auto flex items-center transition-all duration-100 wow animate__animated animate__tada'>Send Message</button>
              <Toaster/>
            </div>
        </form>

        <div className='max-w-[800px] w-full text-center'>
          <fieldset className=' border-4 rounded-xl border-green-300 p-4 hover:border-green-500'>
            <legend className='text-4xl font-bold gap-2'> OR </legend>
            <div className='flex flex-row justify-evenly flex-wrap'>
              <a href='https://www.instagram.com/__r_i_z_w_a_n_/' target='_blank' rel='noopener noreferrer'>
                <PiInstagramLogoFill size={50} className=' text-pink-600 md:hover:scale-110 md:scale-100 scale-75 transition-all duration-150 wow animate__animated animate__zoomInUp animate__slow'/>
              </a>
              <a href='https://www.facebook.com/profile.php?id=100024560719282&mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'>
                <PiFacebookLogoBold size={50} className=' text-blue-700 md:hover:scale-110 md:scale-100 scale-75 transition-all duration-150 wow animate__animated animate__zoomInUp animate__slow'/>
              </a>
              <a href='https://www.linkedin.com/in/mdrizwan0' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin size={50} className=' text-blue-700 md:hover:scale-110 md:scale-100 scale-75 transition-all duration-150 wow animate__animated animate__zoomInUp animate__slow'/>
              </a>
              <a href='https://github.com/Aman736' target='_blank' rel='noopener noreferrer'>
                <FaGithub size={50} className='md:scale-100 scale-75 md:hover:scale-110 transition-all duration-150 wow animate__animated animate__zoomInUp animate__slow'/>
              </a>
              <a href='https://leetcode.com/rizwan073/' target='_blank' rel='noopener noreferrer'>
                <SiLeetcode size={50}  className=' text-orange-500 md:hover:scale-110 md:scale-100 scale-75 transition-all duration-150 wow animate__animated animate__zoomInUp animate__slow'/>
              </a>
              <a href='https://wa.me/7369855773' target='_blank' rel='noopener noreferrer'>
                <RiWhatsappFill size={50} className=' text-green-600 md:hover:scale-110 md:scale-100 scale-75 transition-all duration-150 wow animate__animated animate__zoomInUp animate__slow'/>
              </a>
            </div>
          </fieldset>
        </div>

    </div>
  )
}

export default Contact

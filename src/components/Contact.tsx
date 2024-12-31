import React from 'react'
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
       <div className='grid md:grid-cols-2 gap-10'>
       <div className='space-y-8'>
      <h2 className='text-5xl text-orange-500 font-serif animate-pulse'>Get In Touch</h2> 
       <p className='text-yellow-50 text-[18px] pt-2' data-aos="zoom-in-up">
        Drop me a line, give me a call, or send me a message by submitting the form. 
      </p>
      <div className='flex gap-3 items-center data-aos="zoom-in-up"'>
      < CgMail  size={30} /> xyz@gmail.co
       </div>
      <div className='flex gap-3 items-center data-aos="zoom-in-up"'>
       <BsFillTelephoneOutboundFill  size={30} /> (021) 000-8888
       </div>
       </div>
       <div className='space-y-8'>
       <div className='flex flex-col gap-1 data-aos="zoom-in-up"'>
       <label htmlFor='name'>Name</label>
      <input type="text"
       className='h-[40px]-bg-transparent border border-accent' id='name' />
       </div>
      <div className='flex flex-col gap-1 data-aos"zoom-in-up"'>
      <label htmlFor='email'>Email</label>
      <input type="text"
       className='h-[50px]-bg-transparent border border-accent' id='email' />
      </div>
      <div className='flex flex-col gap-1 data-aos="zoom-in-up"'>
      <label htmlFor="msg">Message</label>
     <textarea 
    className="bg-transparent border border-amber-50"
    id='msg' rows={4}>
    </textarea>
    <button className=" bg-sky-400 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300 ease-in-outmd:px-6 md:py-2 text-sm md:text-base"type="submit">Send</button>   
   </div>
  </div>
  </div>   
  </div>
  );
}

export default Contact
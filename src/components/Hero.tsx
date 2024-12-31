import React from 'react'
import Navbar from './Navbar'
<img src="/hania.jpg" alt="Image" width={100} height={100} />
const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/hania.jpg)] bg0left lg:bg-[15%] bg-cover'
    style={{backgroundSize: "35%", backgroundPosition: "left 10px 10px"}}>
    
        <Navbar />
      
        <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
          <div className='hidden lg:block'></div>
          <div className='text-[80px] sm:text-[100px] font-serif leading-tight flex justify-center items-center'>
            <div>
              <p className='animate-pulse'>HANIA</p>
              <p className='animate-pulse'>IMRAN</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
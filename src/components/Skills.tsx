import React from 'react'

const Skills = () => {
  return (
    <div className='container pt-32'>
        <div id='skills' className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-teal-600 font-serif' data-aos="zoom-in-up"> "From Opportunity To Expertise:
                     My Journey Into The Whirl Of Coding "</h2>
                <p className='text-gray-600-50 pt-2'>
                My coding journey began with a spark of excitement when I got selected for an " IT initiative ", A turning point that opened the doors to a world of possibilities. Starting with the basics, I immersed Myself in learning new languages and frameworks, and over time, I developed a strong foundation. As I delved deeper, I discovered the power of TypeScript, enjoying the way it brought structure and type safety to JavaScript. Eventually, I moved into building scalable, modern web applications using Next.js, amazed by its server-side rendering and static generation capabilities. What began as a small step...IT has transformed into a comprehensive skill set, and I'm now ready to take on even more advanced projects and challenges in my coding journey.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-3 text-yellow-400 text-3xl sm:text-4xl'>
                        <div className='space-y-3'>
                            <h2 data-aos="zoom-in-up">Typescript</h2>
                            <h2 data-aos="zoom-in-up">Next.js</h2>
                            <h2 data-aos="zoom-in-up">React.js</h2>
                        </div>
                        <div className='space-y-3'>
                            <h2 data-aos="zoom-in-up">Tailwind</h2>
                            <h2 data-aos="zoom-in-up">CSS</h2>
                            <h2 data-aos="zoom-in-up">Node.js</h2>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
  )
}

export default Skills
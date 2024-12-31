import React from 'react'
import Heading from './Heading';
import Card from './Card';


const data = [
    {
        id: 0,
        title: "CountDown Timer" ,
        desc: "A web application built with Next.js and Typescript, focused on time tracking, and incorporating an interactive countdown timer functionality " ,
        img: "/project01.jpg",
        tags: ["Next.js, Node, CSS, Typescript"],
    },
];

const Project = () => {
  return (
    <div id='projects' className=' font-serif container pt-18 '>
      <Heading title= 'Project' />
      <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3  font-serif place-items-center'>
      {data.map((el) => (<Card 
      key={el.id}
      title={el.title}
      desc={el.desc}
      img={el.img}
      tags={el.tags}
      
      
      
      />))}

      </div>
    </div>
  )
}

export default Project
import data from '@/data/data'
import React from 'react'
import Project from '../navigation/Project'
import Image from 'next/image'

type Props = {}

const Projects = (props: Props) => {
  return (
    <div id='Projects' className='flex flex-col font-poppins bg-gradient-to-r from-gradientRight to-gradientLeft'>
      <Image 
        src="/transitions/transition_grey.svg"
        alt="transition"
        width={100}
        height={176}
        className='w-full h-44'
      />
      <p className='flex text-4xl mb-8 mt-8 justify-center text-lightcyan font-bold uppercase'>
        Featured Projects
      </p>
      <div className='flex flex-wrap w-full desktop:pl-20 desktop:pr-20 justify-center'>
        {data.map((item, index) => 
          <Project key={index} headline={item.title} image={item.image} text={item.text} tags={item.tags} link={item.link} />
        )}
      </div>
    </div>
  )
}

export default Projects
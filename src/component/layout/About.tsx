import Summary from '@/static/Summary'
import Timeline from '@/static/Timeline'
import Image from 'next/image'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div id='About' className='bg-slate-800 flex flex-col'>
      <Image 
        src="/transitions/transition_gradient.svg"
        width={100}
        height={176}
        alt="transition_gradient"
        className='w-full h-44'
      />
      <div className='flex flex-grow items-center justify-center text-slate-100'>
        <div className='flex flex-row w-full'>
          <div className='flex desktop:w-1/2 mobile:w-full mobile:p-4 flex-col desktop:p-20'>
            <Summary />
          </div>
          <div className='desktop:flex mobile:hidden w-1/2 flex-col pl-10 justify-center'>
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
import SocialMedia from '@/static/SocialMedia'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='flex flex-col items-center bg-gradient-to-r from-gradientRight to-gradientLeft'>
      <Image 
        src="/transitions/transition_grey.svg"
        alt="transition"
        width={100}
        height={176}
        className='w-full h-44'
      />
      <div className='pt-5'>
        <SocialMedia size={35} />
      </div>
      <div className='flex text-white font-bold text-center p-5 font-poppins'>
        {new Date().getFullYear()} Den Holivets. ©All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
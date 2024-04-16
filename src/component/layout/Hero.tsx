'use client'

import SocialMedia from '@/static/SocialMedia'
import Typing from '@/static/Typing'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image'
import Arrow from '@/static/Arrow'

const variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 0, y: -50 },
}

const Hero = () => {
  return (
    <div className="flex items-center flex-col min-h-screen desktop:px-20 mobile:p-6 bg-gradient-to-r from-gradientRight to-gradientLeft">
      <div className="flex mobile:justify-center desktop:flex-row desktop:items-center mobile:flex-col mobile:py-12 mobile:gap-16 w-full flex-1">
        <div className="flex flex-col z-20 pointer-events-none text-white desktop:w-3/5 mobile:w-full mobile:text-center">
          <motion.div initial="visible" animate="hidden" variants={variants}>
            <p className="font-poppins uppercase desktop:text-[4vw] mobile:text-[7vw] font-bold text-lightcyan w-full text-shadow">
              Den Holivets
            </p>
            <p className="font-poppins desktop:text-[2vw] mobile:text-[4vw]">a fullstack developer specializing in web applications with &nbsp;
              <Typing />
            </p>
            <div className='flex mobile:hidden mt-6 justify-start w-[17vw]'>
              <SocialMedia size={200}/>
            </div>
          </motion.div>
        </div>
        <motion.div className="flex flex-col desktop:w-2/5"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0, 0.71, 0.2, 1.01]
            }}>
              <Image 
                className="mobile:w-full mobile:max-w-sm shadow-custom object-contain self-center animate-scalepulse rounded-2xl" 
                src="/images/PORTFOLIO1.png" 
                alt="Portrait"
                width={500}
                height={1200}
              />
        </motion.div>
      </div>
      <div className="desktop:absolute inset-0 flex items-end py-2 desktop:bottom-10 justify-center z-10">
        <Link href={"/#About"} aria-label='About' >
            <Arrow />
        </Link>
    </div>
  </div>
  )
}

export default Hero
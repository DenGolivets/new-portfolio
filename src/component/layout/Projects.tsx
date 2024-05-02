import data from '@/data/data'
import React from 'react'
import Project from '../navigation/Project'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
      <div className='flex w-full'>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className='w-[1200px]'
        >
        {data.map((item, index) => 
          <SwiperSlide key={index} className='pb-10'>
            <div className='flex items-center justify-center mobile:max-auto'>
            <Project headline={item.title} image={item.image} text={item.text} tags={item.tags} link={item.link} />
            </div>
          </SwiperSlide>
        )}
        </Swiper>
      </div>
    </div>
  )
}

export default Projects
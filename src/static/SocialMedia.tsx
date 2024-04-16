import Image from 'next/image'
import React from 'react'

const SocialMedia = ({ size }: { size: number }) => {
  return (
    <div className='flex justify-center gap-2 pb-4' style={{ pointerEvents: 'auto' }}>
      <a className='bg-black bg-opacity-50 p-4 rounded-full transition-all hover:scale-110 scale-100' href='https://github.com/DenGolivets' target='_blank'>
        <Image 
          src='/icons/github.svg'
          alt='icon'
          width={size}
          height={size}
        />
      </a>
      <a className='bg-black bg-opacity-50 p-4 rounded-full transition-all hover:scale-110 scale-100' href='https://www.facebook.com/den.golivets/' target='_blank'>
        <Image 
          src='/icons/facebook.svg'
          alt='icon'
          width={size}
          height={size}
        />
      </a>
      <a className='bg-black bg-opacity-50 p-4 rounded-full transition-all hover:scale-110 scale-100' href='https://www.instagram.com/terra4beat/' target='_blank'>
        <Image 
          src='/icons/instagram.svg'
          alt='icon'
          width={size}
          height={size}
        />
      </a>
    </div>
  )
}

export default SocialMedia
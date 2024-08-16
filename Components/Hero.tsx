"use client"
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll = () => {
    }
  return (
    <div className='flex lg:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
        <div className="flex-1 pt-36 padding-x">
            <h1 className="lg:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
                find, book, or rent car - quickly and easily
            </h1>
            <p className="text-[27px] text-black-100 font-light mt-5">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
        title="Explore Cars"
        containerStyle="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}/>
        </div>
        <div className="lg:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
            <div className="relative lg:w-full w-[90%] lg:h-full h-[590px] z-0">
                <Image src="/hero.png" alt='hero' fill className='object-contain'/>
            </div>
                <div className='absolute lg:-top-24 lg:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full lg:h-screen h-[590px] overflow-hidden'/>
        </div>
    </div>
  )
}

export default Hero
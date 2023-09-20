import React from 'react'
import Image from 'next/image';

import Style from './Header.module.css'
import { Container, Tabbar } from '..'

import threeDBox from '@/assets/images/3d-box-colorize.png';
import laptopImage from '@/assets/images/laptop-homepage.png';
import ringCircle from '@/assets/images/circle-ring-white.svg';
import blueCircle from '@/assets/images/circle-blue.svg';
import pinkCircle from '@/assets/images/circle-pink.svg';

function Header() {
  return (
    <header className={Style.header}>
      <Container otherClass="flex flex-col gap-10 py-16 min-h-[calc(100vh+400px)]">
        <div className='relative w-full max-w-[892px] mx-auto'>
          <div className='absolute top-[130px] -left-[50px] -z-[3]'>
            <Image src={threeDBox} alt="3dBox" width={250} height={0} className="w-[150px]" />
          </div>
          <div className='absolute -top-[50px] right-[30px] -z-[3]'>
            <Image src={laptopImage} alt="laptopHomepage" width={250} height={0} className="w-[230px]" />
          </div>
          <div className='absolute -top-[10px] left-[100px] -z-[3]'>
            <Image src={ringCircle} alt="ring-circle" width={50} height={0} className="w-[50px]" />
          </div>
          <div className='absolute -top-[10px] left-[48%] -z-[3]'>
            <Image src={ringCircle} alt="ring-circle" width={50} height={0} className="w-[50px]" />
          </div>
          <div className='absolute top-[150px] left-[50%] -z-[3]'>
            <Image src={ringCircle} alt="ring-circle" width={50} height={0} className="w-[50px]" />
          </div>
          <div className='absolute top-[25px] -left-[40px] -z-[3]'>
            <Image src={blueCircle} alt="blue-circle" width={25} height={0} className="w-[15px]" />
          </div>
          <div className='absolute bottom-[30px] right-0 -z-[3]'>
            <Image src={pinkCircle} alt="pink-circle" width={25} height={0} className="w-[15px]" />
          </div>
          <h1 className='text-[85px] leading-[95px] font-semibold z-[10]'>
            Where Web3 
            <br />
            Gaming History Begins
          </h1>
          <p className='ml-0 md:ml-32 mt-5 text-lg text-light font-light'>
            Be Among the First Creators on 3engine
          </p>
        </div>

        <div className='w-full max-w-[930px] mx-auto mt-20'>
          <Tabbar />
        </div>
      </Container>
    </header>
  )
}

export default Header
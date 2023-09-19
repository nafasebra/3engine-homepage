import React from 'react'
import Image from 'next/image';

import Style from './Header.module.css'
import { Container } from '..'

import threeDBox from '@/assets/images/3d-box-colorize.png';
import laptopImage from '@/assets/images/laptop-homepage.png';


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
          <h1 className='text-[85px] leading-[95px] font-semibold z-[10]'>
            Where Web3 
            <br />
            Gaming History Begins
          </h1>
          <p className='ml-0 md:ml-32 mt-5 text-lg text-light font-light'>
            Be Among the First Creators on 3engine
          </p>
        </div>
      </Container>
    </header>
  )
}

export default Header
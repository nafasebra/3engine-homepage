import React from 'react'

import Style from './Header.module.css'
import { Container } from '..'

function Header() {
  return (
    <header className={Style.header}>
      <Container otherClass="flex flex-col gap-10 py-16 min-h-screen">
        <div className='w-full max-w-[892px] mx-auto'>
          <h1 className='text-[70px] leading-[75px] font-semibold'>
            Where Web3 
            <br />
            Gaming History Begins
          </h1>
          <p className='mt-8 text-light font-light'>
            Be Among the First Creators on 3engine
          </p>
        </div>
      </Container>
    </header>
  )
}

export default Header
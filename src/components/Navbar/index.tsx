import React from 'react'
import Image from 'next/image'

import Style from './Navbar.module.css'
import { Container } from '..'

function Navbar() {
  return (
    <nav>
      <Container otherClass={Style.navbar_container}>
        <Image src='/logo.png' alt='3engone logo' width={250} height={0} className={Style.navbar_logo} />
      </Container>
    </nav>
  )
}

Navbar.displayName = "Navbar";

export default Navbar
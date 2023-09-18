import React from 'react'

import Style from './Footer.module.css'
import { Container } from '@/components/index'

import { DiscordIcon, LinkedinIcon, TwitterIcon } from '@/assets/icons'

function Footer() {
  return (
    <footer>
      <Container otherClass={Style.footer_container}>
        <p>
          © 2023 3Engine. All rights reserved.
        </p>
        <div className='flex items-center gap-8'>
          <ul className='flex items-center gap-4'>
            <li>
              <a href="#" className='underline'>Privacy</a>
            </li>
            <li>
              <a href="#" className='underline'>terms and condition</a>
            </li>
          </ul>
          <ul className='flex items-center gap-4'>
            <li>
              <a href="#" className='hover:text-blue-500 transition-colors'>
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="#" className='hover:text-blue-500 transition-colors'>
                <LinkedinIcon />
              </a>
            </li>
            <li>
              <a href="#" className='hover:text-blue-500 transition-colors'>
                <DiscordIcon />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
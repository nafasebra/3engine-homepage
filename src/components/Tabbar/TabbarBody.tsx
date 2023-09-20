import { EmailIcon } from '@/assets/icons'
import React from 'react'

function TabbarBody() {
  return (
    <form className='relative py-8 pl-8 pr-16 rounded-b-2xl rounded-tr-2xl bg-white overflow-hidden flex flex-col lg:flex-row items-center gap-8'>
      <div className='w-full lg:w-[40%] flex flex-col gap-3'>
        <label className='flex items-center gap-3 text-black'>
          <EmailIcon />
          <p>Your Email</p>
        </label>
        <input type="text" className='border-none outline-none text-gray-900' placeholder='example@gmail.com' />
      </div>
      <div className='w-full lg:w-[40%] flex flex-col gap-3'>
        <label className='flex items-center gap-3 text-black'>
          <EmailIcon />
          <p>Your Email</p>
        </label>
        <input type="text" className='border-none outline-none text-gray-900' placeholder='example@gmail.com' />
      </div>
      <button type='submit' className='absolute top-0 right-0 bottom-0 text-white bg-primary flex items-center justify-center px-6 shadow-[-46px_15px_42px_rgba(0,120,242,0.35)] hover:bg-primary/75 transition-colors'>Join</button>
    </form>
  )
}

export default TabbarBody
import React from 'react'
import ToggleMode from './toggle-mode'

export const Navbar = () => {
  return (
    <nav 
      className='h-20 bg-light-elem drop-shadow-md dark:bg-dark-blue dark:text-light-elem flex items-center justify-between px-16'>
      <h1 className='font-extrabold'>Where in the world?</h1>
      <ToggleMode />
    </nav>
  )
}

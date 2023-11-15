'use client'

import useTheme from '@/hook/useTheme'
import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ToggleMode = () => {
  const { setDarkMode, setLightMode, isDark} = useTheme()
  const [isMounted, setIsMounted] = useState(false) 

  useEffect(() => {
    setIsMounted(true)
  },[])

  if (!isMounted) return null

  return (
    <button 
      onClick={isDark ? setLightMode : setDarkMode}
      className='flex gap-x-2 items-center font-semibold'
      >
        {isDark ? 
          <>
            <Moon className='w-5 h-5'/>
            Light Mode
          </> :
          <>
            <Sun className='w-5 h-5'/>
            Dark Mode
          </>
        }
    </button>
  )
}

export default ToggleMode
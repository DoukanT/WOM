import React from 'react'
import Logo from '../logo.png'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react';
import { useState } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    /*<div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <img src={Logo} alt=''/>

        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
          WOM
        </h1>
        <div>
            <button className='text-white pr-4'>Account</button>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
                Logout
            </button>
        </div>
        <div>
            <button className='text-white pr-4'>Sign In</button>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
              Sign Up
            </button>
        </div>
    </div>
  )
}*/
<header className={`${isScrolled && 'bg-[#141414]'}`}>
        <div className='flex items-center space-x-2 md:space-x-10'>
        <img
          alt="the world of movie"
          src={Logo}
  	      width='200px'
          height='auto'
          className="cursor-pointer object-contain"
        />

        <ul className='hidden space-x-4 md:flex'>
            <li className='headerLink text-white text-base'>Home</li>
            <li className='headerLink text-white text-base'>Movie Recommendation</li>
            <li className='headerLink text-white text-base'>My List</li>
            <li className='headerLink text-white text-base'>Watch Later</li>
            <li className='headerLink text-white text-base'>Advanced Search</li>
        </ul>

        </div>

    <div className="flex items-center space-x-4 text-sm font-light">



    </div>
      <div>
        <MagnifyingGlassIcon className=" hidden h-8 w-8 text-pink-500 sm:inline"/> 
        <button className='text-white p-4'>Sign In</button>
        <button className='bg-pink-500 px-6 py-2 rounded cursor-pointer text-white'>
        Sign Up
        </button>
      </div>
    </header>
  )
}

export default Navbar
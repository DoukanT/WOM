import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react';
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import Logo from '../logo.png'


const Navbar = () => {

  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  //console.log(user.email)

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };


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
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
        <div className='flex items-center space-x-2 md:space-x-10'>
       <Link to='/'>
       <img
          alt="the world of movie"
          src={Logo}
  	      width='200px'
          height='auto'
          className="cursor-pointer object-contain"
        />
       </Link>
       
       {user?.email ?(
        <ul className='hidden space-x-4 md:flex'>
            <Link to='/'><li className='headerLink text-white text-base'> Home</li></Link>
            <Link to='/Movie Recommendation'><li className='headerLink text-white text-base'>Movie Recommendation</li></Link>
            <Link to='/Watch Later'><li className='headerLink text-white text-base'>Watch Later</li></Link>
            <Link to='/Advanced Search'><li className='headerLink text-white text-base'>Advanced Search</li></Link>
        </ul>
       ) : (
        <ul className='hidden space-x-4 md:flex'>
            <Link to='/'><li className='headerLink text-white text-base'> Home</li></Link>
            <Link to='/Advanced Search'><li className='headerLink text-white text-base'>Advanced Search</li></Link>
        </ul>
       )
       }
        </div>

    {user?.email ? (
    <div className="flex items-center space-x-4 text-sm font-light">

<MagnifyingGlassIcon className=" hidden h-6 w-6 text-blue-500 sm:inline"/> 
<Link to='/account'><button className='text-white p-4'>Account</button></Link>
<button onClick={handleLogout} className='bg-pink-500 px-6 py-2 rounded cursor-pointer text-white'>
   Logout
     </button>

   </div> ) :(

  <div className="flex items-center space-x-4 text-sm font-light">

  <MagnifyingGlassIcon className=" hidden h-6 w-6 text-blue-500 sm:inline"/> 
  <Link to='/login'><button className='text-white p-4'>Sign In</button></Link>
  <Link to='/signup'><button className='bg-pink-500 px-6 py-2 rounded cursor-pointer text-white'>
      Sign Up
       </button></Link>

  </div>

)

}
    </header>
  )
}

export default Navbar
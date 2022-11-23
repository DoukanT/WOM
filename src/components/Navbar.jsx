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
  const [searchbar, setSearchbar] = useState(0);
  const handletab=(e)=>{
    setSearchbar(e);
  }

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
            <li className='headerLink text-white text-base'><Link to="/">Home</Link></li>
            <li className='headerLink text-white text-base'>Movie Recommendation</li>
            <li className='headerLink text-white text-base'><Link to='/Account'>My List</Link></li>
            <li className='headerLink text-white text-base'>Watch Later</li>
            <li className='headerLink text-white text-base'><Link to="/Search">Advanced Search</Link></li>
        </ul>
       ) : (
        <ul className='hidden space-x-4 md:flex'>
            <li className='headerLink text-white text-base'><Link to="/">Home</Link></li>
            <li className='headerLink text-white text-base'><Link to="/Login">Movie Recommendation</Link></li>
            <li className='headerLink text-white text-base'><Link to="/Login">My List</Link></li>
            <li className='headerLink text-white text-base'><Link to="/Login">Watch Later</Link></li>
            <li className='headerLink text-white text-base'><Link to="/Login">Advanced Search</Link></li>
        </ul>
       )
       }
        </div>

    {user?.email ? (
    <div className="flex items-center space-x-4 text-sm font-light">
    <form action="" method="GET">
          <div onLoadStart={()=>handletab(0)} onDoubleClick={()=>handletab(0)} className={searchbar===1 ? "" :"hidden"}>
            <input className='py-1 px-2' type="text" placeholder="Click twice to close"/>
          </div>
        </form>
        <MagnifyingGlassIcon onClick={()=>handletab(1)} className={searchbar===1 ? "hidden" : "h-8 w-8 text-pink-500 cursor-pointer sm:inline"}/>
    <Link to='/account'><button className='text-white p-4'>Account</button></Link>
    <button onClick={handleLogout} className='bg-pink-500 px-6 py-2 rounded cursor-pointer text-white'>
      Logout
     </button>

   </div> ) :(

  <div className="flex items-center space-x-4 text-sm font-light">

    <form action="" method="GET">
      <div onLoadStart={()=>handletab(0)} onDoubleClick={()=>handletab(0)} className={searchbar===1 ? "" :"hidden"}>
        <input className='py-1 px-2' type="text" placeholder="Click twice to close"/>
      </div>
    </form>
    <MagnifyingGlassIcon onClick={()=>handletab(1)} className={searchbar===1 ? "hidden" : "h-8 w-8 text-pink-500 cursor-pointer sm:inline"}/>
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
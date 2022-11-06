import React from 'react'
import Logo from '../logo.png'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react';
import { useState } from 'react'
<<<<<<< Updated upstream
import { Link } from 'react-router-dom';
import "./Navbar.css"
=======
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/authSlice';
>>>>>>> Stashed changes

const Navbar = () => {
  const dispatch = useDispatch() //serkan

  const handleLogOut =() =>{
    dispatch(logOut())
  }

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
        <Link to="/"><img
          alt="the world of movie"
          src={Logo}
          width='200px'
          height='auto'
          className="cursor-pointer object-contain"
        /></Link>

        <ul className='hidden space-x-4 md:flex'>
            <li className='headerLink text-white text-base'><Link to="/">Home</Link></li>
            <li className='headerLink text-white text-base'>Movie Recommendation</li>
            <li className='headerLink text-white text-base'>My List</li>
            <li className='headerLink text-white text-base'>Watch Later</li>
            <li className='headerLink text-white text-base'><Link to="/Search">Advanced Search</Link></li>
        </ul>

        </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        {/* burası boş. işe yaramıyorsa kaldırılabilir */}
      </div>


      <div className='flex flex-row items-center'>
          {/* buradaki action kısmını api.name ile bağlamamız lazım galiba */}
          <form action="" method="GET">
            <div onLoadStart={()=>handletab(0)} onDoubleClick={()=>handletab(0)} className={searchbar===1 ? "" :"hidden"}>
              <input autocomplete="on" id="search-bar" type="text" placeholder="Click twice to close"/>
            </div>
          </form>
          <MagnifyingGlassIcon onClick={()=>handletab(1)} className={searchbar===1 ? "hidden" : "h-8 w-8 text-pink-500 cursor-pointer sm:inline"}/> 

<<<<<<< Updated upstream
          <Link to="/login"><button className='text-white p-4'>Sign In</button></Link>
          <Link to="/register"><button className='bg-pink-500 px-6 py-2 rounded cursor-pointer text-white'>
          Sign Up
          </button></Link>
=======
    </div>
      <div>
        <MagnifyingGlassIcon className=" hidden h-8 w-8 text-pink-500 sm:inline"/> 
        <button onClick={handleLogOut} className='text-white p-4'>CIKIS</button>
        <button className='bg-pink-500 px-6 py-2 rounded cursor-pointer text-white'>
        Sign Up
        </button>
>>>>>>> Stashed changes
      </div>
    </header>
  )
}

export default Navbar
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import Logo from '../logo.png'
import SearchBar from './SearchBar';


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

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
        <div className='flex items-center gap-[25px]'>
          <Link to='/' className='min-w-[100px] hidden md:flex'>
            <img
              alt="world of movies"
              src={Logo}
              width='150px'
              height='auto'
              className="cursor-pointer object-contain"
            />
          </Link>
      
          {user?.email ?(
            <ul className='hidden space-x-6 md:flex md:justify-center md:items-center'>
              <li className='headerLink text-white text-base'><Link to="/">Home</Link></li>
              <li className='text-center headerLink text-white text-sm'><Link to="/Recommendation">Movie Recommendation</Link></li>
              <li className='text-center headerLink text-white text-base'><Link to='/Account'>My List</Link></li>
              <li className='text-center headerLink text-white text-base'><Link to='/Watchlater'>Watch Later</Link></li>
              <li className='text-center headerLink text-white text-base'><Link to="/Search">Advanced Search</Link></li>
            </ul>
            
            ) : (
            <ul className='hidden space-x-6 md:flex md:justify-center md:items-center'>
              <li className='headerLink text-white text-base'><Link to="/">Home</Link></li>
              <li className='text-center headerLink text-white text-sm'><Link to="/Recommendation">Movie Recommendation</Link></li>

              <li className='text-center headerLink text-white text-base'><Link to="/Login">My List</Link></li>
              <li className='text-center headerLink text-white text-base'><Link to="/Login">Watch Later</Link></li>
              <li className='text-center headerLink text-white text-base'><Link to="/Search">Advanced Search</Link></li>
            </ul>
            )
          }

          {user?.email ?(
            <ul className='md:hidden space-x-5 flex justify-center items-center'>
              <li className='headerLink text-white text-sm'><Link to="/">Home</Link></li>
              <li className='text-center headerLink text-white text-sm'><Link to="/Recommendation">Movie Recommendation</Link></li>
              <li className='text-center headerLink text-white text-sm'><Link to="/Search">Advanced Search</Link></li>
            </ul>
            
            ) : (
            <ul className='md:hidden space-x-5 flex justify-center items-center'>
              <li className='headerLink text-white text-sm'><Link to="/">Home</Link></li>
              <li className='text-center headerLink text-white text-sm'><Link to="/Recommendation">Movie Recommendation</Link></li>
              <li className='text-center headerLink text-white text-sm'><Link to="/Search">Advanced Search</Link></li>
            </ul>
            )
          }
        </div>
      
      {user?.email ? (
        <div className="hidden md:flex items-center space-x-2 text-sm font-light h-10">
          <SearchBar />   
          <Link to='/Account2'><button className='text-white p-4'>Account</button></Link>
          <button onClick={handleLogout} className='bg-pink-500 px-6 py-2 rounded cursor-pointer text-white'>
            Logout
          </button>

        </div> 
        ) :(

        <div className="hidden md:flex flex-row items-center space-x-2 text-sm font-light h-10"> 
          <SearchBar />   
          <Link to='/login'><button className='text-white p-4'>Sign In</button></Link>
          <Link to='/signup'><button className='bg-pink-500 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button></Link>
          
        </div>
        
      )}

      {user?.email ? (
        <div className="md:hidden flex items-center space-x text-sm font-light h-10">
          <SearchBar />   
          <Link to='/Account2'><button className='text-white p-4  '>Account</button></Link>

        </div> 
        ) :(

        <div className="md:hidden flex flex-row items-center space-x text-sm font-light h-10"> 
          <SearchBar />   
          <Link to='/login'><button className='text-white p-4'>Sign In</button></Link>

        </div>
      )}
      
    </header>
  )
}

export default Navbar
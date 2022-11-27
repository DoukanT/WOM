import { useSelector, useDispatch } from "react-redux";
import { changeEmail, forgotPassword } from "../context/authSlice";
import {Link} from 'react-router-dom'
import React, { useState } from 'react'
import Provider from "react-redux";
import authSlice from "../context/authSlice";




export default function ForgotPassword() { 
 
  
  const [email, setEmail] = useState('');
  

  

  const handleEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    forgotPassword(email);
  };

 

  return (
    <>
      <div className='fixed pt-24 w-full h-full'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src='https://i.pinimg.com/564x/83/bd/33/83bd33c53bdaa867989cb83c83ba5b76.jpg'
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-20 z-50'>
          <div className='max-w-[450px] h-[450px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-10'>
              <h1 className='text-3xl font-bold'>Sign In</h1>
              
              <form
              onSubmit={handleSubmit}
                className='w-full flex flex-col py-4'
              >
                <input
                onSubmit={handleEmailChange}
                
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                  
                />
                
                <button className='bg-pink-500 py-3 my-6 rounded font-bold'>
                  Sign In
                </button>
                <div className='flex justify-between items-center text-sm text-gray-500'>
                  <p>
                    <input className='mr-2' type='checkbox' />
                    Remember me
                  </p>
                  {/* <p>Need Help?</p> */}
                </div>
                <p className='py-8'>
                  <span className='text-gray-500'>
                    New to TWOM?
                  </span>{' '}
                  <Link to='/Signup'>Sign Up</Link>
                  <br />
                  <span className='text-gray-500'>
                  Did you forget your password?
                  </span>{' '}
                  <Link to='/'>Forget</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}

// ikinci kez şifre istenecek // birbirleri ile tutarlı mı diye bakılacak


import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';


const Signup = () => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [cpassword, setCPassword] = useState('');
        const [isError, setIsError] = useState('');
        const { user, signUp } = UserAuth();
        const navigate = useNavigate()
        
      
      const handleSubmit = async (e) => {
            await signUp(email, password);
            if(password === cpassword ){
              navigate('/')
          } else{
            navigate('/Signup')
          }
        };

        const checkValidation= async (e)=>{
          const cpassword = e.target.value;
          setCPassword(cpassword);
          if(password === cpassword ){
            setIsError("")
          }else{
            setIsError("Confirm password is not matched!");
          }
        }
        

  return (
    <>
      <div className='fixed pt-24 w-full h-full'>
          <img
            className='hidden sm:block absolute w-full h-full object-cover'
            src='https://i.pinimg.com/564x/83/bd/33/83bd33c53bdaa867989cb83c83ba5b76.jpg'
            alt='/'
          />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 pt-20 z-50'>
          <div className='max-w-[450px] h-[490px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-10'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              <form onSubmit={handleSubmit}
                className='w-full flex flex-col py-4'
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                />
                <input
                  onChange={(e) => checkValidation(e) }
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='password'
                  placeholder='Confirm Password'
                  autoComplete='current-password'
                />
                {isError ? <p className='p-0 bg-red-700 my-0'>{isError}</p> : null}
                <button className='bg-pink-500 py-3 my-6 rounded font-bold'>
                  Sign Up
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
                  Already subscribed to TWOM?
                  </span>{' '}
                  <Link to='/login'>Sign In</Link>  
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
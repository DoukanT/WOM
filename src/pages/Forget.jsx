import {toast} from 'react-toastify'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import {getAuth,sendPasswordResetEmail} from 'firebase/auth'



function Forget(){

  const[email,setEmail] = useState('')

  const onChange = (e) => setEmail(e.target.value)

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth,email)
      toast.success('Email was sent')
      
    } catch (error) {
      toast.error('Could not send reset email')
      
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
        <div className='fixed w-full px-4 py-20 z-50'>
          <div className='max-w-[450px] h-[450px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-10'>
              <h1 className='text-3xl font-bold'>Reset Password</h1>
              
              <form
              onSubmit={onSubmit}
                className='w-full flex flex-col py-4'
              >
                <input
                onChange={onChange}
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                
            <button className='bg-pink-500 py-3 my-6 rounded font-bold'>
                  Send Reset Mail
                </button>
            
                <p className='py-8'>
                  <span className='text-gray-500'>
                    New to WOM?
                  </span>{' '}
                  <Link to='/Signup'>Sign Up</Link>
                  <br />
                  
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )

}
export default Forget
















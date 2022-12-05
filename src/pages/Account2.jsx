import React from 'react'
import { UserAuth } from '../context/AuthContext';

const Account2 = () => {
  const { user } = UserAuth();
  return (
    <>
    <div className='pt-24'>
    <div className='mx-auto max-w-6xl pt-24 pb-12 transition-all px-10 md:px-10'>
    <div>
        <h1 className='text-[white] text-3xl md:text-4xl'>Account</h1>
      </div>
    <div className='mt-6 grid-cols-1 gap-x-4 border px-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0'>
      <div className='space-y-2 py-4'>
        <h4 className='text-lg text-[gray]'>Membership</h4>
      </div>

      <div className='col-span-3'>
      <div className='flex flex-col justify-between border-b border-white/10  py-4 md:flex-row'>
        <div>
          <p className='font-medium text-[white]'>{user?.email}</p> 
          <p className='text-[white]'>Password: **********</p>
        </div>
        <div className='md:text-right'>
        <p className='cursor-pointer text-blue-500 hover:underLine'>Change email</p>
        <p className='cursor-pointer text-blue-500 hover:underLine'>Change password</p>
        </div>
      </div>
    </div>
    </div>
    <div className='mt-6 grid-cols-1 gap-x-4 border px-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0'>
      <div className='flex flex-col justify-between border-b border-white/10  py-4 md:flex-row'>
      <h4 className='text-lg text-[gray]'>Settings</h4>
     <p className='col-span-3 cursor-pointer text-blue-500 {}hover:underline'>Sign out of all devices</p>
      </div>
    </div>
    
    </div>
    </div>
    </>
    
  )
}

export default Account2
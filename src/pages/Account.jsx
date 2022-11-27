import React from 'react'
import SavedShows from '../components/SavedShows';

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img
          className='w-full h-24 object-cover'
          src='https://i.pinimg.com/564x/83/bd/33/83bd33c53bdaa867989cb83c83ba5b76.jpg'
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-24'></div>
        <div className='absolute top-[30%] p-4 md:p-8'>
          <h1 className='text-white text-3xl md:text-5xl font-bold'>My List</h1>
        </div>
      </div>
      <SavedShows />
    </>
  )
}

export default Account
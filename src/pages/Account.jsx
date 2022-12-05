import React from 'react'
import SavedShows from '../components/SavedShows';
import UnlikedShows from '../components/UnlikedShows';

const Account = () => {
  return (
    <>
      <div className='w-full text-white h-24'>
        <div className='bg-black/60 fixed top-0 left-0 w-full h-24'></div>
        <div className='absolute top-[30%] p-4 md:p-8'>
          <h1 className='text-white text-3xl md:text-5xl font-bold'>My List</h1>
        </div>
      </div>
      <SavedShows />
      <UnlikedShows />

    </>
  )
}

export default Account
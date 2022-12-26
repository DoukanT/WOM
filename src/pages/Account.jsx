import React from 'react'
import SavedShows from '../components/SavedShows';
import UnlikedShows from '../components/UnlikedShows';

const Account = () => {
  return (
    <>
      <div className='w-full text-black'>
        <div className='pt-24'>
        <h1 className='text-white text-3xl font-bold p-6'>My List</h1>
        <SavedShows />
        <UnlikedShows />
        </div>
      </div>
    </>
  )
}

export default Account
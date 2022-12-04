import React from 'react'
import { useLocation } from 'react-router-dom';


const AdvancedSearchResults = () => {
  const data = useLocation();
  const url = data.state.url;
  return (
    <div className='w-100% h-auto ml-3'>
      <h2 className='pt-28 text-white font-bold md:text-xl p-4'>Search results for '{url}'</h2>
      
    </div>
  )
}

export default AdvancedSearchResults
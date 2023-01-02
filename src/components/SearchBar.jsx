import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/SearchResults", { state: { query: query } })
  }
    
    const [searchbar, setSearchbar] = useState(0);
    const handletab=(e)=>{
    setSearchbar(e);
  }
  return (
    <div className="flex items-center space-x-4 text-sm font-light ">
      <form onSubmit={handleSubmit}>
      <div onLoadStart={()=>handletab(0)} onDoubleClick={()=>handletab(0)} className={searchbar===1 ? "" :"hidden"}>
              <input 
                className='h-7 w-20 sm:h-7 sm:w-40 md:h-7 md:w-60 mt-1 text-gray-900 font-medium p-2 placeholder-pink-500'
                type="text"
                placeholder="Click twice to close" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              /> </div>
      </form>
      <MagnifyingGlassIcon onClick={()=>handletab(1)} className={searchbar===1 ? "hidden" : "h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-pink-500 cursor-pointer sm:inline"}/>
    </div>
  )
}


export default SearchBar
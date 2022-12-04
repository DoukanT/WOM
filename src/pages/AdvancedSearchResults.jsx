import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';


const AdvancedSearchResults = () => {
  const data = useLocation();
  const url = data.state.url;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovies(response.data.results);
    });
  }, [url]);

  return (
    <div className='w-100% h-auto ml-3'>
      <h2 className='pt-28 text-white font-bold md:text-xl p-4'>{url}</h2>
      <div className='flex flex-wrap scroll-smooth scrollbar-hide relative'>
      {movies.map((item, id) => (
        <Movie key={id} item={item} />
      ))}
      </div>
    </div>
  )
}

export default AdvancedSearchResults
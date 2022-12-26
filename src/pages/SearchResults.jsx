import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import requests from '../Requests';
import axios from 'axios';
import Movie from '../components/Movie';

const SearchResults = () => {
  const data = useLocation();
  const query = data.state.query;
  const [movies, setMovies] = useState([]);
  const fetchURL = "https://api.themoviedb.org/3/search/movie?api_key="+requests.key+"&query="+query+"&page=1"

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  return (
    <div className='w-100% h-auto ml-3'>
      <h2 className='pt-28 text-white font-bold md:text-xl p-4'>Search results for '{query}'</h2>
      <div className='flex flex-wrap scroll-smooth scrollbar-hide relative'>
      {movies.map((item, id) => (
        <Movie key={id} item={item} />
      ))}
      </div>
    </div>
  )
}

export default SearchResults
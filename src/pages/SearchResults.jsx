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
    <>
    <h2 className='pt-20 text-white font-bold md:text-xl p-4'>Search results for '{query}'</h2>
    <div className='items-center w-full h-full scroll-smooth scrollbar-hide relative'>
      {movies.map((item, id) => (
        <Movie key={id} item={item} />
      ))}
    </div>
    </>
  )
}

export default SearchResults
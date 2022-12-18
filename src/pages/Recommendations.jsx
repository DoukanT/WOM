import React from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import requests from '../Requests';
import axios from 'axios';
import Movie from '../components/Movie';

const Recommendations = () => {
  const data = useLocation();
  const movieID= data.state.id;
  const movieTitle= data.state.name;

  console.log(data)
  const [movies, setMovies] = useState([]);

  const fetchURL = "https://api.themoviedb.org/3/movie/"+movieID+"/similar?api_key="+requests.key+"&page=1"

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  return (
    <div className='w-100% h-auto ml-3'>
      <h2 className='pt-28 text-white font-bold md:text-xl p-4'>Similar movies to '{movieTitle}'</h2>
      <div className='flex flex-wrap scroll-smooth scrollbar-hide relative'>
      {movies.map((item, id) => (
        <Movie key={id} item={item} />
      ))}
      </div>
    </div>
  )
}

export default Recommendations
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import requests from '../Requests';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const GenreRecommendation = ({ title, rowID }) => {
    var searchUrl='https://api.themoviedb.org/3/discover/movie?api_key='+requests.key+'&sort_by=popularity.desc&include_adult=false&page=1&with_genres=36'
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      axios.get(searchUrl).then((response) => {
        setMovies(response.data.results);
      });
    }, [searchUrl]);
    console.log(movies)

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
        <div
          id={'slider' + rowID}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
      </div>
    </>
  );
};

export default GenreRecommendation;
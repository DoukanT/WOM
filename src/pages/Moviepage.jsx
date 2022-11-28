import React from 'react';
import { useLocation } from 'react-router-dom';
import MovieInfo from '../components/MovieInfo';

const Moviepage = () => {
  const data = useLocation();
  const movieID2= data.state.id;

  return (
    <>
      <div className='pt-20'>
        <MovieInfo movieID2={movieID2}/>
      </div>
    </>
  )
}

export default Moviepage 
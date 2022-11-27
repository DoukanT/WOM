import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import requests from '../Requests';
import axios from 'axios';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';


const MovieInfo = (movieID2) => {
    const [movie, setMovies] = useState([]);
    const requestMovie="https://api.themoviedb.org/3/movie/"+movieID2.movieID2+"?api_key="+requests.key+"&language=en-US"
  useEffect(() => {
    axios.get(requestMovie).then((response) => {
    setMovies(response.data);
    });
  }, [requestMovie]);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };
  const [push, setPush] = useState(false);
  const [watch, setWatch] = useState(false);
  const { user } = UserAuth();
  const movieID = doc(db, 'users', `${user?.email}`);


  const watchLater = async () => {
    if (user?.email) {
      setPush(!push);
      setWatch(true);
      await updateDoc(movieID, {
        watchedLater: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };

  return (
    <div className=' w-full h-[600px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
        <img
          className='w-full h-[600px] object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
  
        />
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
              I've already watched this
            </button>
            <button onClick={watchLater}>
              {push ? (
              <p className='border bg-gray-300 text-black border-gray-300 py-2 px-5 ml-4'>Added</p>
              ) :(
              <p  className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</p>
              )}
            </button>
          </div>
          <p className='text-gray-400 text-sm'>
            Released: {movie?.release_date}
          </p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
            {truncateString(movie?.overview)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
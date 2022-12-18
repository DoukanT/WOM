import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import requests from '../Requests';
import axios from 'axios';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import {  AiTwotoneLike, AiTwotoneDislike} from 'react-icons/ai';
import {  BiLike, BiDislike} from 'react-icons/bi';
import Platforms from '../components/Platforms'

const MovieInfo = (movieID2) => {
  
  const [push, setPush] = useState(false);
  const [watch, setWatch] = useState(false);
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const [notlike, setNotlike] = useState(false);
  const [unliked, setUnliked] = useState(false);

  const { user } = UserAuth();
  const movieID = doc(db, 'users', `${user?.email}`);
  const [movie, setMovies] = useState([]);
  const requestMovie="https://api.themoviedb.org/3/movie/"+movieID2.movieID2+"?api_key="+requests.key+"&language=en-US"
  const [cast, setCast] = useState([]);
  const requestCast= "https://api.themoviedb.org/3/movie/"+movieID2.movieID2+"/credits?api_key="+requests.key+"&language=en-US"

  useEffect(() => {
    axios.get(requestMovie).then((response) => {
      setMovies(response.data);
    });
  }, [requestMovie]);
  useEffect(() => {
    axios.get(requestCast).then((response) => {
      setCast(response.data);
    });
  }, [requestCast]);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };
  if (!movie?.genres) {
    return null
  }
  if (!cast?.cast) {
    return null
  }

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

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };

  const unlikeShows = async () => {
    if (user?.email) {
      setNotlike(!notlike);
      setUnliked(true);
      await updateDoc(movieID, {
        unlikedShows: arrayUnion({
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
    <div className='max-w-full h-[1000px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[1000px] bg-gradient-to-r from-black'></div>
        <img
          className='w-full h-[1000px] object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
          alt={movie?.title}
        />
        <div className='absolute w-full top-[20%] p-4 md:p-8 flex flex-row-reverse'>

        <div className='w-[100px] h-[100px] bg-white/70 text-pink-500 text-3xl border-red-700 border-solid border-[5px] rounded-full flex justify-center items-center px-[40px] py-[40px]'>
            <p>{movie?.vote_average.toFixed(1)}</p>
        </div>

          <div className='bg-gray-400/20 mr-[750px] pl-6 pr-6 pt-4 pb-4'>
            <h1 className='text-3xl md:text-5xl font-bold underline underline-offset-8'>{movie?.title}</h1>
            <div className='mb-8 mt-10'>
                <button onClick={watchLater}>
                  {push ? (
                  <p className='border bg-pink-500 text-white border-pink-500 py-2 px-5'>Added</p>
                  ) :(
                  <p  className='border border-[2px] text-white border-pink-500 py-2 px-5'>Watch Later</p>
                  )}
                </button>
                <button className='top-[25%] px-4'>
                  <p onClick={saveShow} >
                  {like ? (
                    <AiTwotoneLike className=' h-8 w-8 top-4 left-4 text-pink-500 sm:inline' />
              
                  ) : ( 
                    <BiLike className=' h-8 w-8 top-4 left-4 sm:inline' />
                  )}

                  </p> 
                </button>
                <button className='top-[25%] px-4'>
                  <p onClick={unlikeShows} >
                    {notlike ? (
                      <AiTwotoneDislike className='h-8 w-8 top-4 left-8 text-pink-500 sm:inline' />
                    
                    ) : (
                      <BiDislike className='h-8 w-8 top-4 left-8 sm:inline ' />
                    )}
                  </p> 
                </button> 
              </div>
          {/* <div className='text-white text-base flex '>
            <p className='text-pink-500 text-base' >Score: </p>
            <p>{movie?.vote_average.toFixed(1)}</p>
          </div> */}
        
          <div className='flex pb-[5px]'>
          <p className='text-pink-500 text-base' >Genres: </p> <p className='opacity-0'>""""</p>
            {movie?.genres.map(({ id, name }) => (
            <p key={id}>{name}&nbsp;</p>
          ))}
          </div>

          <div className='text-white text-base flex  pb-[5px]'>
            <p className='text-pink-500 text-base ' >Released: </p><p className='opacity-0'>" "</p>
            <p>{movie?.release_date}</p>
          </div>
          <div className='text-white text-base flex  pb-[5px]'>
            <p className='text-pink-500 text-base '>Runtime:</p><p className='opacity-0'>""</p>
            <p>{movie?.runtime} minutes</p>
          </div>
          
          <div className='flex'>
            <p className='text-pink-500 text-base  pb-[5px]'>Actors: </p> <p className='opacity-0'>"."""</p>
            <p> {cast?.cast[0]?.name}, &nbsp;</p>
            <p>{cast?.cast[1]?.name}, &nbsp;</p>
            <p>{cast?.cast[2]?.name}</p>
          </div>

          <div className='flex'>
            <p className='text-pink-500 text-base  pb-[5px]'>Plot: </p> <p className='opacity-0'>""""""".</p>
            <p className='w-full md:max-w-[70%] lg:max-w-[90%] xl:max-w-[95%] text-gray-200'>
            
            {truncateString(movie?.overview)} </p>
          </div>

          <div className='flex gap-5' >
            <Platforms movie={movieID2.movieID2}/>
          </div>
          </div>
          <div>
        </div>

          

        </div>
      </div>
    </div>
  );
};

export default MovieInfo;

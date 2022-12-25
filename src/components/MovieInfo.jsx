import React from 'react'
import { useEffect, useState} from 'react';
import requests from '../Requests';
import axios from 'axios';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { AiTwotoneLike, AiTwotoneDislike} from 'react-icons/ai';
import { BiLike, BiDislike} from 'react-icons/bi';
import Platforms from '../components/Platforms'
import CircleIcon from '@mui/icons-material/Circle';
import { useNavigate } from 'react-router-dom';

const MovieInfo = (movieID2) => {
  const navigate = useNavigate();
  const { user } = UserAuth();
  const [movie, setMovies] = useState([]);
  const [cast, setCast] = useState([]);
  const requestMovie="https://api.themoviedb.org/3/movie/"+movieID2.movieID2+"?api_key="+requests.key+"&language=en-US"
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

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [later, setLater] = useState(false);
  const [likedList, setlikedList] = useState([]);
  const [dislikedList, setdislikedList] = useState([]);
  const [laterList, setlaterList] = useState([]);

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setlikedList(doc.data()?.savedShows);
    });
  }, [user?.email]);
  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setdislikedList(doc.data()?.unlikedShows);
    });
  }, [user?.email]);
  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setlaterList(doc.data()?.watchedLater);
    });
  }, [user?.email]);
  //like
  useEffect(() => {
    const storedValue = localStorage.getItem(`likeState_${movie.id}`);
    if (storedValue) {
      setLiked(JSON.parse(storedValue));
    }
  }, [movie]);

  useEffect(() => {
    localStorage.setItem(`likeState_${movie.id}`, JSON.stringify(liked));
  }, [movie.id, liked]);
  //dislike
  useEffect(() => {
    const storedValue = localStorage.getItem(`unlikeState_${movie.id}`);
    if (storedValue) {
      setDisliked(JSON.parse(storedValue));
    }
  }, [movie]);

  useEffect(() => {
    localStorage.setItem(`unlikeState_${movie.id}`, JSON.stringify(disliked));
  }, [movie.id, disliked]);
  //later
  useEffect(() => {
    const storedValue = localStorage.getItem(`laterState_${movie.id}`);
    if (storedValue) {
      setLater(JSON.parse(storedValue));
    }
  }, [movie]);

  useEffect(() => {
    localStorage.setItem(`laterState_${movie.id}`, JSON.stringify(later));
  }, [movie.id, later]);

  const userID = doc(db, 'users', `${user?.email}`);

  console.log(movie)
  const likeMovie = async () => {
    if (user?.email) {
      setLiked(true);
      await updateDoc(userID, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
          genre: movie.genres[0].id,
          actor: cast.cast[0].id,
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };
  const unlikeMovie = async (passedID) => {
    setLiked(false)
      try {
        const result = likedList.filter((movie) => movie.id !== passedID)
        await updateDoc(userID, {
            savedShows: result
        })
      } catch (error) {
          console.log(error)
      }
  };

  const dislikeMovie = async () => {
    if (user?.email) {
      setDisliked(true)
      await updateDoc(userID, {
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
  const undislikeMovie = async (passedID) => {
    setDisliked(false)
    try {
      const result = dislikedList.filter((movie) => movie.id !== passedID)
      await updateDoc(userID, {
          unlikedShows: result
      })
    } catch (error) {
        console.log(error)
    }
  };
  const watchLater = async () => {
    if (user?.email) {
      setLater(true)
      await updateDoc(userID, {
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
  const unlaterMovie = async (passedID) => {
    setLater(false)
    try {
      const result = laterList.filter((movie) => movie.id !== passedID)
      await updateDoc(userID, {
          watchedLater: result
      })
    } catch (error) {
        console.log(error)
    }
  };

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
  
console.log(likedList)
console.log(liked+'/'+disliked+'/'+later)
  return (
    <div className='max-w-full h-[1000px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[1000px] bg-black/70'></div>
        <img
          className='w-full h-[1000px] object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
          alt={movie?.title}
        />

        <div className='absolute w-full top-[70px] md:p-8'>
          <div className='flex flex-col'>
            <div className='flex justify-end items-end justify-items-end mr-[25px]'>
              <div className=' w-[90px] h-[90px] bg-white/70 text-pink-500 text-2xl border-red-700 border-solid border-[3px] rounded-full flex justify-center items-center px-[20px] py-[20px]'>
                  <div className='flex flex-col flex justify-center leading-6'>
                    <p>{movie?.vote_average.toFixed(1)}/10</p>
                    <p className='text-base text-black flex justify-center leading-3'>score</p></div>
              </div>
            </div>

            <div className='pl-6 pr-6 pt-5 mb-[50px] flex flex-row justify-between'>
              <div className='flex flex-row justify-center items-center gap-[30px]'>
                <h1 className='text-[45px] font-bold flex justify-start underline underline-offset-8'>{movie?.title}</h1>
                <Platforms movie={movieID2.movieID2}/>
              </div>

              <div className='flex justify-end items-end justify-items-end'>
                  
                  <button className='pb-[8px] px-2'>
                    <p>
                    {liked ? (
                      <AiTwotoneLike  onClick={()=> unlikeMovie(movie.id)} className=' h-8 w-8 top-4 left-4 text-pink-500 sm:inline' />
                
                    ) : ( 
                     <BiLike onClick={likeMovie} className=' h-8 w-8 top-4 left-4 sm:inline' />
                    )}
                    </p> 
                  </button>

                  <button className='pb-[8px] px-6'>
                    <p>
                      {disliked ? (
                        <AiTwotoneDislike onClick={()=> undislikeMovie(movie.id)} className='h-8 w-8 top-4 left-8 text-pink-500 sm:inline' />
                      
                      ) : (
                        <BiDislike onClick={dislikeMovie} className='h-8 w-8 top-4 left-8 sm:inline ' />
                      )}
                    </p> 
                  </button> 
                  
                  <button >
                  <div >
                    {later ? (
                    <p onClick={()=> unlaterMovie(movie.id)} className='border bg-pink-500 text-white border-pink-500 py-2 px-5'>Added</p>
                    ) :(
                    <p onClick={watchLater} className='border border-[2px] text-white border-pink-500 py-2 px-5'>Watch Later</p>
                    )}
                  </div>

                  </button>
                 

                  <button onClick={() => navigate("/SimilarsPage", { state: {name:movie?.title, id: movie?.id } })} >
                    <p className='border border-[2px] text-white border-pink-500 py-2 px-5 ml-[20px]'>Similar Movies</p>
                  </button>

                </div>
              </div>
              
              <div>
                <p className='flex justify-center text-center mr-[8%] ml-[5%]'>
                  {truncateString(movie?.overview)} 
                </p>
              </div>
                
              <div className='flex flex-row justify-evenly mt-[50px]'>
                <div className='flex flex-col pb-[20px] pt-[10px] pr-[40px] pl-[40px]'>
                  <p className='text-pink-500 text-[28px] leading-loose flex justify-center underline underline-offset-4' >Genres: </p>
                    <div className='flex flex-col items-center'>
                    {movie?.genres.map(({ id, name }) => (
                    <p key={id}><CircleIcon sx={{ fontSize: 7 }}/>&nbsp;{name}&nbsp;</p>
                    ))}
                    </div>
                </div>

                <div className='flex flex-col pb-[20px] pt-[10px] pr-[40px] pl-[40px]'>
                  <p className='text-pink-500 text-[28px] leading-loose flex justify-center underline underline-offset-4' >Released: </p>
                  <p className='flex justify-center items-center'>{movie?.release_date}</p>
                </div>

                <div className='flex flex-col pb-[20px] pt-[10px] pr-[40px] pl-[40px]'>
                  <p className='text-pink-500 text-[28px] leading-loose flex justify-center underline underline-offset-4'>Runtime:</p>
                  <p className='flex justify-center items-center'>{movie?.runtime} minutes</p>
                </div>

                <div className='flex flex-col pb-[20px] pt-[10px] pr-[40px] pl-[40px]'>
                  <p className='text-pink-500 text-[28px] leading-loose flex justify-center underline underline-offset-4'>Actors: </p>
                  <div className='flex flex-col items-center'> 
                    <p><CircleIcon sx={{ fontSize: 7 }}/>&nbsp; {cast?.cast[0]?.name} &nbsp;</p>
                    <p><CircleIcon sx={{ fontSize: 7 }}/>&nbsp;{cast?.cast[1]?.name} &nbsp;</p>
                    <p><CircleIcon sx={{ fontSize: 7 }}/>&nbsp;{cast?.cast[2]?.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    )};

export default MovieInfo;

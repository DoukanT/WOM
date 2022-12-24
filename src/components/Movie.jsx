import React, { useState, useEffect} from 'react';
import { FaHeart, FaRegHeart} from 'react-icons/fa';
import {  MdOutlineWatchLater, MdOutlineCheck} from 'react-icons/md';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';



const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [add, setAdd] = useState(false);
  const [saved, setSaved] = useState(false);
  const [watch, setWatch] = useState(false);
  const { user } = UserAuth();
  const [movies3, setMovies3] = useState([]);
  const navigate = useNavigate();

  const movieID = doc(db, 'users', `${user?.email}`);

  useEffect(() => {
    const storedValue = localStorage.getItem(`likeState_${item.id}`);
    if (storedValue) {
      setLike(JSON.parse(storedValue));
    }
  }, [item]);

  useEffect(() => {
    localStorage.setItem(`likeState_${item.id}`, JSON.stringify(like));
  }, [item.id, like]);

  useEffect(() => {
    const storedValue = localStorage.getItem(`laterState_${item.id}`);
    if (storedValue) {
      setAdd(JSON.parse(storedValue));
    }
  }, [item.id]);

  useEffect(() => {
    localStorage.setItem(`laterState_${item.id}`, JSON.stringify(add));
  }, [item.id, add]);

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies3(doc.data()?.savedShows);
    });
  }, [user?.email]);

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies3(doc.data()?.watchedLater);
    });
  }, [user?.email]);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      localStorage.setItem(`likeState_${item.id}`, !like)
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };

  const movieRef = doc(db, 'users', `${user?.email}`)
  const deleteShow = async (passedID) => {
    setLike(!like);
      try {
        const result = movies3.filter((item) => item.id !== passedID)
        await updateDoc(movieRef, {
            savedShows: result
        })
      } catch (error) {
          console.log(error)
      }
  }

  const watchLater = async () => {
    if (user?.email) {
      setAdd(!add);
      localStorage.setItem(`laterState_${item.id}`, !add)
      setWatch(true);
      await updateDoc(movieID, {
        watchedLater: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };

  const movieRef2 = doc(db, 'users', `${user?.email}`)
  const deleteShow2 = async (passedID) => {
    setAdd(!add);
    try {
      const result = movies3.filter((item) => item.id !== passedID)
      await updateDoc(movieRef2, {
          watchedLater: result
      })
    } catch (error) {
        console.log(error)
    }
}

    return (
      <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
        <img
          className='w-full h-auto block'
          src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
          alt={item?.title}
        />
      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
          <p  onClick={() => navigate("/Moviepage", { state: { id: item?.id } })} className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
            {item?.title}
          </p>
        
          <p>
          {like ? (
            <FaHeart onClick={()=> deleteShow(item.id)} className='h-6 w-6 absolute top-5 left-3 text-gray-300' />
          ) : (
            <FaRegHeart onClick={saveShow} className='h-6 w-6 absolute top-5 left-3 text-gray-300' />
          )}
        </p> 

        <p>
          {add ? (
            <MdOutlineCheck onClick={()=> deleteShow2(item.id)} className='h-6 w-6 absolute top-5 left-10 text-gray-300' />
          ) : (
            <MdOutlineWatchLater onClick={watchLater} className='h-6 w-6 absolute top-5 left-10 text-gray-300' />
          )}
        </p> 
        </div>  
      </div>
    );
  };
  
  export default Movie;
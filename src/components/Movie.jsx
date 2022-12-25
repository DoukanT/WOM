import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import requests from "../Requests";
import { MdOutlineWatchLater, MdOutlineCheck } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Movie = ({ item }) => {
  const [liked, setLiked] = useState(false);
  const [later, setLater] = useState(false);
  const [likedList, setlikedList] = useState([]);
  const [laterList, setlaterList] = useState([]);
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [cast, setCast] = useState([]);
  const requestCast =
    "https://api.themoviedb.org/3/movie/" +
    item?.id +
    "/credits?api_key=" +
    requests.key +
    "&language=en-US";
  const userID = doc(db, "users", `${user?.email}`);

  useEffect(() => {
    axios.get(requestCast).then((response) => {
      setCast(response.data);
    });
  }, [requestCast]);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setlikedList(doc.data()?.savedShows);
    });
  }, [user?.email]);
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setlaterList(doc.data()?.watchedLater);
    });
  }, [user?.email]);
  //like
  useEffect(() => {
    const storedValue = localStorage.getItem(`likeState_${item?.id}`);
    if (storedValue) {
      setLiked(JSON.parse(storedValue));
    }
  }, [item]);

  useEffect(() => {
    localStorage.setItem(`likeState_${item?.id}`, JSON.stringify(liked));
  }, [item?.id, liked]);
  //later
  useEffect(() => {
    const storedValue = localStorage.getItem(`laterState_${item?.id}`);
    if (storedValue) {
      setLater(JSON.parse(storedValue));
    }
  }, [item]);

  useEffect(() => {
    localStorage.setItem(`laterState_${item?.id}`, JSON.stringify(later));
  }, [item?.id, later]);
  const likeMovie = async () => {
    if (user?.email) {
      setLiked(true);
      await updateDoc(userID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
          genre: item.genre_ids[0],
          actor: cast.cast[0].id,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };
  const unlikeMovie = async (passedID) => {
    setLiked(false);
    try {
      const result = likedList.filter((item) => item?.id !== passedID);
      await updateDoc(userID, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const watchLater = async () => {
    if (user?.email) {
      setLater(true);
      await updateDoc(userID, {
        watchedLater: arrayUnion({
          id: item?.id,
          title: item?.title,
          img: item?.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };
  const unlaterMovie = async (passedID) => {
    setLater(false);
    try {
      const result = laterList.filter((movie) => movie.id !== passedID);
      await updateDoc(userID, {
        watchedLater: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (!cast?.cast) {
    return null;
  }
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p
          onClick={() => navigate("/Moviepage", { state: { id: item?.id } })}
          className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center"
        >
          {item?.title}
        </p>

        <p>
          {liked ? (
            <FaHeart
              onClick={() => unlikeMovie(item?.id)}
              className="h-6 w-6 absolute top-5 left-3 text-gray-300"
            />
          ) : (
            <FaRegHeart
              onClick={likeMovie}
              className="h-6 w-6 absolute top-5 left-3 text-gray-300"
            />
          )}
        </p>

        <p>
          {later ? (
            <MdOutlineCheck
              onClick={() => unlaterMovie(item?.id)}
              className="h-6 w-6 absolute top-5 left-10 text-gray-300"
            />
          ) : (
            <MdOutlineWatchLater
              onClick={watchLater}
              className="h-6 w-6 absolute top-5 left-10 text-gray-300"
            />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;

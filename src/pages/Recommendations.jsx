import React from "react";
import requests from "../Requests";
import Row from "../components/Row";
import { doc, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";

const Recommendations = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  var genreUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
    requests.key +
    "&sort_by=popularity.desc&include_adult=false&page=1&with_genres=36";
  var castUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
    requests.key +
    "&sort_by=popularity.desc&include_adult=false&page=1&with_cast=287";
  console.log(movies);
  movies?.forEach((movie) => {
    console.log(movie.title + "+" + movie.actor + "+" + movie.genre);
  });
  // for (let index = 0; index < movies.length; index++) {
  //   console.log(movies[index]?.actor);
  // }
  if (!movies) {
    return null;
  }
  return (
    <>
      <div className="pt-24">
        <Row rowID="1" title="You like action" fetchURL={genreUrl} />
        <Row rowID="2" title="You love Brad Pitt" fetchURL={castUrl} />
      </div>
    </>
  );
};

export default Recommendations;

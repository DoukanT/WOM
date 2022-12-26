import React from "react";
import requests from "../Requests";
import Row from "../components/Row";
import { doc, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";

const Recommendations = () => {
  const [list, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  var genreUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
    requests.key +
    "&sort_by=vote_average.desc&include_adult=false&vote_count.gte=1000&page=1&with_genres=";
  var castUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
    requests.key +
    "&sort_by=vote_average.desc&include_adult=false&vote_count.gte=1000&page=1&with_cast=";

  if (!list) {
    return null;
  }
  var castTitle = "From the lead role of ";
  var genreTitle = "Best movies with genre of ";
  return (
    <>
      <div className="pt-24">
        <div
          id={"slider" + 1}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {list?.map((movie) => (
            <Row
              key={movie.id}
              rowID={movie.id}
              title={castTitle + movie?.title}
              fetchURL={castUrl + movie?.actor}
            />
          ))}
        </div>
        <div
          id={"slider" + 2}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {list?.map((movie) => (
            <Row
              key={movie.id}
              rowID={movie.id}
              title={genreTitle + movie?.title}
              fetchURL={genreUrl + movie?.genre}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Recommendations;

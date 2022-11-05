import requests from '../Requests'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Moviepage.css"
import { useLocation } from 'react-router-dom';
import Main from '../components/MovieInfo';



const Moviepage = () => {
  const data = useLocation();
  const movieID= data.state.id;
  const requestMovie= 'https://api.themoviedb.org/3/movie/${data.state.id}?api_key=${Requests.key}&language=en-US'
  

  return (
    <>
      <div class='pt-20'>
        
        <Main movieID={movieID}/>
      </div>
    </>
  )
}

export default Moviepage
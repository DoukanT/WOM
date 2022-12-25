import React from 'react'
import Netflix from '../netflix.png'
import Prime from '../prime.png'
import Disney from '../disney.png'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';


const Platforms = (movie) => {
  const [movie2, setMovies2] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://streaming-availability.p.rapidapi.com/get/basic',
        params: {country: 'tr', tmdb_id: 'movie/'+movie.movie},
        headers: {
            'X-RapidAPI-Key': '1ce39703e5msh6a48dc1323626e2p170493jsna9f1fb203fc0',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
        };
    useEffect(() => {
        axios.request(options).then(function (response) {
        setMovies2(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, []);
    if (!movie2) {
        return null
      }
  return (
    <div className='flex gap-5'>      
        { movie2?.streamingInfo?.disney?.tr?.link && <a href={movie2?.streamingInfo?.disney?.tr?.link}><img alt='disneylogo' width={50} height={50} src={Disney}/></a> }
        { movie2?.streamingInfo?.prime?.tr?.link && <a href={movie2?.streamingInfo?.prime?.tr?.link}><img alt='primelogo' width={50} height={50} src={Prime}/></a>}
        { movie2?.streamingInfo?.netflix?.tr?.link && <a href={movie2?.streamingInfo?.netflix?.tr?.link}><img alt='netflixlogo' width={50} height={50} src={Netflix}/></a>}
    </div>
  )
}
export default Platforms

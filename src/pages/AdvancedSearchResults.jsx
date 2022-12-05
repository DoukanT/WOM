import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import { useNavigate } from 'react-router-dom';

const AdvancedSearchResults = () => {
  const data = useLocation();
  var url = data.state.url;
  var pageNumber=data.state.pageNumber
  const navigate = useNavigate();
  console.log(url)

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovies(response.data.results);
    });
  }, [url]);
  const submitButton = () => {

    url=url.replace('&page='+pageNumber,'')
    url=url+'&page='+(pageNumber+1)
    pageNumber=pageNumber+1
    navigate("/AdvancedSearchResults", { state: { url: url,pageNumber: pageNumber } })
  }
  const submitButton2 = () => {
    url=url.replace('&page='+pageNumber,'')
    pageNumber=pageNumber-1
    url=url+'&page='+pageNumber
    navigate("/AdvancedSearchResults", { state: { url: url,pageNumber: pageNumber } })
  }

  return (
    <div className='w-100% h-auto ml-3'>
      <h2 className='pt-28 text-white font-bold md:text-xl p-4'>Search Results Page {pageNumber}</h2>
      <div className='flex flex-wrap scroll-smooth scrollbar-hide relative'>
      {movies.map((item, id) => (
        <Movie key={id} item={item} />
      ))}
      </div>
        <div className='w-full h-[100px] flex flex-wrap items-center justify-center'>
          <button onClick={() => submitButton2()} className='mr-[30px] bg-pink-500 px-[37px] py-[15px] rounded font-bold text-black hover:text-white hover:bg-pink-800'>
            Previous
          </button>
          <button onClick={() => submitButton()} className='bg-pink-500 px-[50px] py-[15px] rounded font-bold text-black hover:text-white hover:bg-pink-800'>
            Next
          </button>
        </div>
    </div>
  )
}

export default AdvancedSearchResults
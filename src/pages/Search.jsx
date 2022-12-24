import React, { useState, useEffect } from 'react';
import { MultiSelect } from "react-multi-select-component";
import {genres, languages} from "./options"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { pink } from '@mui/material/colors';
import requests from '../Requests';
import { useNavigate } from 'react-router-dom';


const Search = () => {
  var pageNumber=1
  var searchUrl="https://api.themoviedb.org/3/discover/movie?api_key="+requests.key+'&include_adult=false'+'&page='+pageNumber
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [minYearValue, setminYearValue] = React.useState("");
  const [maxYearValue, setmaxYearValue] = React.useState("");
  const [minTimeValue, setminTimeValue] = React.useState("");
  const [maxTimeValue, setmaxTimeValue] = React.useState("");
  const [minScoreValue, setminScoreValue] = React.useState("");
  const [maxScoreValue, setmaxScoreValue] = React.useState("");
  const navigate = useNavigate();
  
  
  useEffect(() => {
    const storedText = localStorage.getItem('minYearValue');
    if (storedText) {
      setminYearValue(storedText);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('minYearValue', minYearValue);
  }, [minYearValue]);
  useEffect(() => {
    const storedText = localStorage.getItem('maxYearValue');
    if (storedText) {
      setmaxYearValue(storedText);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('maxYearValue', maxYearValue);
  }, [maxYearValue]);

  useEffect(() => {
    const storedText = localStorage.getItem('minTimeValue');
    if (storedText) {
      setminTimeValue(storedText);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('minTimeValue', minTimeValue);
  }, [minTimeValue]);

  useEffect(() => {
    const storedText = localStorage.getItem('maxTimeValue');
    if (storedText) {
      setmaxTimeValue(storedText);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('maxTimeValue', maxTimeValue);
  }, [maxTimeValue]);

useEffect(() => {
  const storedText = localStorage.getItem('minScoreValue');
  if (storedText) {
    setminScoreValue(storedText);
  }
}, []);
useEffect(() => {
  localStorage.setItem('minScoreValue', minScoreValue);
}, [minScoreValue]);

useEffect(() => {
  const storedText = localStorage.getItem('maxScoreValue');
  if (storedText) {
    setmaxScoreValue(storedText);
  }
}, []);
useEffect(() => {
  localStorage.setItem('maxScoreValue', maxScoreValue);
}, [maxScoreValue]);
  
  const submitButton = (event) => {
    event.preventDefault();

    if(minTimeValue.length>0){
      searchUrl = searchUrl+'&with_runtime.gte='+minTimeValue
    }
    if(maxTimeValue.length>0){
      searchUrl = searchUrl+'&with_runtime.lte='+maxTimeValue
    }
    if(minYearValue.length>0){
      searchUrl = searchUrl+'&release_date.gte='+minYearValue
    }
    if(maxYearValue.length>0){
      searchUrl = searchUrl+'&release_date.lte='+maxYearValue
    }
    if(minScoreValue.length>0){
      searchUrl = searchUrl+'&vote_average.gte='+minScoreValue
    }
    if(maxScoreValue.length>0){
      searchUrl = searchUrl+'&vote_average.lte='+maxScoreValue
    }
    if(selectedLanguage.length>0){
      selectedLanguage.map(item => {
        searchUrl = searchUrl+'&with_original_language='+item.value

      })
    }
    if(selectedGenre.length>0){
      searchUrl = searchUrl+'&with_genres='
      selectedGenre.map(item => {
        searchUrl = searchUrl+item.value+','
      })
    }
    navigate("/AdvancedSearchResults", { state: { url: searchUrl, pageNumber: pageNumber } })
  }

  const onChangeYear = event => {
    setminYearValue(event.target.value);
  };
  const onChangeYear2 = event => {
    setmaxYearValue(event.target.value);  
  };

  const onChangeTime = event => {
    setminTimeValue(event.target.value);
  };
  const onChangeTime2 = event => {
    setmaxTimeValue(event.target.value);  
  };

  const onChangeScore = event => {
    setminScoreValue(event.target.value);
  };
  const onChangeScore2 = event => {
    setmaxScoreValue(event.target.value);  
  };
 
  return (
    <div className='pt-[130px] pb-10 w-full h-full'>
      <div className='sm:mx-[20px] md:mx-[90px] lg:mx-[180px] xl:mx-[310px]' style={{boxShadow: "rgba(240, 46, 170, 0.17) 0px 23px 25px 0px inset, rgba(240, 46, 170, 0.15) 0px 36px 30px 0px inset, rgba(240, 46, 170, 0.1) 0px 79px 40px 0px inset, rgba(240, 46, 170, 0.17) 0px -23px 25px 0px inset, rgba(240, 46, 170, 0.15) 0px -36px 30px 0px inset, rgba(240, 46, 170, 0.1) 0px -79px 40px 0px inset"}}>
        <div className='flex flex-col items-center justify-items-center py-[70px] gap-2'>
          <h1 className='text-white font-medium text-xl'>Genre(s)</h1>
          <MultiSelect
            className="text-gray-700 w-[400px] h-[55px] border border-pink-500 p-2 rounded "
            hasSelectAll={false}
            options={genres}
            value={selectedGenre}
            onChange={setSelectedGenre}
            labelledBy="Select Genre"
          />
          <h1 className='text-white pt-6 font-medium text-xl'>Language(s)</h1>
          <MultiSelect
            className="text-gray-700 w-[400px] h-[55px] border border-pink-500 p-2 rounded "
            hasSelectAll={true}
            options={languages}
            value={selectedLanguage}
            onChange={setSelectedLanguage}
            labelledBy="Select Language"
          />
          <div className='flex flex-col'> 
          <h1 className='text-white font-medium text-base pt-6'>Release Year</h1>
          <div className='flex flex-row items-center justify-items-center pt-2 gap-3'>
            <input
             className="text-gray-700 w-[100px] h-[40px] border border-pink-500 p-2 rounded "
              type="text"
              name="name"
              onChange={onChangeYear}
              value={minYearValue}
              placeholder="1900 to"
            />
            <ArrowForwardIcon 
              sx={{ color: pink[400] }}
            />
            <input
              className="text-gray-700 w-[100px] h-[40px] border border-pink-500 p-2 rounded "
              type="text"
              name="name"
              onChange={onChangeYear2}
              value={maxYearValue}
              placeholder="2022"
            />
          </div>

          <h1 className='text-white font-medium text-base pt-8 '>Run Time</h1>
          <div className='flex flex-row items-center justify-items-center pt-2 gap-3'>
            <input
              className="text-gray-700 w-[100px] h-[40px] border border-pink-500 p-2 rounded "
              type="text"
              name="name"
              onChange={onChangeTime}
              value={minTimeValue}
              placeholder="Min-Minute"
            />
            <ArrowForwardIcon 
              sx={{ color: pink[400] }}
            />
            <input
              className="text-gray-700 w-[100px] h-[40px] border border-pink-500 p-2 rounded "
              type="text"
              name="name"
              onChange={onChangeTime2}
              value={maxTimeValue}
              placeholder="Max-Minute"
            />
          </div>
          
          <h1 className='text-white font-medium text-base pt-8 '>IMDB Score</h1>
          <div className='flex flex-row items-center justify-items-center pt-2 gap-3'>
            <input
              className="text-gray-700 w-[100px] h-[40px] border border-pink-500 p-2 rounded "
              type="text"
              name="name"
              onChange={onChangeScore}
              value={minScoreValue}
              placeholder="Min-Score"
            />
            <ArrowForwardIcon 
              sx={{ color: pink[400] }}
            />
            <input
              className="text-gray-700 w-[100px] h-[40px] border border-pink-500 p-2 rounded "
              type="text"
              name="name"
              onChange={onChangeScore2}
              value={maxScoreValue}
              placeholder="Max-Score"
            />
          </div>
          </div>
          <button onClick={submitButton} className='bg-pink-500 px-[50px] py-[15px] mt-[50px] mb-[15px] rounded font-bold text-black hover:text-white hover:bg-pink-800'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search
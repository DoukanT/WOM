import React, { useState } from 'react';
import { MultiSelect } from "react-multi-select-component";
import {genres, languages, age} from "./options"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { pink } from '@mui/material/colors';


const Search = () => {
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [selectedAge, setSelectedAge] = useState([]);
  const [minYearValue, setminYearValue] = React.useState("");
  const [maxYearValue, setmaxYearValue] = React.useState("");
  const [minTimeValue, setminTimeValue] = React.useState("");
  const [maxTimeValue, setmaxTimeValue] = React.useState("");
  const [minScoreValue, setminScoreValue] = React.useState("");
  const [maxScoreValue, setmaxScoreValue] = React.useState("");


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
    <div className='pt-24 pb-10 w-full h-full'>
      <div className='mt-[30px] mx-[400px]' style={{boxShadow: "rgba(240, 46, 170, 0.17) 0px 23px 25px 0px inset, rgba(240, 46, 170, 0.15) 0px 36px 30px 0px inset, rgba(240, 46, 170, 0.1) 0px 79px 40px 0px inset, rgba(240, 46, 170, 0.17) 0px -23px 25px 0px inset, rgba(240, 46, 170, 0.15) 0px -36px 30px 0px inset, rgba(240, 46, 170, 0.1) 0px -79px 40px 0px inset"}}>
        <div className='flex flex-col items-center justify-items-center mx-[150px] py-[70px] gap-2'>
          <h1 className='text-white font-medium text-xl'>Select Genre(s)</h1>
          <MultiSelect
            className="text-pink-500 w-[400px] h-[50px]"
            hasSelectAll={false}
            options={genres}
            value={selectedGenre}
            onChange={setSelectedGenre}
            labelledBy="Select Genre"
          />
          <h1 className='text-white pt-6 font-medium text-xl'>Select Language(s)</h1>
          <MultiSelect
            className="text-pink-500 w-[400px] h-[50px]"
            hasSelectAll={true}
            options={languages}
            value={selectedLanguage}
            onChange={setSelectedLanguage}
            labelledBy="Select Language"
          />
          <div className='flex flex-row items-center justify-items-center pt-6 gap-3'>
            <h1 className='text-white font-medium text-base text-center'>Min Runtime Value</h1>
            <input
              className="text-pink-500 w-[100px] h-[40px]"
              type="text"
              name="name"
              onChange={onChangeTime}
              value={minTimeValue}
            />
            <ArrowForwardIcon 
              sx={{ color: pink[400] }}
            />
            <h1 className='text-white font-medium text-base text-center'>Max Runtime Value</h1>
            <input
              className="text-pink-500 w-[100px] h-[40px]"
              type="text"
              name="name"
              onChange={onChangeTime2}
              value={maxTimeValue}
            />
          </div>
          <div className='flex flex-row items-center justify-items-center pt-6 gap-3'>
            <h1 className='text-white font-medium text-base text-center'>Min Year</h1>
            <input
              className="text-pink-500 w-[100px] h-[40px]"
              type="text"
              name="name"
              onChange={onChangeYear}
              value={minYearValue}
            />
            <ArrowForwardIcon 
              sx={{ color: pink[400] }}
            />
            <h1 className='text-white font-medium text-base text-center'>Max Year</h1>
            <input
              className="text-pink-500 w-[100px] h-[40px]"
              type="text"
              name="name"
              onChange={onChangeYear2}
              value={maxYearValue}
            />
          </div>
          <h1 className='text-white pt-6 font-medium text-xl'>Select Age Filter</h1>
          <MultiSelect
            className="text-pink-500 w-[400px] h-[50px]"
            hasSelectAll={false}
            options={age}
            value={selectedAge}
            onChange={setSelectedAge}
            labelledBy="Select Age"
            disableSearch={true}
          />
          <div className='flex flex-row items-center justify-items-center pt-6 gap-3'>
            <h1 className='text-white font-medium text-base text-center'>Min IMDB Score</h1>
            <input
              className="text-pink-500 w-[100px] h-[40px]"
              type="text"
              name="name"
              onChange={onChangeScore}
              value={minScoreValue}
            />
            <ArrowForwardIcon 
              sx={{ color: pink[400] }}
            />
            <h1 className='text-white font-medium text-base text-center'>Max IMDB Score</h1>
            <input
              className="text-pink-500 w-[100px] h-[40px]"
              type="text"
              name="name"
              onChange={onChangeScore2}
              value={maxScoreValue}
            />
          </div>
          <button className='bg-pink-500 px-[50px] py-[15px] mt-[50px] mb-[15px] rounded font-bold text-black hover:text-white hover:bg-pink-800'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search
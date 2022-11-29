import React, { useState } from 'react';
import { MultiSelect } from "react-multi-select-component";
import {genres, languages, runTime, age} from "./options"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { pink } from '@mui/material/colors';


const Search = () => {
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [selectedTime, setSelectedTime] = useState([]);
  const [selectedAge, setSelectedAge] = useState([]);
  const [minValue, setminValue] = React.useState("");
  const [maxValue, setmaxValue] = React.useState("");


const onChangeHandler = event => {
  setminValue(event.target.value);
};
const onChangeHandler2 = event => {
  setmaxValue(event.target.value);  
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
          <h1 className='text-white pt-6 font-medium text-xl'>Select Run Time</h1>
          <MultiSelect
            className="text-pink-500 w-[400px] h-[50px]"
            hasSelectAll={true}
            options={runTime}
            value={selectedTime}
            onChange={setSelectedTime}
            labelledBy="Select Run Time"
            disableSearch={true}
          />
          <div className='flex flex-row items-center justify-items-center pt-6 gap-3'>
            <h1 className='text-white font-medium text-base text-center'>Select Min Year</h1>
            <input
              className="text-pink-500 w-[100px] h-[40px]"
              type="text"
              name="name"
              onChange={onChangeHandler}
              value={minValue}
            />
            <ArrowForwardIcon 
              sx={{ color: pink[400] }}
            />
            <h1 className='text-white font-medium text-base text-center'>Select Max Year</h1>
            <input
              className="text-pink-500 w-[100px] h-[40px]"
              type="text"
              name="name"
              onChange={onChangeHandler2}
              value={maxValue}
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
        </div>
      </div>
    </div>
  );
}

export default Search
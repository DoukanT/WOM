import React, { useState } from 'react';
import { MultiSelect } from "react-multi-select-component";
import {genres, languages, runTime, age} from "./options"

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
    <div className='pt-20'>
      <h1 className='text-white'>Select Genre(s)</h1>
      <MultiSelect
        hasSelectAll={false}
        options={genres}
        value={selectedGenre}
        onChange={setSelectedGenre}
        labelledBy="Select Genre"
      />
      <h1 className='text-white'>Select Language(s)</h1>
      <MultiSelect
        hasSelectAll={true}
        options={languages}
        value={selectedLanguage}
        onChange={setSelectedLanguage}
        labelledBy="Select Language"
      />
      <h1 className='text-white'>Select Run Time</h1>
      <MultiSelect
        hasSelectAll={true}
        options={runTime}
        value={selectedTime}
        onChange={setSelectedTime}
        labelledBy="Select Run Time"
      />
      <div className='flex flex-row'>
        <h1 className='text-white'>Select Min Year</h1>
        <input
          type="text"
          name="name"
          onChange={onChangeHandler}
          value={minValue}
        />
        <h1 className='text-white'>Select Max Year</h1>
        <input
          type="text"
          name="name"
          onChange={onChangeHandler2}
          value={maxValue}
        />
      </div>
      <h1 className='text-white'>Select Age Filter</h1>
      <MultiSelect
        hasSelectAll={false}
        options={age}
        value={selectedAge}
        onChange={setSelectedAge}
        labelledBy="Select Age"
      />
    </div>
  );
}

export default Search
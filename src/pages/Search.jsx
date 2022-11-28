import React, { useState } from 'react';
import { MultiSelect } from "react-multi-select-component";
import {genres} from "./options"

const Search = () => {
  const [selectedGenre, setSelectedGenre] = useState([]);
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
      <h1 className='text-white'>Select Fruits</h1>
      <MultiSelect
        hasSelectAll={false}
        options={genres}
        value={selectedGenre}
        onChange={setSelectedGenre}
        labelledBy="Select Genre"
      />
      <h1 className=' text-white'>Select Min Year</h1>
      <input
        type="text"
        name="name"
        onChange={onChangeHandler}
        value={minValue}
      />
      <h1 className=' text-white'>Select Max Year</h1>
      <input
        type="text"
        name="name"
        onChange={onChangeHandler2}
        value={maxValue}
      />
    </div>
  );
}

export default Search
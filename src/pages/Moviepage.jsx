import React from 'react';
import { useLocation } from 'react-router-dom';
import Main from '../components/Main';

const Moviepage = () => {
  const data = useLocation();
  const movieID= data.state.id;

  return (
    <>
      <div class='pt-20'>
        <Main movieID={movieID}/>
      </div>
    </>
  )
}

export default Moviepage
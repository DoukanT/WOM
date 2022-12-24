import React from 'react'
import requests from '../Requests';
import Row from '../components/Row'

const Recommendations = () => {
  var genreUrl='https://api.themoviedb.org/3/discover/movie?api_key='+requests.key+'&sort_by=popularity.desc&include_adult=false&page=1&with_genres=36'
  var castUrl='https://api.themoviedb.org/3/discover/movie?api_key='+requests.key+'&sort_by=popularity.desc&include_adult=false&page=1&with_cast=287'
  
  return (
    <>
    <div className='pt-24'>
      <Row rowID='1' title='You like action' fetchURL={genreUrl} />
      <Row rowID='2' title='You love Brad Pitt' fetchURL={castUrl} />
    </div>
    </>
  )
}

export default Recommendations
import React from 'react'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
    <div className='pt-24'>
        <Row rowID='1' title='Popular' fetchURL={requests.requestPopular} />
        <Row rowID='2' title='Trending' fetchURL={requests.requestTrending} />
        <Row rowID='3' title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row rowID='4' title='Horror' fetchURL={requests.requestHorror} />
    </div>
    </>
  )
}

export default Home
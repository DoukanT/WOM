import React from 'react'
import requests from '../Requests'
import Row from '../components/Row';


const Moviepage = () => {
  return (
    <>
    <div>merajspdjapl</div>
      <Row rowID='1' title='Popular' fetchURL={requests.requestPopular} />
    </>
  )
}

export default Moviepage
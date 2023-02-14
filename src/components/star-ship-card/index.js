import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.css';

const StarShipCard = (props) => {

  let { pageNum } = props;

  console.log('PAGE NUMBER:',pageNum);


  const [starShips, setStarShips] = useState([]);

  const makeServerCall = async () => {
    let serverResponse = await axios({
        method: 'GET',
        url: `/get_starships/${pageNum}`
    });
   
    let data = serverResponse.data;
    setStarShips(data);
  }

  useEffect(() => {
    makeServerCall()
  },[pageNum])
  console.log(starShips);

  let ships = starShips.map((ship) => {
    return <div className='card'>
      <h2>{ship.name}</h2>
      <h3>Cost: {ship.cost_in_credits}</h3>
    </div>
  })
  

  return (
    <div id='card-container'>
        { ships }
    </div>
  )
}

export default StarShipCard
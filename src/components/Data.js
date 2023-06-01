import React, { useState } from 'react';
import './Data.css';

export default function Data() {
  const [cars, setCars] = useState([]);
  const [model, setModel] = useState();

  function takeModel(e) {
    setModel(e.target.value);
  }

  const fetchCars = async () => {
    const response = await fetch(`https://api.api-ninjas.com/v1/cars?limit=2&model=${model}`, {
      Method: 'GET',
      headers: { 'X-Api-Key': 'RL2oEd6EZhPokMoxSzfubA==0JWWcCJSJDGZR7gT' },
    });
    const cars = await response.json();
    setCars(cars.results);
  };

  return (
    <div>
      <div>
        <input className="search-input" onChange={takeModel} placeholder="Enter car brand" />
        <button className="btn-submit" onClick={fetchCars} type="button">Search</button>
      </div>
      <div className="api-content">
        <p>{cars}</p>
      </div>
    </div>
  );
}

import React, { Fragment, useState, useEffect } from 'react';
import '../styles/styles.css';

// API-KEY  54a084ecf22e90d1ea885d6cf33b9539
// Final-Api  https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=54a084ecf22e90d1ea885d6cf33b9539
// Final-Api  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=54a084ecf22e90d1ea885d6cf33b9539

const Temp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('Massachusetts');

  useEffect(() => {
    const fetchAPI = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1fe55f27829afc97ea60a0f3b1978686`;
      const response = await fetch(url);
      const resJSON = await response.json();
      setCity(resJSON.main);
    };
    fetchAPI();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="errorMsg">No such city:{search} found</p>
        ) : (
          <>
            <div className="info">
              <h2 className="location">{search}</h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="tempmin_max">
                Min: {city.temp_min}°C | Max: {city.temp_max}°C
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </>
        )}
      </div>
    </>
  );
};

export default Temp;

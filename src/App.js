import React, { useState } from 'react';
import './Weather API/Weather';
import WeatherApp from './Weather API/Weather';

import './App.css';

function App() {
  const [showWeather, setShowWeather] = useState(false);
  const [showNews, setShowNews] = useState(false);

  const handleWeatherClick = () => {
    setShowWeather(true);
  };

  const handleNewsClick = () => {
    setShowNews(true);
  };

  return (
    <div className='App'>
    <center>
      <button className='btn' placeholder='Weather' onClick={handleWeatherClick}>
        WeatherApp
      </button>
      {showWeather && <WeatherApp />}
     
      </center>
    </div>
  );
}

export default App;

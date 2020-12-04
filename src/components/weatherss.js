import logo from './logo.svg';
import './App.css';
import './css';
import React, { useState, useEffect, requestOptions } from 'react';
function App() {

  const [data, setdata] = useState(null);
  useEffect(() => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Thailand&appid=1d2822a6e2fc38ebd9bb825f2dda2cca')
      .then(response => response.json())
      .then(data => setdata(data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
      {data?.name} {data?.main.temp_max}
      <i class="wi-day-cloudy-high"></i>
      </header>
    </div>
  );
}

export default App;
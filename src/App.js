import './App.css';
import React, { useState, useEffect } from 'react';
import LoadingMask from './components/LoadingMask';
import Hotel from './components/Hotel';
const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState('');
  useEffect(() => {
    setLoading(true);
    fetch('./api/hotels')
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading(false));
  }, []);

  return (
    <div className='App'>
      <h1>Hotels</h1>
      {loading ? <LoadingMask /> : ''}
      {data
        ? data.map((hotel, index) => <Hotel key={index} data={hotel} />)
        : ''}
    </div>
  );
};

export default App;

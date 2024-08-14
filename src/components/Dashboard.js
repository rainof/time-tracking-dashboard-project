import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import Card from './Card';
import '../styles/Dashboard.scss'

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [timeframe, setTimeframe] = useState('weekly'); // default to weekly

  useEffect(() => {
    fetch('data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <Profile setTimeframe={setTimeframe} timeframe={timeframe}/>
      {data.map((item, index) => (
        <Card key={index} data={item} timeframe={timeframe} />
      ))}
    </div>
  );
};

export default Dashboard;

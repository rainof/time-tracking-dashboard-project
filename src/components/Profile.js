import React from 'react';
import '../styles/Profile.scss';
import profileImg from '../assets/images/image-jeremy.png';

const Profile = ({ setTimeframe, timeframe }) => {

  console.log(timeframe);

  const handleTimeframeClick = (event, selectedTimeframe) => {
    event.preventDefault();
    setTimeframe(selectedTimeframe);
  }

  return (
    <div className="profile-container">
      <div className="profile-top">
        <div className="top-container">
          <img className="top-image" src={profileImg} alt="Profile" />
          <div className="top-info">
            <p>Report for</p>
            <h3>Jeremy Robson</h3>
          </div>
        </div>
      </div>
      <div className="profile-bottom">
        <div className="profile-bottom-container">
          <a
            className={timeframe === 'daily' ? 'activated-link' : 'link'}
            href="#"
            onClick={(e) => handleTimeframeClick(e, 'daily')}
          >
            Daily
          </a>
          <a
            className={timeframe === 'weekly' ? 'activated-link' : 'link'}
            href="#"
            onClick={(e) => handleTimeframeClick(e, 'weekly')}
          >
            Weekly
          </a>
          <a
            className={timeframe === 'monthly' ? 'activated-link' : 'link'}
            href="#"
            onClick={(e) => handleTimeframeClick(e, 'monthly')}
          >
            Monthly
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React from 'react';
import '../styles/Profile.scss';
import profileImg from '../assets/images/image-jeremy.png';

const Profile = () => {
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
          <a className="link" href="#" data-timeframe="daily">Daily</a>
          <a className="activated-link" href="#" data-timeframe="weekly">Weekly</a>
          <a className="link" href="#" data-timeframe="monthly">Monthly</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;

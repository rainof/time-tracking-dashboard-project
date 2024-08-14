import React from 'react';
import '../styles/Card.scss'
import ellipsisImg from '../assets/images/icon-ellipsis.svg'

const Card = ({ data, timeframe, index }) => {
  console.log("Index passed to Card:", index);

  const currentHours = data.timeframes[timeframe].current;
  const previousHours = data.timeframes[timeframe].previous;

  return (
    <div className={`card color-${index % 6}`}>
      <div className="card-top">&nbsp;</div>
      <div className="card-bottom">
        <div className="card-bottom-header">
          <h2 className="card-type">{data.title}</h2>
          <button className="button">
            <img className="etc" src={ellipsisImg} alt="ellipsis" />
          </button>
        </div>
        <div className="card-bottom-body">
          <h3 className="current-hrs">{currentHours}hrs</h3>
          <p className="previous-hrs">Last {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)} - {previousHours}hrs</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

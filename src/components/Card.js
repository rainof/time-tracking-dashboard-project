import React from 'react';

const Card = ({ data, timeframe }) => {
  const currentHours = data.timeframes[timeframe].current;
  const previousHours = data.timeframes[timeframe].previous;

  return (
    <div className="card">
      <div className="card-top"></div>
      <div className="card-bottom">
        <div className="card-bottom-header">
          <h2 className="card-type">{data.title}</h2>
          <button className="button">
            <div className="etc">...</div>
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

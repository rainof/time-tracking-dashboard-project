import React from 'react';

const Card = ({ data }) => {
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
          <h3 className="current-hrs">{data.timeframes.weekly.current}hrs</h3>
          <p className="previous-hrs">Last Week - {data.timeframes.weekly.previous}hrs</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

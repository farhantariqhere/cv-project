import React from 'react';

function Institute(props) {
  return (
    <div className="Institute">
      <div className="portfolio-education-details">
        <span>{props.data.year}</span>
        <h2>{props.data.degree}</h2>
        <p>{props.data.address}</p>
      </div>
    </div>
  );
}

export default Institute;

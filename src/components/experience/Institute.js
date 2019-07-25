import React from 'react';

function Institute(props) {
  return (
    <div>
      <div className="portfolio-education-details">
        <img class={props.data.className} src={props.data.icon} />
        <span>{props.data.year}</span>
        <h2>{props.data.degree}</h2>
        <p>{props.data.address}</p>
      </div>
    </div>
  );
}

export default Institute;

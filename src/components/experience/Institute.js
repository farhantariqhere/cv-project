import React from 'react';

function Institute(props) {
  return (
    <div>
      <div className="portfolio-education-details">
        <img className={props.data.className} src={props.data.icon} alt="icon"/>
        <span>{props.data.from} - {props.data.to}</span>
        <h2>{props.data.degree}</h2>
        <p>{props.data.address}</p>
      </div>
    </div>
  );
}

export default Institute;

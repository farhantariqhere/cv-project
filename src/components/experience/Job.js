import React from 'react';

function Job(props) {
  return (
    <div className="Job">
     <div className="work-experience-position-tittle">
        <div className="position-tittle-main">
          <h2>{props.job.title}</h2>
          <small>{props.job.institute}</small>
        </div>
        <div className="location-main">
          <span>
            <img src={props.job.location} />
            {props.job.city}
          </span>
        </div>
        

      </div>
      <div className="work-experience-paragraph">
        <p>
          {props.job.text}
        </p>
      </div> 
    </div>
  );
}

export default Job;

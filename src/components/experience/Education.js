import React from 'react';
import Institute from './Institute';

const data = [
    { 
      year:'2013 - 2015', 
      degree:'MASTERS IN COMPUTER SCINCE ENGENEERING', 
      address:'University / College /  Name,Washington DC, USA .'
    },
    { 
      year:'2013 - 2015', 
      degree:'MASTERS IN COMPUTER SCINCE ENGENEERING', 
      address:'University / College /  Name,Washington DC, USA .'
    }
  ]

const institute = data.map((item,i) => {
  return <Institute key={i} data={item} />
});

function Education() {
  return (
    <div className="Education">
      <div className="portfolio-education">
        <h3>EDUCATION</h3>
        <div className="portfolio-education-grid">
          <div className="portfolio-education-img">
            <img src={require('../../assets/images/border-line.png')} />
          </div>
          <div className="portfolio-education-list">
            {institute}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Education;

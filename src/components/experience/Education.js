import React from 'react';
import Institute from './Institute';

const data = [
    { 
      from:'2013',
      to:'2015', 
      degree:'MASTERS IN COMPUTER SCINCE ENGENEERING', 
      address:'University / College /  Name,Washington DC, USA .',
      icon:require('../../assets/images/border-line-cer.png'),
      className: 'border-dots'
    },
    { 
      from:'2013',
      to:'2015', 
      degree:'MASTERS IN COMPUTER SCINCE ENGENEERING', 
      address:'University / College /  Name,Washington DC, USA .',
      icon:require('../../assets/images/border-line-cer.png'),
      className: 'border-dots-bottom'
    }
  ]

const institute = data.map((item,i) => {
  return <Institute key={i} data={item} />
});

function Education() {
  return (
    <div>
      <div className="portfolio-education">
        <h3>EDUCATION</h3>
        <div className="portfolio-education-grid">
          <div className="portfolio-education-img"></div>
          <div className="portfolio-education-list">
            {institute}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Education;

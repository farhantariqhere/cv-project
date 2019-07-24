import React from 'react';
import Personal from './Personal';
import Education from './Education';
import Work from './Work';

function Experience() {
  return (
    <div className="Experience">
      <div className="portfolio-main-right">
        <Personal />            
        <Education />            
        <Work />
      </div>
    </div>
  );
}

export default Experience;

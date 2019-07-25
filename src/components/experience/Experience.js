import React from 'react';
import Personal from './Personal';
import Education from './Education';
import Work from './Work';

function Experience() {
  return (
    <div>
      <div className="portfolio-main-right">
        <div class="bg-white-color">
          <Personal />            
          <Education />            
          <Work />
        </div>  
      </div>
    </div>
  );
}

export default Experience;

import React from 'react';
import Title from './Title';
import Contact from './Contact';
import Skills from './Skills';
import Language from './Language';

function Bio() {
  return (
    <div>
      <div className="portfolio-main-left">
        <div className="portfolio-leftbar">
          <Title />
          <Contact />
          <Skills />
          <Language />
        </div>
      </div>
    </div>
  );
}

export default Bio;

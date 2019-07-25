import React from 'react';
import Bio from './components/bio/Bio';
import Experience from './components/experience/Experience';
import './styles/css/min-style.css';

function App() {
  return (
    <div>
      <div className="wrapper">
        <div className="portfolio-main-grid">
          <Bio />
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default App;

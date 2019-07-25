import React from 'react';
import Job from './Job'
function Work() {
  const data = [
    { 
      title:'JOB POSITION / TITLE', 
      institute:'Company / Institute Name', 
      location:require('../../assets/images/location-icon.png'),
      city:'USA - Washingtoon DC',
      text:' Accounting manager with five years of accounting experience in real estate and marketing industries. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  standard dummy text Fully knowledgeable in general accounting budgeting,journal entry preparation.',
      className:'work-dots-1',
      icon:require('../../assets/images/border-line-cer.png')
    },
    { 
      title:'JOB POSITION / TITLE', 
      institute:'Company / Institute Name', 
      location:require('../../assets/images/location-icon.png'),
      city:'USA - Washingtoon DC',
      text:' Accounting manager with five years of accounting experience in real estate and marketing industries. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  standard dummy text Fully knowledgeable in general accounting budgeting,journal entry preparation.',
      className:'work-dots-2',
      icon:require('../../assets/images/border-line-cer.png')
    },
    { 
      title:'JOB POSITION / TITLE', 
      institute:'Company / Institute Name', 
      location:require('../../assets/images/location-icon.png'),
      city:'USA - Washingtoon DC',
      text:' Accounting manager with five years of accounting experience in real estate and marketing industries. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  standard dummy text Fully knowledgeable in general accounting budgeting,journal entry preparation.',
      className:'work-dots-3',
      icon:require('../../assets/images/border-line-cer.png')
    },
  ]

  const jobs = data.map((item,i) => {
    return <Job key={i} job={item} />
  });

  return (
    <div>
      <div className="portfolio-work-experience">
        <h3>WORK EXPERIENCE</h3>

        <div className="work-experience-grid">
            <div className="work-experience-img"></div>

            <div className="work-experience-details">
            {jobs}
            </div>
        </div>

      </div>
    </div>
  );
}

export default Work;

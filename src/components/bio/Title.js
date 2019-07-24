import React from 'react';

function Title() {
  return (
    <div className="Title">
       <div className="profile-image">
          <img src={require('../../assets/images/profile.png')} alt="Profile" />
        </div>

        <div className="profile-name">
          <h3>ALICE KIEHN</h3>
          <small>Fashion Designer</small>
        </div>
    </div>
  );
}

export default Title;

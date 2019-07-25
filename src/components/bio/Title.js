import React from 'react';

function Title() {

  const data = {name:'ALICE KIEHN', profession:'Fashion Designer', profile_img:require('../../assets/images/profile.png')}
  return (
    <div>
       <div className="profile-image">
          <img src={data.profile_img} alt="Profile" />
        </div>

        <div className="profile-name">
          <h3>{data.name}</h3>
          <small>{data.profession}</small>
        </div>
    </div>
  );
}

export default Title;

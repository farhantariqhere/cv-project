import React from 'react';
import Skill from './Skill';


const data = ['Computer Language','Object-Oriented Methodologies', 'Graphic Design','Event Planning','Leadership','Global Project Management','Review & Result']

const skills = data.map((item,i) => {
  return <Skill key={i} data={item} />
});

function Skills() {
  return (
    <div>
        <div className="profile-skills">
          <h3>PRO SKILLS</h3>
           {skills}
        </div>
    </div>
  );
}

export default Skills;

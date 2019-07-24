import React from 'react';

function Skill(props) {
  return (
    <div className="Skill">
      <ul>
        <li>{props.data}</li>
      </ul> 
    </div>
  );
}

export default Skill;

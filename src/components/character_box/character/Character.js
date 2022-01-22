import React from 'react';
import './character_style.css';

const Character = (props) => {
  return (
      <div className='character'>
        <div className='black_trasparent_cover' />
        <div className='pirate_name'>{props.name}</div>
        <div className='pirate_bounty'>{props.bounty}</div>
        <img src={props.img} alt='' />
      </div>
  );
};

export default Character;

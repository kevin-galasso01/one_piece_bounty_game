import React from 'react';
import './character_style.css';
import img from '../../../images/Nami_Anime_Post_Timeskip_Infobox.png';

const Character = () => {
  return (
      <div className='character'>
        <div className='black_trasparent_cover' />
        <div className='pirate_name'>Nami</div>
        <div className='pirate_bounty'>66,000,000฿</div>
        <img src={img} alt='' />
      </div>
  );
};

export default Character;

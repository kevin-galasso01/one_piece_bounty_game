import React from 'react';
import "../character_box/character_box_style.css";
import Character from './character/Character';

const CharacterBox = () => {
    return (
        <div className='character_box'>
            <Character />
            <Character />
        </div>
    );
};

export default CharacterBox;

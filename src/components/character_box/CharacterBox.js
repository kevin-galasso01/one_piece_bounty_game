import React from 'react';
import "../character_box/character_box_style.css";
import Character from './character/Character';
import DividingImg from "./dividing_img/DividingImg";

const CharacterBox = () => {
    return (
        <div className='character_box'>
            <Character />
            <Character />
            <DividingImg />
        </div>
    );
};

export default CharacterBox;

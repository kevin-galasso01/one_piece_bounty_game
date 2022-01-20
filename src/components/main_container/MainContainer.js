import React from 'react';
import "../main_container/main_container_style.css"
import Title from '../title/Title';
import CharacterBox from '../character_box/CharacterBox';

const MainContainer = () => {
    return (
        <div className='main_container'>
                <Title />
                <CharacterBox />
        </div>
    );
};

export default MainContainer;

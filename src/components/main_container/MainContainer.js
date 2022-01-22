import React from 'react';
import "../main_container/main_container_style.css"
import Title from '../title/Title';
import CharacterBox from '../character_box/CharacterBox';
import LoadPirate from "../../hooks/useLoadPirate";

const MainContainer = () => {
    const {pirateState} = LoadPirate();

    return (
        <div className='main_container'>
                <Title />
                {pirateState&& <CharacterBox pirate={pirateState}/>}
        </div>
    );
};

export default MainContainer;

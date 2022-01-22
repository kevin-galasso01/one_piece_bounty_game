import React from 'react';
import "../character_box/character_box_style.css";
import Character from './character/Character';
import DividingImg from "./dividing_img/DividingImg";

const CharacterBox = (props) => {
    const mappingArrayPirates= () => {
        let data = Array.from(props.pirate);
        return data.map((pirate, key) => <Character key={key} name={pirate.name} bounty={pirate.bounty} img={pirate.img}/>);
    }
    const arrayReposMap = mappingArrayPirates(props);

    return (
        <div className='character_box'>
            {arrayReposMap}
            <DividingImg />
        </div>
    );
};

export default CharacterBox;

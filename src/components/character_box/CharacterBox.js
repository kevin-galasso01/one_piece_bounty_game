import React from 'react';
import "../character_box/character_box_style.css";
import Character from './character/Character';
import DividingImg from "./dividing_img/DividingImg";
import { useState } from 'react';

const CharacterBox = (props) => {
    const [showBounty, setShowBounty] = useState("invisible_pirate_bounty");

    const changeClassName = () => {
            showBounty === "invisible_pirate_bounty" ? setShowBounty("pirate_bounty") : setShowBounty("invisible_pirate_bounty");
    }

    const mappingArrayPirates = () => {
        let data = Array.from(props.pirate);
        return data.map((pirate, key) => <Character key={key} name={pirate.name} bounty={pirate.bounty} img={pirate.img} changeClassName={changeClassName} showBounty={showBounty} />);
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

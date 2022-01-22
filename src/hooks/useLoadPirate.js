import { useState, useEffect } from 'react';
import piratesJson from '../api/mockup_back_end.json';

const getRandomNum = (max) =>{
    return Math.floor(Math.random() * max);
}

const LoadPirate = () => {
    const [pirateState, setPirateState] = useState([]);

    useEffect(() => {
        const piratesArray = piratesJson.pirates.map((pirates) => {
            return pirates
        })

        const FirstRandomNum = getRandomNum(piratesArray.length);
        const SecondRandomNum = getRandomNum(piratesArray.length);

        //const arrayRandomNum = [FirstRandomNum, SecondRandomNum];
        const arrayRandomPirates = [piratesArray[FirstRandomNum], piratesArray[SecondRandomNum]];

        setPirateState(arrayRandomPirates);
        //setPirateState(piratesArray);
        
    }, []);
    return { pirateState };
};

export default LoadPirate;

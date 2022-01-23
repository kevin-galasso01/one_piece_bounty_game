import { useState, useEffect } from 'react';
import piratesJson from '../api/mockup_back_end.json';
import { randomArrayOfNumGenerator } from "../scripts/randomPirateGenerator";

const LoadPirate = () => {
    const [pirateState, setPirateState] = useState([]);

    useEffect(() => {
        const piratesArray = piratesJson.pirates.map((pirates) => {
            return pirates
        })

        setPirateState(randomArrayOfNumGenerator(piratesArray));
    }, []);
    return { pirateState };
};

export default LoadPirate;

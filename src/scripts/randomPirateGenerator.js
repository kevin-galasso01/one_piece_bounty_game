const getRandomNum = (max) => {
    return Math.floor(Math.random() * max);
}

export const randomArrayOfNumGenerator = (piratesArray) => {
    const FirstRandomNum = getRandomNum(piratesArray.length);
    const SecondRandomNum = getRandomNum(piratesArray.length);

    const arrayRandomPirates = [piratesArray[FirstRandomNum], piratesArray[SecondRandomNum]];

    return arrayRandomPirates;
}
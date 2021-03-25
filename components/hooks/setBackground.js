import { useState } from 'react';


import getLocalTime from '../hooks/getLocalTime.js';

const setBackground = () => {

    const theDateForBG = getLocalTime();
    const theHour = theDateForBG.getUTCHours();
    console.log(`The current hour in UTC time is: ${theHour}`);

    const bg = {
        day: require("../assets/mainPhotos/Day_Clouds.jpg"),
        night: require("../assets/mainPhotos/Night_Sky.jpg")
    };

    const [theBackground, setTheBackground] = useState(bg.day);

        switch (theHour) {
            case 6:
                setTheBackground(bg.night);
                break;
            case 7:
                setTheBackground(bg.night);
                 break;
            case 8:
                setTheBackground(bg.night);
                break;
            case 9:
                setTheBackground(bg.night);
                break;
            case 10:
                setTheBackground(bg.night);
                break;
            case 11:
                setTheBackground(bg.night);
                break;
            case 12:
                setTheBackground(bg.night);
                break;
            case 13:
                setTheBackground(bg.night);
                break;
            case 14:
                setTheBackground(bg.night);
                break;
            case 15:
                setTheBackground(bg.night);
                break;
            case 16:
                setTheBackground(bg.night);
                break;
            case 17:
                setTheBackground(bg.night);
                break;
            case 18:
                setTheBackground(bg.night);
                break;
        
            default:
                setTheBackground(bg.day);
                break;
        };

    return theBackground;
};

export default setBackground;
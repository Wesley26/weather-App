import React, { useState,  } from 'react';
import {  ImageBackground, 
        } from 'react-native';
import { tailwind } from '../../tailwind.js';

import AppClock from '../componenetsMain/AppClock.js';

const MainMenu = () => {

    const [theBackground, setTheBackground] = useState(false);

    let backgroundSetup = () => {

        /**
        let currentTime = new Date();
        let currentHour = currentTime.getHours();
        */
        let currentHour = 6;

        if ((currentHour <= 6) && (currentHour >= 18)) {

            setTheBackground(true);
        } else {

            setTheBackground(false);
        };

    };

    //backgroundSetup(); //(this needs a render delay for this to work)

    let finalBackground = null;

    switch (theBackground) {

        case true:
            finalBackground = require("../assets/mainPhotos/Day_Clouds.jpg");
        break;
        
        default:
            finalBackground = require("../assets/mainPhotos/Night_Sky.jpg");
    };

    //require("../assets/mainPhotos/Day_Clouds.jpg");
    //require("../assets/mainPhotos/Night_Sky.jpg")

    return (
    <ImageBackground
        blurRadius={3}
        source={finalBackground}
        style={tailwind('flex-1')}
    >

        <AppClock />

    </ImageBackground>
    );
}

export default MainMenu;
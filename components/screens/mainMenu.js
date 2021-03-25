import React from 'react';
import {  ImageBackground, 
        } from 'react-native';
import { tailwind } from '../../tailwind.js';

import AppClock from '../componenetsMain/AppClock.js';

//import setBackground from '../hooks/setBackground.js'; //this component still causes re-render issues

const MainMenu = () => {

    //setBackground();

    const finalBackground = require("../assets/mainPhotos/Day_Clouds.jpg");

    //let theBackground = require("../assets/mainPhotos/Day_Clouds.jpg");
    //let theBackground2 = require("../assets/mainPhotos/Night_Sky.jpg");

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
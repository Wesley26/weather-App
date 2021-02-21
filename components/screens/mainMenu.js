import React from 'react';
import { SafeAreaView, 
        View, 
        Text, 
        ImageBackground } from 'react-native';
import { tailwind } from '../../tailwind.js';

import {
    exportHour, 
    theTime } from '../utilities/AppClock.js';

const mainMenu = () => {

    //this component needs to be able to refresh
    console.log(theTime);
    console.log("Hour is: " + exportHour);

    let theBackground = "";
    let imageNumber = false;

    if (exportHour >= 6 && exportHour <= 18) {

        imageNumber = true;
    };

    switch (imageNumber) {

        case 1:
            theBackground = require("../assets/mainPhotos/Day_Clouds.jpg");
            break;

        default:
            theBackground = require("../assets/mainPhotos/Night_Sky.jpg");
        
    };

    return (
    <ImageBackground
        blurRadius={3}
        source={theBackground}
        style={tailwind('flex-1')}
    >

        <SafeAreaView style={tailwind('h-full')}>
            <View style={tailwind('pt-12 items-center')}>
                <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
                    <Text style={tailwind('text-blue-800 font-semibold')}>
                        The current time is: {theTime}
                    </Text>
                </View>
            </View>
        </SafeAreaView>

    </ImageBackground>
    );
}

export default mainMenu;
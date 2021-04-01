import React, { useEffect, useState } from 'react';
import { ImageBackground, 
        ScrollView, 
        View } from 'react-native';

import { tailwind } from '../../tailwind.js';

import WeatherContent from '../componenetsMain/WeatherContent.js';

/**
 * @WeatherScreen - Base Weather Screen componenet,
 * imports WeatherContent to obtain weather data.
 * 
 * @imageBG - Object stores background images day and night
 * @backgroundImage - useState hook determines from hour Date Object
 * whether to display day or night background.
 * @settingBG - truthy determines if it is day or night hour
 * 
 * @returns - Weather Screen base componenet
 */

export default WeatherScreen = () => {

    const imageBG = {
        day: require("../assets/mainPhotos/Day_Clouds.jpg"),
        night: require("../assets/mainPhotos/Night_Sky.jpg"),
    };

    let hour = new Date().getHours();

    const [backgroundImage, setBackgroundImage] = useState();

    useEffect(() => {

        console.log(`The Current Hour is: ${hour}`); //uncomment to see current hour

        let settingBG = hour >= 6 && hour <= 18 ? imageBG.day : imageBG.night;
        setBackgroundImage(settingBG);

    }, [hour]);

    return (

        <ImageBackground
            source={backgroundImage}
            style={tailwind('w-full h-full')}
        >
        <View style={tailwind('bg-gray-500 flex-col w-full h-16 rounded-lg')} />

            <ScrollView
                style={tailwind('pt-10 bg-transparent flex-1')}
            >
                <WeatherContent />
                
            </ScrollView>

        <View style={tailwind('bg-gray-500 flex-col-reverse w-full h-16 rounded-lg')} />
        </ImageBackground>

    );

};
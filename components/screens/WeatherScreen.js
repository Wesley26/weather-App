import React from 'react';
import { ImageBackground, 
        Text,
        View } from 'react-native';

import { tailwind } from '../../tailwind.js';

import getWeather from '../hooks/getWeather';

/**
 * @WeatherScreen - Base Weather Screen componenet,
 * calls getWeather to obtain weather data.
 * 
 * @imageBG - Object stores background images day and night
 * @backgroundImage - truthy determines from hour Date Object
 * whether to display day or night background.
 * 
 * @returns - Weather Screen base componenet
 */

const WeatherScreen = () => {
 
    const theCurrentWeather = getWeather();
    console.log(theCurrentWeather);

    const imageBG = {
        day: require("../assets/mainPhotos/Day_Clouds.jpg"),
        night: require("../assets/mainPhotos/Night_Sky.jpg"),
    };

    let hour = new Date().getHours();
    console.log(`The Current Hour is: ${hour}`); //uncomment to see current hour

    let backgroundImage = hour >= 6 && hour <= 18 ? imageBG.day : imageBG.night;

    return (

        <ImageBackground
            source={backgroundImage}
            style={tailwind('w-full h-full')}
        >
        <View style={tailwind('bg-gray-500 flex-col w-full h-16 rounded-lg')} />

            <View style={tailwind('bg-transparent flex-1 justify-center items-center')}>

                <View style={tailwind('bg-white p-5 justify-center items-center rounded-full')}>
                    <Text>Sample React Native Text idk</Text>    

                </View>

            </View>

        <View style={tailwind('bg-gray-500 flex-col-reverse w-full h-16 rounded-lg')} />
        </ImageBackground>

    );

}; export default WeatherScreen;
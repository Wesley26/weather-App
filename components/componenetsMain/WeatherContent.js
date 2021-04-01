import React from 'react';
import { Image,
        Platform,
        View,
        Text } from 'react-native';

import { tailwind } from '../../tailwind.js';

import LoadingMessage from './LoadingMessage.js';

import getWeather from '../hooks/getWeather.js';

/**
 * @WeatherContent - calls getWeather to import and display
 * weather data.
 * 
 * @returns - if theCurrentWeather exists, show all weather content
 * if theCurrentWeather does not exist, show loading prompt to the user
 */

export default WeatherContent = () => {

    const theCurrentWeather = getWeather();
    console.log(theCurrentWeather);

    const loadingText = `Loading ...`;
    
    const tempIntro = `Current Temperature is: `

    if (theCurrentWeather) {

        /**
         * See the OpenWeather Map API docs under
         * "By Geographic coordinates" for full
         * documentation on how weather data is
         * de-structured below.
         */

        const { 
            main: { temp },
            weather: [details],
            name,
            
            } = theCurrentWeather;

        const { icon } = details;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

        return (

            <View style={[
                        { fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir" },
                        tailwind('bg-transparent flex-1 justify-center items-center text-36fz')
                        ]}>
                            
                <View style={tailwind('bg-white bg-opacity-30 p-5 justify-center items-center rounded-lg')}>

                    <View style={tailwind('p-10 justify-center items-center flex-col')}>

                        <Text style={tailwind('bg-white p-3 rounded-full')}>
                            {name}
                        </Text>
                        <Image 
                            source={{uri: iconUrl}}
                            style={tailwind('w-100w h-100h')}
                        />
                        <Text style={tailwind('bg-white p-3 rounded-full')}>
                            {tempIntro}{temp}&deg;F
                        </Text>

                    </View>

                </View>
            </View>

        );

    };

    if (!theCurrentWeather) { return <LoadingMessage loadText={loadingText} />; };

};
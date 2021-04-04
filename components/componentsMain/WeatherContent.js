import React from 'react';
import { Image,
        Platform,
        View,
        Text, 
        TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import fontConfig from '../config/fontConfig.js';
import { tailwind } from '../../tailwind.js';

import LoadingMessage from './weatherContentChildren/LoadingMessage.js';

import getWeather from '../hooks/getWeather.js';

/**
 * @WeatherContent - calls getWeather to import and display
 * weather data. useReducer allows for re-render page
 * 
 * @returns - if theCurrentWeather exists, show all weather content
 * if theCurrentWeather does not exist, show loading prompt to the user
 */

export default WeatherContent = () => {

    const theCurrentWeather = getWeather();
    console.log(theCurrentWeather);

    const loadingText = `Loading ...`;
    const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh';


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

        const { icon, main, description } = details;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

        /**
         * Template strings for the weather user interface.
         * This must always be placed after theCurrentWeather's
         * de-structured object.
         */
        const tempText = `Current Temperature is: `;
        const descriptionText = `The current weather in your area is ${description}.`;

        return (

            <View style={tailwind('bg-transparent mb-24 flex-1 justify-center items-center')}>
                            
                <View style={tailwind('bg-white bg-opacity-30 p-5 justify-center items-center rounded-lg')}>

                    <View style={tailwind('p-10 justify-center items-center flex-col')}>

                        <Text style={[
                                fontConfig.fontFamilyText,
                                tailwind('bg-gray-300 p-3 w-64 h-16 text-center text-22fz rounded-full')
                                ]}>
                            {name}
                        </Text>

                        <Image 
                            source={{uri: iconUrl}}
                            style={tailwind('w-100w h-100h')}
                        />

                        <Text
                            style={[
                                fontConfig.fontFamilyText,
                                tailwind('bg-gray-300 p-3 w-64 h-24 text-center text-22fz uppercase rounded-full')
                                ]}
                            numberOfLines={1}
                        >
                            {main}
                        </Text>
                        
                        <Text 
                            style={[
                                fontConfig.fontFamilyText,
                                tailwind('bg-gray-300 pt-3 w-64 h-12 text-center text-22fz rounded-full')
                                ]}
                            numberOfLines={1}
                        >
                            {tempText}
                        </Text>
                        <Text 
                            style={[
                                fontConfig.fontFamilyText,
                                fontConfig.temperatureColor,
                                tailwind('bg-gray-300 pb-32 w-64 h-12 text-center text-44fz rounded-full')
                                ]}
                            numberOfLines={1}
                        >
                            {Math.round(temp)}&deg;F
                        </Text>

                        <Text
                            style={[
                                fontConfig.fontFamilyText,
                                tailwind('bg-gray-300 p-3 w-64 h-40 text-center text-22fz rounded-full')
                                ]}
                            numberOfLines={5}
                        >
                            {descriptionText}
                        </Text>

                    </View>

                    <View style={tailwind('bg-gray-300 p-3 max-w-full h-16 text-center rounded-full')}>
                            <TouchableOpacity
                                onPress={() => {
                                    console.log('refreshed');
                                }}
                            >
                                <Ionicons 
                                    name={reloadIconName}
                                    size={40}
                                    color={"black"}
                                />
                            </TouchableOpacity>
                    </View>

                </View>
            </View>

        );

    };

    if (!theCurrentWeather) {

        return <LoadingMessage 
                    font={fontConfig} 
                    loadText={loadingText} 
                />; 
    };

};
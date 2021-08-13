import React from 'react';
import { ImageBackground, ScrollView, View } from 'react-native';

import { tailwind } from '../../tailwind.js';

import WeatherContent from '../componentsMain/WeatherContent.js';

import setBGImage from '../hooks/setBGImage.js';

/**
 * @WeatherScreen - Base Weather Screen component,
 * imports WeatherContent to obtain weather data.
 * @backgroundImage - Custom hook importing the
 * background image set by setBGImage.
 * 
 * @returns - Weather Screen base component
 */

export default WeatherScreen = () => {

    const backgroundImage = setBGImage();

    return (

        <ImageBackground
            source={backgroundImage}
            style={tailwind('w-full h-full')}
        >
        <View style={tailwind('bg-gray-500 flex-col w-full h-16 rounded-lg')} />

            <ScrollView
                style={tailwind('pt-10 bg-transparent flex-1')}
                scrollEnabled={true}
            >
                <WeatherContent />
                
            </ScrollView>

        <View style={tailwind('bg-gray-500 flex-col-reverse w-full h-16 rounded-lg')} />
        </ImageBackground>

    );

};
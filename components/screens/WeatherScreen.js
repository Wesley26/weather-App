import React, { useState } from 'react';
import { Text,
        View } from 'react-native';

import { tailwind } from '../../tailwind.js';

import getWeather from '../hooks/getWeather';


const WeatherScreen = () => {

    const theCurrentWeather = getWeather();
    console.log(theCurrentWeather);

    return (

        <View style={tailwind('bg-white pt-5 flex-1 justify-center items-center')}>
            <Text>Sample React Native Text idk</Text>

        </View>

    );

}; export default WeatherScreen;
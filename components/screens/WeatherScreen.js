import React from 'react';
import { Text,
    TouchableOpacity,
        View } from 'react-native';

import { tailwind } from '../../tailwind.js';

import getWeather from '../hooks/getWeather';


const WeatherScreen = () => {

    const handleWeather = () => {
        
        const theCurrentWeather = getWeather();
        console.log(theCurrentWeather);
        return theCurrentWeather;

    };

    return (

        <View style={tailwind('bg-white pt-5 flex-1 justify-center items-center')}>
            <Text>Sample React Native Text idk</Text>

            <TouchableOpacity
                onPress={handleWeather()}
            >
                <Text>Obtain the Weather</Text>
            </TouchableOpacity>
            

        </View>

    );

}; export default WeatherScreen;
import React from 'react';
import { Platform,
    View,
    Text } from 'react-native';

import { tailwind } from '../../tailwind.js';

/**
 * @LoadingMessage - componenet returns loading message
 * if the WeatherContent componenet does not have any
 * weather data
 * 
 * @param - loadText: string which takes loading text to
 * display to user.
 */

export default LoadingMessage = ({ loadText }) => {

    return (

        <View style={[
            { fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir" },
            tailwind('bg-transparent flex-1 justify-center items-center text-36fz')
            ]}>

            <View style={tailwind('bg-white bg-opacity-30 px-5 py-10 justify-center items-center rounded-lg')}>

                <Text style={tailwind('bg-white p-3 rounded-full')}>
                    {loadText}
                </Text>

            </View>

        </View>

    );
};
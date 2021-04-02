import React from 'react';
import { View,
        Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { tailwind } from '../../../tailwind.js';

/**
 * @LoadingMessage - componenet returns loading message
 * if the WeatherContent componenet does not have any
 * weather data
 * 
 * @param - loadText: string which takes loading text to
 * display to user.
 * @param - font: object to pass through font text config
 * from WeatherContent component
 */

export default LoadingMessage = ({ font, loadText }) => {

    return (

        <View style={tailwind('bg-transparent flex-1 justify-center items-center')}>

            <View style={tailwind('bg-white bg-opacity-30 px-5 py-10 justify-center items-center rounded-lg')}>

                <AntDesign
                    style={tailwind('bg-gray-300 p-3 w-64 h-16 text-center justify-center items-center rounded-full')}
                    name="loading1"
                    size={30}
                    color="black"
                />

                <Text style={[
                            font.fontFamilyText,
                            tailwind('bg-gray-300 p-3 w-64 h-16 text-center text-22fz rounded-full')
                            ]}>
                    {loadText}
                </Text>

            </View>

        </View>

    );
};
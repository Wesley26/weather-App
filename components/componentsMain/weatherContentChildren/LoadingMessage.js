import React from 'react';
import { View,
        Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import fontConfig from '../../config/fontConfig.js';
import { tailwind } from '../../../tailwind.js';

/**
 * @LoadingMessage - component returns loading message
 * if the WeatherContent component does not have any
 * weather data
 * 
 * @param - loadText: string which takes loading text to
 * display to user.
 * @param - font: object to pass through font text config
 * from WeatherContent component
 */

export default LoadingMessage = ({ font, loadText }) => {

    const loadingIconName = `loading1`;

    return (

        <View style={tailwind('bg-transparent flex-1 justify-center items-center')}>

            <View style={tailwind('bg-white bg-opacity-30 px-5 py-10 justify-center items-center rounded-lg')}>

                <AntDesign
                    style={tailwind('bg-gray-300 p-3 w-64 h-16 text-center justify-center items-center')}
                    name={loadingIconName}
                    size={30}
                    color={fontConfig.loadingColor.color}
                />

                <Text style={[
                            font.fontFamilyText,
                            tailwind('bg-gray-300 p-3 w-64 h-16 text-center text-22fz')
                            ]}>
                    {loadText}
                </Text>

            </View>

        </View>

    );
};
import React from 'react';
import { View, Text } from 'react-native';

import fontConfig from '../../config/fontConfig.js';
import { tailwind } from '../../../tailwind.js';

/**
 * CurrentTemperatre child component
 * 
 * @param - tempText: passed from WeatherContent.js
 * @param - temp: main temperature passed from WeatherContent.js
 * @param - tempSymbol: units symbol passed from
 * WeatherContent.js
 */

export default CurrentTemperature = ({ tempText, temp, tempSymbol }) => {
    return (
        <View>
            <Text
                style={[
                    fontConfig.fontFamilyText,
                    tailwind('bg-gray-300 pt-3 w-64 h-12 text-center text-22fz')
                ]}
                numberOfLines={1}
            >
                {tempText}
            </Text>
            <Text
                style={[
                    fontConfig.fontFamilyText,
                    fontConfig.temperatureColor,
                    tailwind('bg-gray-300 pb-32 w-64 h-44 text-center text-44fz')
                ]}
                numberOfLines={1}
            >
                {Math.round(temp)}{tempSymbol}
            </Text>
        </View>
    );
};
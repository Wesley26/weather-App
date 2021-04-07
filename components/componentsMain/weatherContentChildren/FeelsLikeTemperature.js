import React from 'react';
import { View, Text } from 'react-native';

import fontConfig from '../../config/fontConfig.js';
import { tailwind } from '../../../tailwind.js';

/**
 * FeelsLikeTemperature child component
 * 
 * @param - feelsLikeText: string de-structured from
 * WeatherContent.js containing the temperature as it
 * feels like outside.
 */

export default FeelsLikeTemperature = ({ feelsLikeText }) => {
    return (
        <View style={tailwind('border-b-2 border-gray-600')}>
            <Text
                style={[
                    fontConfig.fontFamilyText,
                    tailwind('bg-gray-300 w-64 h-14 text-center text-22fz')
                ]}
                numberOfLines={2}
            >
                {feelsLikeText}
            </Text>
        </View>
    );
};
import React from 'react';
import { Text } from 'react-native';

import fontConfig from '../../config/fontConfig.js';
import { tailwind } from '../../../tailwind.js';

/**
 * WeatherMain child component
 * 
 * @param - mainWeatherName: Displayed in all caps,
 * the name of the main weather Object that is de-structured
 * from WeatherContent.js
 */

export default WeatherMain = ({ mainWeatherName }) => {
    return (
        <Text
            style={[
                fontConfig.fontFamilyText,
                tailwind('bg-gray-300 p-3 w-64 h-24 text-center text-22fz uppercase')
            ]}
            numberOfLines={1}
        >
            {mainWeatherName}
        </Text>
    );
};
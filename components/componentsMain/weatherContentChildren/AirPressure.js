import React from 'react';
import { Text } from 'react-native';

import fontConfig from '../../config/fontConfig.js';
import { tailwind } from '../../../tailwind.js';

/**
 * AirPressure child component
 * 
 * @param - airPressureText: Air pressure text
 * passed from WeatherContent.js
 */

export default AirPressure = ({ airPressureText }) => {
    return (
        <Text style={[
            fontConfig.fontFamilyText,
            tailwind('bg-gray-300 p-3 w-64 h-28 text-center text-22fz')
            ]}>
            {airPressureText}
        </Text>
    );
};
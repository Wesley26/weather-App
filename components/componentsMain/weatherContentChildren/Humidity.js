import React from 'react';
import { Text } from 'react-native';

import { tailwind, fontConfig} from '../../../tailwind.js';

/**
 * Humidity child component
 * 
 * @param - humidityText: humidity string data
 * passed from WeatherContent.js
 */

export default Humidity = ({ humidityText }) => {
    return (
        <Text style={[
            fontConfig.fontFamilyText,
            tailwind('bg-gray-300 px-3 pt-12 pb-3 w-64 h-32 text-center text-22fz')
            ]}>
            {humidityText}
        </Text>
    );
};
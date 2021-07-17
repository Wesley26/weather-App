import React from 'react';
import { Text } from 'react-native';

import { tailwind, fontConfig } from '../../../tailwind.js';

/**
 * CityName child component
 * 
 * @param - name: the current city name
 * de-structured from WeatherContent.js
 */

export default CityName = ({ name }) => {
    return (
        <Text style={[
            fontConfig.fontFamilyText,
            tailwind('bg-gray-300 p-3 w-64 h-16 text-center text-22fz')
            ]}>
            {name}
        </Text>
    );
};
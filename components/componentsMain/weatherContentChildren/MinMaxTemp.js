import React from 'react';
import { Text } from 'react-native';

import fontConfig from '../../config/fontConfig.js';
import { tailwind } from '../../../tailwind.js';

/**
 * MinMaxTemp child component
 * 
 * @param - tempMinMaxText: minimum and maximum
 * temperatures passed from WeatherContent.js
 */

export default MinMaxTemp = ({ tempMinMaxText }) => {
    return (
        <Text
            style={[
                fontConfig.fontFamilyText,
                tailwind('bg-gray-300 w-64 h-44 text-center text-22fz')
            ]}
            numberOfLines={5}
        >
            {tempMinMaxText}
        </Text>
    );
};
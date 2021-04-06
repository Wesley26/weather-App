import React from 'react';
import { Text } from 'react-native';

import fontConfig from '../../config/fontConfig.js';
import { tailwind } from '../../../tailwind.js';

/**
 * WeatherDescription child component
 * 
 * @param - descriptionText: Description of the
 * main weather passed from WeatherContent.js
 */

export default WeatherDescription = ({ descriptionText }) => {
    return (
        <Text
            style={[
                fontConfig.fontFamilyText,
                tailwind('bg-gray-300 p-3 w-64 h-40 text-center text-22fz')
            ]}
            numberOfLines={5}
        >
            {descriptionText}
        </Text>
    );
};
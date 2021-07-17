import React from 'react';
import { View, Text } from 'react-native';

import { tailwind, fontConfig } from '../../../tailwind.js';

/**
 * WeatherDescription child component
 * 
 * @param - descriptionText: Description of the
 * main weather passed from WeatherContent.js
 */

export default WeatherDescription = ({ descriptionText }) => {
    return (
        <View style={tailwind('bg-gray-300 border-b-2 border-gray-600')}>
            <Text
                style={[
                    fontConfig.fontFamilyText,
                    tailwind('bg-gray-300 p-3 w-64 h-32 text-center text-22fz')
                ]}
                numberOfLines={5}
            >
                {descriptionText}
            </Text>
        </View>
    );
};
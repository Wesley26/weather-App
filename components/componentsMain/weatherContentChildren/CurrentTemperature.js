import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

    const tempIconName = `thermometer`;

    return (
        <View>
            
            <Text
                style={[
                    fontConfig.fontFamilyText,
                    tailwind('bg-gray-300 pt-7 w-64 h-14 text-center text-22fz')
                ]}
                numberOfLines={1}
            >
                {tempText}
            </Text>

            <View style={tailwind('bg-gray-300 flex-row justify-center items-center')}>
                <MaterialCommunityIcons
                    style={tailwind('pl-8 pt-10 pb-28')}
                    name={tempIconName}
                    size={45}
                    color={fontConfig.temperatureColor.color}
                />
                <Text
                    style={[
                        fontConfig.fontFamilyText,
                        fontConfig.temperatureColor,
                        tailwind('bg-gray-300 pb-20 pr-10 w-36 h-32 text-center text-44fz')
                    ]}
                    numberOfLines={1}
                >
                    {Math.round(temp)}{tempSymbol}
                </Text>
            </View>

        </View>
    );
};
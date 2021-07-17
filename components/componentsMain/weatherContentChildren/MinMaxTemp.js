import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { tailwind, fontConfig } from '../../../tailwind.js';

/**
 * MinMaxTemp child component
 * 
 * @param - tempMinText: minimum
 * temperature passed from WeatherContent.js
 * @param - tempMinText: maximum
 * temperature passed from WeatherContent.js
 */

export default MinMaxTemp = ({ tempMinText, tempMaxText }) => {

    const tempLowIcon = `thermometer-minus`;
    const tempHighIcon = `thermometer-plus`;

    return (
        <View style={tailwind('bg-gray-300 px-1.5 pt-8 pb-8 border-b-2 border-gray-600 flex-col justify-center items-center')}>

            <View style={tailwind('bg-gray-300 flex-row justify-center items-center')}>
                <MaterialCommunityIcons
                        style={tailwind('pl-8 pt-10 pb-12')}
                        name={tempLowIcon}
                        size={35}
                        color={fontConfig.tempMinColor.color}
                />
                <Text
                    style={[
                        fontConfig.fontFamilyText,
                        tailwind('bg-gray-300 w-44 h-16 text-center text-22fz')
                    ]}
                    numberOfLines={3}
                >
                    {tempMinText}
                </Text>
            </View>

            <View style={tailwind('bg-gray-300 flex-row justify-center items-center')}>
                <MaterialCommunityIcons
                        style={tailwind('pl-8 pt-10 pb-12')}
                        name={tempHighIcon}
                        size={35}
                        color={fontConfig.tempMinColor.color}
                />
                <Text
                    style={[
                        fontConfig.fontFamilyText,
                        tailwind('bg-gray-300 w-44 h-16 text-center text-22fz')
                    ]}
                    numberOfLines={3}
                    >
                    {tempMaxText}
                </Text>
            </View>
        </View>
    );
};
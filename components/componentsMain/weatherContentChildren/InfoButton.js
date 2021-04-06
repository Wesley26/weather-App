import React from 'react';
import { View, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { tailwind } from '../../../tailwind.js';

/**
 * InfoButton child component
 * 
 * @returns - InfoButton component
 */

export default InfoButton = () => {

    const infoIconName = Platform.OS === 'ios' ? 'ios-information-sharp' : 'md-information';
    const infoDescription = `Weather-App, created by Wesley Dzitzer. Weather Data is obtained from OpenWeather Map.`;

    return (
        <View style={tailwind('bg-gray-300 p-3 max-w-full h-16 text-center rounded-full')}>

            <TouchableOpacity
                onPress={() => {
                    alert(`${infoDescription}`);
                    console.log(`Displayed: ${infoDescription}`);
                }}
            >
                <Ionicons
                    name={infoIconName}
                    size={40}
                    color={"black"}
                />
            </TouchableOpacity>

        </View>
    );
};
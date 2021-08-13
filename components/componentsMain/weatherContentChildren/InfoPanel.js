import React from 'react';
import { View, Text } from 'react-native';

import { tailwind, fontConfig } from '../../../tailwind.js';

/**
 * Still WIP
 * @infoPanelText - text passed from WeatherContent.js
 */

export default InfoPanel = ({ infoPanelText }) => {

    return (

        <View style={tailwind('px-10 pt-6 pb-12 justify-center items-center flex-col')}>

            <Text style={[
                        fontConfig.fontFamilyText,
                        tailwind('bg-gray-300 p-3 w-64 h-56 text-center text-22fz')
                        ]}>
                {infoPanelText}
            </Text>

        </View>
        
    );
};
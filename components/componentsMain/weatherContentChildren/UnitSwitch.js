import React, { useState, useEffect } from 'react';
import { View, Switch, Text } from 'react-native';

import { tailwind, fontConfig } from '../../../tailwind.js';

/**
 * Unit Switcher child component. Based on switch's boolean
 * value useState hook isEnabled, set useEffect hook currentUnit
 * to either "imperial" or "metric".
 * 
 * @param - switchHeader: Displays the unit switch header
 * text passed from WeatherContent.js
 */

export default UnitSwitch = ({ switchHeader }) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const [currentUnit, setCurrentUnit] = useState("imperial");

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    useEffect(() => {

        switch (isEnabled) {
            case true:
                
                setCurrentUnit("imperial");
                break;
        
            default:

                setCurrentUnit("metric");
                break;
        };

        console.log(`Current units are set to: ${currentUnit}`); //uncomment for current unit

    }, [isEnabled]);

    return (
        <View style={tailwind('bg-gray-300 border-t-2 p-3 w-64 h-48')}>

            <Text style={tailwind('text-center text-22fz')}>
                {switchHeader}
            </Text>

            <View style={tailwind('flex-1 justify-center items-center')}>
            <Switch
                style={fontConfig.switchSize}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            </View>

        </View>
    );
};
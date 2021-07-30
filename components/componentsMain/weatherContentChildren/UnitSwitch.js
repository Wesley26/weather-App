import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { tailwind } from '../../../tailwind.js';

/**
 * Unit Switcher child component. Based on switch's boolean
 * value useState hook isEnabled, set useEffect hook currentUnit
 * to either "imperial" or "metric".
 * 
 * A useReducer hook should be implemented here - still WIP.
 */

export default UnitSwitch = ({ imperialUnits, 
                                metricUnits, 
                                standardUnits, 
                                switchHeader }) => {

    //const [theCurrentUnitSetting, setTheCurrentUnitSetting] = useState("imperial");

    return (

        <View style={tailwind('bg-gray-300 border-t-2 p-3 w-64 h-48')}>

            <Text style={tailwind('text-center text-22fz')}>
                {switchHeader}
            </Text>

            <View style={tailwind('flex-1 justify-center items-center')}>

                <TouchableOpacity
                    style={tailwind('')}
                    onPress={() => console.log(`The Demo metric button has been pressed.`)}
                >
                    <Text style={tailwind('')}>
                        {metricUnits}
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    );
};
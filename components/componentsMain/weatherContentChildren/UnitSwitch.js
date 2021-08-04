import React, { useContext } from 'react';
import { Text, View } from 'react-native';

import { tailwind } from '../../../tailwind.js';

import { CurrentUnitContext } from '../../hooks/CurrentUnitContext.js';

import { 
        UnitSettingButton 
       } from '../reusableComponents/index.js';

/**
 * UnitSwitch child component.
 * 
 * @param - imperialUnits: Text passed from WeatherContext.js for
 * imperial units touchable opacity button label.
 * @param - metricUnits: Text passed from WeatherContext.js for
 * metric units touchable opacity button label.
 * @param - standardUnits: Text passed from WeatherContext.js for
 * standard units touchable opacity button label.
 * @param - switchHeader: Header label for this component passed
 * from WeatherContext.js
 */

export default UnitSwitch = ({ imperialUnits, 
                                metricUnits, 
                                standardUnits, 
                                switchHeader }) => {

    const { theCurrentUnit, setCurrentUnit } = useContext(CurrentUnitContext);

    return (

        <View style={tailwind('bg-gray-300 border-t-2 p-3 w-64 h-48')}>

            <Text style={tailwind('text-center text-22fz')}>
                {switchHeader}
            </Text>

            <View style={tailwind('flex-1 justify-center items-center')}>

                <UnitSettingButton
                    setUnit={() => {
                        if (theCurrentUnit !== "metric") {
                            setCurrentUnit("metric");
                        };
                        console.log(`The ${metricUnits} button was pressed.`);
                    }}
                    styleTO={tailwind('')}
                    styleText={tailwind('')}
                    unitText={metricUnits}
                />

            </View>

        </View>
    );
};
import React, { useContext } from 'react';
import { View, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { tailwind } from '../../../tailwind.js';

import { InfoPanelContext } from '../../hooks/InfoPanelContext.js';

/**
 * InfoButton child component
 * 
 * @infoPanelToggle - Inherited from InfoPanelContext.js
 * @setInfoPanelToggle - Inherited from InfoPanelContext.js
 * @infoIconName - Determines which platform (iOS/android) and displays
 * the correct IonIcon.
 * 
 * @returns - InfoButton component
 */

export default InfoButton = () => {

    const { infoPanelToggle, setInfoPanelToggle } = useContext(InfoPanelContext);
    const infoIconName = Platform.OS === 'ios' ? 'ios-information-sharp' : 'md-information';

    return (
        <View style={tailwind('bg-gray-300 p-3 max-w-full h-16 text-center rounded-full')}>

            <TouchableOpacity
                onPress={() => {
                    setInfoPanelToggle(!infoPanelToggle);
                    console.log(`Toggled info panel.`); //Uncomment for testing.
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
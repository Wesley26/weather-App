import React, { useContext, useEffect, useState } from 'react';
import { Animated, Linking, View, Text } from 'react-native';

import {
    UnitSettingButton,
} from '../reusableComponents/index.js';

import { InfoPanelContext } from '../../hooks/InfoPanelContext.js';

import { tailwind, fontConfig } from '../../../tailwind.js';

/**
 * Info Panel child component.
 * 
 * @infoPanelText - text object passed from WeatherContent.js
 * The text object contains the text describing the app in a
 * brief summary to the end user, instructions on how the end
 * user can submit feedback, and a link going back to
 * portfolio website contact me page.
 * NOTE: UnitSettingButton is being re-used as a Linking
 * website URL button. Please take note of the documentation for
 * the button and what it is doing (example: setUnit is opening
 * a URL link instead of changing the unit settings).
 * 
 * @returns - InfoPanel component
 */

export default InfoPanel = ({ infoPanelText }) => {

    const { infoPanelToggle } = useContext(InfoPanelContext);

    /**
     * Animated spring while this
     * component appears to the end
     * user.
     */

    const [springAnimate] = useState(new Animated.Value(0));

    useEffect(() => {

        if (infoPanelToggle === true) {

            Animated.spring(springAnimate, {
                toValue: 1,
                friction: 1,
                useNativeDriver: true
            }).start(); //spring in

        } else {

            Animated.spring(springAnimate, {
                toValue: 0,
                friction: 1,
                useNativeDriver: true
            }).start(); //spring out

        };

    }, [infoPanelToggle]);

    return (

        <Animated.View style={[
                { transform: [{ scale: springAnimate }]},
                tailwind('px-10 pt-6 pb-12 justify-center items-center flex-col')
            ]}>

            <Text style={[
                        fontConfig.fontFamilyText,
                        tailwind('bg-gray-300 p-3 w-64 h-44 text-center text-22fz')
                        ]}>
                {infoPanelText.one}
            </Text>

            <Text style={[
                        fontConfig.fontFamilyText,
                        tailwind('bg-gray-300 p-3 w-64 h-36 text-center text-22fz')
                        ]}>
                {infoPanelText.two}
            </Text>

            <View style={tailwind('bg-gray-300 pb-6 w-64 justify-center items-center flex-col')}>

                <UnitSettingButton 
                    setUnit={() => Linking.openURL(infoPanelText.contactUrl)}
                    styleTO={[
                        tailwind('my-1 rounded-50br border-3bw w-200w h-80h justify-center content-center items-center'),
                        fontConfig.btn_BorderColor,
                        fontConfig.btn_websiteUrlColor
                    ]}
                    styleText={[
                        tailwind('text-20fz py-5s'),
                        fontConfig.fontFamilyText
                    ]}
                    unitText={infoPanelText.three}
                />

            </View>

        </Animated.View>
        
    );
};
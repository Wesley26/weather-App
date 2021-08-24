import React, { useContext, useRef } from 'react';
import { ImageBackground, ScrollView, View } from 'react-native';

import WeatherContent from '../componentsMain/WeatherContent.js';

import { InfoPanelContext } from '../hooks/InfoPanelContext.js';
import setBGImage from '../hooks/setBGImage.js';

import { tailwind } from '../../tailwind.js';

/**
 * @WeatherScreen - Base Weather Screen component,
 * imports WeatherContent to obtain weather data.
 * @backgroundImage - Custom hook importing the
 * background image set by setBGImage.
 * @scrollViewRef - useRef hook sets a reference
 * point so scrollToEnd() can be implemented for
 * the scrollView's onContentSizeChange prop.
 * 
 * @returns - Weather Screen base component
 */

export default WeatherScreen = () => {

    const backgroundImage = setBGImage();
    const { infoPanelToggle } = useContext(InfoPanelContext);
    const scrollViewRef = useRef();

    return (

        <ImageBackground
            source={backgroundImage}
            style={tailwind('w-full h-full')}
        >
        <View style={tailwind('bg-gray-500 flex-col w-full h-16 rounded-lg')} />

            <ScrollView
                ref={scrollViewRef}
                style={tailwind('pt-10 bg-transparent flex-1')}
                scrollEnabled={true}
                onContentSizeChange={
                    (contentWidth, contentHeight) => {
                    if (infoPanelToggle === true) {
                        scrollViewRef.current.scrollToEnd({ animated: true })
                    };
                }}
            >
                <WeatherContent />
                
            </ScrollView>

        <View style={tailwind('bg-gray-500 flex-col-reverse w-full h-16 rounded-lg')} />
        </ImageBackground>

    );

};
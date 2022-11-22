import { FC, useContext, useEffect, useRef, useState } from 'react';
import { Animated, ImageBackground, View } from 'react-native';
import { styled } from 'nativewind';

import WeatherContent from '../componentsMain/WeatherContent';

import { InfoPanelContext } from '../hooks/InfoPanelContext';
import setBGImage from '../hooks/setBGImage';

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

const WeatherScreen:FC = () => {

    const StyledImageBackground = styled(ImageBackground);
    const StyledView = styled(View);
    const StyledAnimatedScrollView = styled(Animated.ScrollView);

    const backgroundImage = setBGImage();
    const { infoPanelToggle } = useContext(InfoPanelContext);
    const scrollViewRef = useRef<any>();

    /**
     * Animated spring while this
     * component appears to the end
     * user. Only Spring in here.
     */

    const [springScrollAnimate] = useState<any>(new Animated.Value(0));

    useEffect(() => {

        Animated.spring(springScrollAnimate, {
            toValue: 1,
            friction: 8.3,
            useNativeDriver: true
        }).start(); //spring in

    }, []);

    return (

            <StyledImageBackground
                source={backgroundImage}
                className='flex-1 w-full h-full'
            >
            <StyledView className='bg-gray-500 flex-col w-full h-16 rounded-lg' />

                <StyledAnimatedScrollView
                    ref={scrollViewRef}
                    style={[{ transform: [{ scale: springScrollAnimate }]}]}
                    className='pt-10 bg-transparent flex-1'
                    scrollEnabled={true}
                    onContentSizeChange={
                        (contentWidth: any, contentHeight: any) => {
                        if (infoPanelToggle === true) {
                            scrollViewRef.current.scrollToEnd({ animated: true })
                        };
                    }}
                >
                    <WeatherContent />
                    
                </StyledAnimatedScrollView>

            <StyledView className='bg-gray-500 flex-col-reverse w-full h-16 rounded-lg' />
            </StyledImageBackground>

    );

};

export default WeatherScreen;
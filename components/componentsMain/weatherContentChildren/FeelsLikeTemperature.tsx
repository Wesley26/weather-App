import { FC } from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';

import { fontConfig } from '../../../tailwind';

/**
 * FeelsLikeTemperature child component
 * 
 * @param - feelsLikeText: string de-structured from
 * WeatherContent.js containing the temperature as it
 * feels like outside.
 */

interface FEELS_LIKE_TEMP {
    feelsLikeText: string,
};

const FeelsLikeTemperature:FC<FEELS_LIKE_TEMP> = (props) => {

    const StyledView = styled(View);
    const StyledText = styled(Text);

    return (
        <StyledView className='border-b-2 border-gray-600'>
            <StyledText
                style={fontConfig.fontFamilyText}
                className='bg-gray-300 w-64 h-14 text-center text-22fz'
                numberOfLines={2}
            >
                {props.feelsLikeText}
            </StyledText>
        </StyledView>
    );
};

export default FeelsLikeTemperature;
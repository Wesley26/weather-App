import { FC } from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';

import { fontConfig } from '../../../tailwind';

/**
 * WeatherDescription child component
 * 
 * @param - descriptionText: Description of the
 * main weather passed from WeatherContent.js
 */

interface WEATHER_DESC {
    descriptionText: string,
}

const WeatherDescription:FC<WEATHER_DESC> = (props) => {

    const StyledView = styled(View);
    const StyledText = styled(Text);

    return (

        <StyledView className='bg-gray-300 border-b-2 border-gray-600'>
            <StyledText
                style={fontConfig.fontFamilyText}
                className='bg-gray-300 p-3 w-64 h-32 text-center text-22fz'
                numberOfLines={5}
            >
                {props.descriptionText}
            </StyledText>
        </StyledView>

    );
};

export default WeatherDescription;
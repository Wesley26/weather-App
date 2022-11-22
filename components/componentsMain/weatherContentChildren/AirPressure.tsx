import { FC } from 'react';
import { Text } from 'react-native';
import { styled } from 'nativewind';

import { fontConfig } from '../../../tailwind';

/**
 * AirPressure child component
 * 
 * @param - airPressureText: Air pressure text
 * passed from WeatherContent.js
 */

interface AIR_PRESSURE {
    airPressureText: string,
};

const AirPressure:FC<AIR_PRESSURE> = (props) => {

    const StyledText = styled(Text);

    return (
        <StyledText 
            style={fontConfig.fontFamilyText}
            className='bg-gray-300 p-3 w-64 h-28 text-center text-22fz'
        >
            {props.airPressureText}
        </StyledText>
    );
};

export default AirPressure;
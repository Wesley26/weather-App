import { FC } from 'react';
import { Text } from 'react-native';
import { styled } from 'nativewind';

import { fontConfig } from '../../../tailwind';

/**
 * Humidity child component
 * 
 * @param - humidityText: humidity string data
 * passed from WeatherContent.js
 */

interface HUMIDITY {
    humidityText: string,
}

const Humidity:FC<HUMIDITY> = (props) => {

    const StyledText = styled(Text);

    return (
        <StyledText style={fontConfig.fontFamilyText}
            className='bg-gray-300 px-3 pt-12 pb-3 w-64 h-32 text-center text-22fz'
        >
            {props.humidityText}
        </StyledText>
    );
};

export default Humidity;
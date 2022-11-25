import { FC } from 'react';
import { Text } from 'react-native';
import { styled } from 'nativewind';

import { fontConfig } from '../../../tailwind';

/**
 * CityName child component
 * 
 * @param - name: the current city name
 * de-structured from WeatherContent.js
 */

interface CITY_NAME {
    name: string,
};

const CityName:FC<CITY_NAME> = (props) => {

    const StyledText = styled(Text);

    return (
        <StyledText 
            style={fontConfig.fontFamilyText}
            className='bg-gray-300 p-3 w-64 h-16 text-center text-22fz'
        >
            {props.name}
        </StyledText>
    );
};

export default CityName;
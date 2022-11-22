import { FC } from 'react';
import { View, Text } from 'react-native';

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
    return (
        <View className='bg-gray-300 border-b-2 border-gray-600'>
            <Text
                style={fontConfig.fontFamilyText}
                className='bg-gray-300 p-3 w-64 h-32 text-center text-22fz'
                numberOfLines={5}
            >
                {props.descriptionText}
            </Text>
        </View>
    );
};

export default WeatherDescription;
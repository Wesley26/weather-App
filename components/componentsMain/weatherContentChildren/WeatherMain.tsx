import { FC } from 'react';
import { Text } from 'react-native';

import { fontConfig } from '../../../tailwind';

/**
 * WeatherMain child component
 * 
 * @param - mainWeatherName: Displayed in all caps,
 * the name of the main weather Object that is de-structured
 * from WeatherContent.js
 */

interface WEATHER_MAIN {
    mainWeatherName: any,
}

const WeatherMain:FC<WEATHER_MAIN> = (props) => {
    return (
        <Text
            style={fontConfig.fontFamilyText}
            className='bg-gray-300 p-3 w-64 h-24 text-center text-22fz uppercase'
            numberOfLines={1}
        >
            {props.mainWeatherName}
        </Text>
    );
};

export default WeatherMain;
import { FC } from 'react';
import { Image } from 'react-native';

/**
 * WeatherIcon child component
 * 
 * @param - icon: passes the icon fetched in
 * WeatherContent.js
 */

interface WEATHER_ICON {
    icon: any,
}

const WeatherIcon:FC<WEATHER_ICON> = (props) => {
    return (
        <Image 
            source={props.icon}
            className='w-100w h-100h'
        />
    );
};

export default WeatherIcon;
import React from 'react';
import { Image } from 'react-native';

import { tailwind } from '../../../tailwind.js';

/**
 * WeatherIcon child component
 * 
 * @param - icon: passes the icon fetched in
 * WeatherContent.js
 */

export default WeatherIcon = ({ icon }) => {
    return (
        <Image 
            source={icon}
            style={tailwind('w-100w h-100h')}
        />
    );
};
import React from 'react';
import { Text,
        View } from 'react-native';

import { tailwind } from '../../tailwind.js';

import useLocation from '../hooks/useLocation.js';


const WeatherScreen = () => {

    /**
     * @theLocation - if permission was granted in useLocation() hook,
     * returns an Object containg lat. and long. coordinates.
     * @theLatitude - latitude decimal number value
     * @theLongitude - longitude decimal number value
     */
    const theLocation = useLocation();
    let theLatitude, theLongitude;
    //console.log(theLocation); //confirm we are getting location, uncomment if needed

    if (theLocation !== undefined) {

        theLatitude = theLocation.latitude;
        theLongitude = theLocation.longitude;

        console.log(`The Latitude is: ${theLatitude} The Longitude is: ${theLongitude}`);
    };

    return (

        <View style={tailwind('bg-white pt-5 flex-1 justify-center items-center')}>
            <Text>Sample React Native Text idk</Text>

        </View>

    );

}; export default WeatherScreen;
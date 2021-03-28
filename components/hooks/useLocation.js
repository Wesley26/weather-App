import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

/**
 * @getLocation - Hook to request permission from the user to
 * obtain the mobile device's current location. 
 * @returns the @location value
 * 
 * @location - useState hook storing in state device's current location
 * @granted - boolean value storing whether user has given their permission
 * to obtain current location
 * @coords - object storing @latitude and @longitude
 */

export default useLocation = () => {

    const [location, setLocation] = useState();

    const getLocation = async () => {

        try {

            const { granted } = await Location.requestPermissionsAsync();

            if (!granted) {
                return;
            };

            const { coords: { latitude, longitude }} = await Location.getCurrentPositionAsync();

            setLocation({ latitude, longitude })
            
        } catch (error) {
            console.log(error);
        };

    };

    useEffect(() => {

        getLocation();

    }, []);

    return location;

};
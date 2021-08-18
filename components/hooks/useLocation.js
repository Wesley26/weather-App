import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

/**
 * @getLocation - Hook to request permission from the user to
 * obtain the mobile device's current location. Returns the location value.
 * 
 * @permsNotGranted - alert the user permission to use their current location is needed
 * @location - useState hook storing in state device's current location
 * @granted - boolean value storing whether user has given their permission
 * to obtain current location
 * @coords - object storing latitude and longitude decimal values
 * 
 * NOTE: Location.getCurrentPositionAsync requires an accuracy value of
 * at least 6. The app will fail to fetch weather data otherwise.
 * NOTE 2: As of 08/17/2021, this component is compatible only for
 * Android 10 and below. iOS so far is unaffected. Re-visit this
 * component if expo-location is updated to be compatible for
 * Android 11.
 */

export default useLocation = () => {

    const permsNotGranted = `You need to give your permission to view the current weather in your area.`;
    const [location, setLocation] = useState();

    const getLocation = async () => {

        try {

            const { granted } = await Location.requestForegroundPermissionsAsync();

            if (!granted) {
                alert(permsNotGranted);
                return;
            };

            const { coords: { latitude, longitude }} = await Location.getCurrentPositionAsync({ accuracy: 6 });

            //console.log(`The coords are: ${ latitude, longitude }`); //Uncomment for testing
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
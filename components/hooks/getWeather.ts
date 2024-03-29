import { useContext, useState, useEffect } from 'react';

import openWeather from '../clientSecret/openWeather';

import useLocation from './useLocation';
import { CurrentUnitContext } from './CurrentUnitContext';

/**
 * @getWeather - if permission was granted in useLocation() hook,
 * uses Object theLocation containing lat. and long. coordinates as
 * decimal number values. Returns the currentWeather. useEffect()
 * relies on the value of Object theLocation.
 *
 * @WEATHER_API_KEY - accessed from clientSecret directory,
 * hidden for repo security and must be manually provided.
 * @theLocation - custom hook which asks for user permission for
 * the device's current location.
 * @theCurrentUnit - CurrentUnitContext Context for the units
 * @currentWeather - useState hook to store JSON result of
 * current weather data.
 * @baseWeatherUrl - initial OpenWeatherMap API access string
 * @weatherUrl - Full OpenWeatherMap API access string
 */

const getWeather = () => {

    const WEATHER_API_KEY = openWeather();

    const theLocation = useLocation();
    const { theCurrentUnit } = useContext(CurrentUnitContext);

    const [currentWeather, setCurrentWeather] = useState<any>();

    useEffect(() => {

        let baseWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?', 
            weatherUrl = "";
        //console.log(`Current location: ${theLocation}`); //confirm we are getting location, uncomment if needed
        console.log(`${theCurrentUnit} is the currently set unit.`); //confirm we are getting unit set

        if (theLocation !== undefined) {

            weatherUrl = `${baseWeatherUrl}lat=${theLocation.latitude}&lon=${theLocation.longitude}&units=${theCurrentUnit}&appid=${WEATHER_API_KEY}`;
            console.log(weatherUrl); //uncomment if needed

            const fetchWeather = async () => {

                try {

                const response = await fetch(weatherUrl);
                const result = await response.json();

                    if (response.ok) {

                        setCurrentWeather(result);

                    } else {

                        alert(result.message);

                    };

                } catch (error: any) {

                    console.log(error);
                    alert(error.message);
                    
                } finally {
                    console.log("async function fetchWeather() has been run."); //API rate call confirmation
                };

            };

            //API calls must not occur more than once every minute.
            fetchWeather();

        };

    }, [theLocation, theCurrentUnit, WEATHER_API_KEY]);

    return currentWeather;

};

export default getWeather;
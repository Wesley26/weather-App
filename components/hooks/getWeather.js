import { useState, useEffect } from 'react';

import useLocation from '../hooks/useLocation.js';

/**
 * @getWeather - if permission was granted in useLocation() hook,
 * uses Object theLocation containing lat. and long. coordinates as
 * decimal number values. Returns the currentWeather. useEffect()
 * relies on the value of Object theLocation.
 *
 * @WEATHER_API_KEY - accessed from clientSecret directory,
 * hidden for repo security and must be manually provided.
 * @currentWeather - useState hook to store JSON result of
 * current weather data.
 * @baseWeatherUrl - initial OpenWeatherMap API access string
 * @weatherUrl - Full OpenWeatherMap API access string
 */

export default getWeather = () => {

    const theLocation = useLocation();

    const [currentWeather, setCurrentWeather] = useState();

    useEffect(() => {

        const { WEATHER_API_KEY } = require("../clientSecret/openWeather.json");

        let baseWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?', 
            weatherUrl = "";
        //console.log(theLocation); //confirm we are getting location, uncomment if needed

        if (theLocation !== undefined) {

            weatherUrl = `${baseWeatherUrl}lat=${theLocation.latitude}&lon=${theLocation.longitude}&units=imperial&appid=${WEATHER_API_KEY}`;
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

                } catch (error) {

                    console.log(error);
                    alert(error.message);
                    
                } finally {
                    console.log("async function fetchWeather() has been run."); //API rate call confirmation
                };

            };

            //API calls must not occur more than once every minute.
            fetchWeather();

        };

    }, [theLocation]);

    return currentWeather;

};
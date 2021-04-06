import React from 'react';
import { View } from 'react-native';

import fontConfig from '../config/fontConfig.js';
import { tailwind } from '../../tailwind.js';

import {
            AirPressure,
            CityName,
            CurrentTemperature,
            FeelsLikeTemperature,
            Humidity,
            InfoButton,
            LoadingMessage,
            MinMaxTemp,
            WeatherDescription,
            WeatherIcon,
            WeatherMain,
} from './weatherContentChildren/index.js';

import getWeather from '../hooks/getWeather.js';

/**
 * @WeatherContent - calls getWeather to import and display
 * weather data.
 * 
 * @returns - if theCurrentWeather exists, show all weather content
 * if theCurrentWeather does not exist, show loading prompt to the user
 */

export default WeatherContent = () => {

    const theCurrentWeather = getWeather();
    console.log(theCurrentWeather); //uncomment to see theCurrentWeather Object

    const loadingText = `Loading ...`;

    if (theCurrentWeather) {

        /**
         * See the OpenWeather Map API docs under
         * "By Geographic coordinates" for full
         * documentation on how weather data is
         * de-structured below.
         */

        const { 
            main: { temp, 
                    feels_like,
                    temp_min,
                    temp_max,
                    pressure,
                    humidity
            },
            weather: [details],
            name,
            
            } = theCurrentWeather;

        const { icon, main, description } = details;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

        /**
         * Template strings for the weather user interface.
         * This must always be placed after theCurrentWeather's
         * de-structured object.
         */
        const tempText = `Current Temperature is: `;
        const tempSymbol = `°F`;
        const feelsLikeText =`It feels like: ${Math.round(feels_like)}°F`;
        const tempMinMaxText =`The current low temperature is: ${Math.round(temp_min)}°F

The current high temperature is: ${Math.round(temp_max)}°F`;

        const airPressureText = `The current air pressure in your area is: ${pressure} hPa`;
        const humidityText = `The current humidity in your area is: ${humidity} %`;

        const descriptionText = `The current weather in your area is ${description}.`;

        return (

            <View style={tailwind('bg-transparent mb-24 flex-1 justify-center items-center')}>
                            
                <View style={tailwind('bg-white bg-opacity-30 p-5 justify-center items-center rounded-lg')}>

                    <View style={tailwind('p-10 justify-center items-center flex-col')}>

                        <CityName 
                            name={name}
                        />

                        <WeatherIcon 
                            icon={{uri: iconUrl}}
                        />

                        <WeatherMain 
                            mainWeatherName={main}
                        />
                        
                        <CurrentTemperature 
                            tempText={tempText}
                            temp={temp}
                            tempSymbol={tempSymbol}
                        />
                        
                        <FeelsLikeTemperature
                            feelsLikeText={feelsLikeText}
                        />

                        <MinMaxTemp 
                            tempMinMaxText={tempMinMaxText}
                        />

                        <Humidity 
                            humidityText={humidityText}
                        />

                        <AirPressure 
                            airPressureText={airPressureText}
                        />

                        <WeatherDescription 
                            descriptionText={descriptionText}
                        />

                    </View>

                    <InfoButton />

                </View>
            </View>

        );

    };

    if (!theCurrentWeather) {

        return <LoadingMessage 
                    font={fontConfig} 
                    loadText={loadingText} 
                />; 
    };

};
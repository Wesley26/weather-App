import React, { useContext, useEffect, useState } from 'react';
import { Animated, View } from 'react-native';

import {
    AirPressure,
    CityName,
    CurrentTemperature,
    FeelsLikeTemperature,
    Humidity,
    InfoButton,
    InfoPanel,
    LoadingMessage,
    MinMaxTemp,
    UnitSwitch,
    WeatherDescription,
    WeatherIcon,
    WeatherMain,
} from './weatherContentChildren/index.js';

import getWeather from '../hooks/getWeather.js';
import { InfoPanelContext } from '../hooks/InfoPanelContext.js';
import setUnits from '../hooks/setUnits.js';

import { tailwind, fontConfig } from '../../tailwind.js';

/**
 * @WeatherContent - calls getWeather to import and display
 * weather data.
 * 
 * @returns - if theCurrentWeather exists, show all weather content
 * if theCurrentWeather does not exist, show loading prompt to the user
 */

export default WeatherContent = () => {

    const { infoPanelToggle } = useContext(InfoPanelContext);

    const theCurrentUnit = setUnits();
    const theCurrentWeather = getWeather();
    console.log(theCurrentWeather); //uncomment to see theCurrentWeather Object

    const loadingText = `Loading ...`;
    const unitSwitchHeader = `Unit Settings`;
    const unitImperialText = `Imperial Units`;
    const unitMetricText = `Metric Units`;
    const unitStandardText = `Scientific Units`;

    /**
     * Add text to display for InfoPanel component here
     */

    const infoPanelText = {

    one: `Pocket Weather, created by Wesley Dzitzer. Weather Data is obtained from OpenWeather Map.`,
    two: `For any inquiries and/or feedback, contact me on my website: `,
    contactUrl: `https://wesleywebdev.com/contactMe`,
    three: `wesleywebdev.com`

    };

    /**
     * Animated fade in for component InfoPanel.
     * NOTE: fade out animated isn't visible, the
     * animation can occur quickly
     */

    const [fadeAnimate] = useState(new Animated.Value(0));

    useEffect(() => {

        if (infoPanelToggle === true) {

            Animated.timing(fadeAnimate, {
                toValue: 1,
                duration: 2500,
                useNativeDriver: true
            }).start(); //fade in

        } else {

            Animated.timing(fadeAnimate, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }).start(); //fade out

        };

    }, [infoPanelToggle]);

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
        
        let tempSymbol = theCurrentUnit;

        const feelsLikeText =`It feels like: ${Math.round(feels_like)}${tempSymbol}`;
        const tempMinText =`Current Low: ${Math.round(temp_min)}${tempSymbol}`;
        const tempMaxText =`Current High: ${Math.round(temp_max)}${tempSymbol}`;

        const airPressureText = `Current Air Pressure: ${pressure} hPa`;
        const humidityText = `Current Humidity: ${humidity} %`;

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

                        <WeatherDescription 
                            descriptionText={descriptionText}
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
                            tempMinText={tempMinText}
                            tempMaxText={tempMaxText}
                        />

                        <Humidity 
                            humidityText={humidityText}
                        />

                        <AirPressure 
                            airPressureText={airPressureText}
                        />

                        <UnitSwitch 
                            switchHeader={unitSwitchHeader}
                            imperialUnits={unitImperialText}
                            metricUnits={unitMetricText}
                            standardUnits={unitStandardText}
                        />

                    </View>

                    <Animated.View style={[
                            { opacity: fadeAnimate },
                        ]}>

                        { infoPanelToggle ? 
                        (
                            <InfoPanel 
                                infoPanelText={infoPanelText}
                            />
                        ) : null }

                    </Animated.View>

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
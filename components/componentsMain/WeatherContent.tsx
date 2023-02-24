import { FC, useContext, useEffect, useState } from 'react';
import { Animated, View } from 'react-native';
import { styled } from 'nativewind';

import {
    AdBanner,
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
} from './weatherContentChildren/index';

import getWeather from '../hooks/getWeather';
import { InfoPanelContext } from '../hooks/InfoPanelContext';
import setUnits from '../hooks/setUnits';

import { fontConfig } from '../../tailwind';

/**
 * @WeatherContent - calls getWeather to import and display
 * weather data.
 * 
 * @returns - if theCurrentWeather exists, show all weather content
 * if theCurrentWeather does not exist, show loading prompt to the user
 */

const WeatherContent:FC = () => {

    const StyledView = styled(View);
    const StyledAnimatedView = styled(Animated.View);

    const { infoPanelToggle } = useContext(InfoPanelContext);

    const theCurrentUnit = setUnits();
    const theCurrentWeather = getWeather();
    console.log(theCurrentWeather); //uncomment to see theCurrentWeather Object

    const loadingText: string = `Loading ...`;
    const unitSwitchHeader: string = `Unit Settings`;
    const unitImperialText: string = `Imperial Units`;
    const unitMetricText: string = `Metric Units`;
    const unitStandardText: string = `Scientific Units`;

    /**
     * Add text to display for InfoPanel component here
     */

    const infoPanelText = {

        one: `Pocket Weather, created by Wesley Dzitzer. Weather Data is obtained from OpenWeather Map.` as string,
        two: `For any inquiries and/or feedback, contact me on my website: ` as string,
        contactUrl: `https://wesleywebdev.com/contactMe` as string,
        three: `wesleywebdev.com` as string,

    };

    /**
     * Animated fade in for component InfoPanel.
     * NOTE: fade out animated isn't visible, the
     * animation can occur quickly
     */

    const [fadeAnimate] = useState<any>(new Animated.Value(0));

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
        const iconUrl: string = `https://openweathermap.org/img/wn/${icon}@4x.png`;

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
        
            <StyledView className='bg-transparent mb-24 flex-1 justify-center items-center'>
                            
                <StyledView className='bg-white/30 px-2 py-5 justify-center items-center rounded-lg'>

                    <StyledView className='p-10 justify-center items-center flex-col'>

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

                    </StyledView>

                    {/* <StyledView className='p-5 justify-center items-center flex-col'>
                        
                        <AdBanner /> */}
                        {/* Todo: Need to figure out how to run test ads again */}

                    {/* </StyledView> */}

                    <StyledAnimatedView style={[
                            { opacity: fadeAnimate },
                        ]}>

                        { infoPanelToggle ? 
                        (
                            <InfoPanel 
                                infoPanelText={infoPanelText}
                            />
                        ) : null }

                    </StyledAnimatedView>

                    <InfoButton />

                </StyledView>
            </StyledView>

        );

    };

    if (!theCurrentWeather) {

        return <LoadingMessage 
                    font={fontConfig} 
                    loadText={loadingText} 
                />; 
    };

    return null; //TS needed this

};

export default WeatherContent;
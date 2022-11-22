import { FC } from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { fontConfig } from '../../../tailwind';

/**
 * CurrentTemperatre child component
 * 
 * @param - tempText: passed from WeatherContent.js
 * @param - temp: main temperature passed from WeatherContent.js
 * @param - tempSymbol: units symbol passed from
 * WeatherContent.js
 */

interface CURRENT_TEMP {
    tempText: string,
    temp: number,
    tempSymbol: string,
};

const CurrentTemperature:FC<CURRENT_TEMP> = (props) => {

    const tempIconName: any = `thermometer`;

    return (
        <View>
            
            <Text
                style={fontConfig.fontFamilyText}
                className='bg-gray-300 pt-7 w-64 h-14 text-center text-22fz'
                numberOfLines={1}
            >
                {props.tempText}
            </Text>

            <View className='bg-gray-300 flex-row justify-center items-center'>
                <MaterialCommunityIcons
                    className='pl-8 pt-10 pb-28'
                    name={tempIconName}
                    size={45}
                    color={fontConfig.temperatureColor.color}
                />
                <Text
                    style={[
                        fontConfig.fontFamilyText,
                        fontConfig.temperatureColor,
                    ]}
                    className='bg-gray-300 pb-20 pr-10 w-44 h-32 text-center text-44fz'
                    numberOfLines={1}
                >
                    {Math.round(props.temp)}{props.tempSymbol}
                </Text>
            </View>

        </View>
    );
};

export default CurrentTemperature;
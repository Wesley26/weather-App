import { FC } from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { fontConfig } from '../../../tailwind';

/**
 * MinMaxTemp child component
 * 
 * @param - tempMinText: minimum
 * temperature passed from WeatherContent.js
 * @param - tempMinText: maximum
 * temperature passed from WeatherContent.js
 */

interface MIN_MAX_TEMP {
    tempMinText: string,
    tempMaxText: string,
};

const MinMaxTemp:FC<MIN_MAX_TEMP> = (props) => {

    const tempLowIcon: any = `thermometer-minus`;
    const tempHighIcon: any = `thermometer-plus`;

    return (
        <View className='bg-gray-300 px-1.5 pt-8 pb-8 border-b-2 border-gray-600 flex-col justify-center items-center'>

            <View className='bg-gray-300 flex-row justify-center items-center'>
                <MaterialCommunityIcons
                        className='pl-8 pt-10 pb-12'
                        name={tempLowIcon}
                        size={35}
                        color={fontConfig.tempMinColor.color}
                />
                <Text
                    style={fontConfig.fontFamilyText}
                    className='bg-gray-300 w-44 h-16 text-center text-22fz'
                    numberOfLines={3}
                >
                    {props.tempMinText}
                </Text>
            </View>

            <View className='bg-gray-300 flex-row justify-center items-center'>
                <MaterialCommunityIcons
                        className='pl-8 pt-10 pb-12'
                        name={tempHighIcon}
                        size={35}
                        color={fontConfig.tempMinColor.color}
                />
                <Text
                    style={fontConfig.fontFamilyText}
                    className='bg-gray-300 w-44 h-16 text-center text-22fz'
                    numberOfLines={3}
                >
                    {props.tempMaxText}
                </Text>
            </View>
        </View>
    );
};

export default MinMaxTemp;
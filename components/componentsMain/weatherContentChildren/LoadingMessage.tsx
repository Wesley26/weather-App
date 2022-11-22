import { FC } from 'react';
import { ActivityIndicator, 
        View,
        Text } from 'react-native';

import { fontConfig } from '../../../tailwind';

/**
 * @LoadingMessage - component returns loading message
 * if the WeatherContent component does not have any
 * weather data
 * 
 * @param - loadText: string which takes loading text to
 * display to user.
 * @param - font: object to pass through font text config
 * from WeatherContent component
 */

interface LOADING_MESSAGE {
    font: any,
    loadText: string,
};

const LoadingMessage:FC<LOADING_MESSAGE> = (props) => {

    return (

        <View className='bg-transparent flex-1 justify-center items-center'>

            <View className='bg-white bg-opacity-30 px-5 py-10 justify-center items-center rounded-lg'>

                <ActivityIndicator
                    className='bg-gray-300 p-3 w-64 h-16 text-center justify-center items-center'
                    size={60}
                    color={fontConfig.loadingColor.color}
                />

                <Text style={props.font.fontFamilyText}
                    className='bg-gray-300 p-3 w-64 h-16 text-center text-22fz'
                >
                    {props.loadText}
                </Text>

            </View>

        </View>

    );
};

export default LoadingMessage;
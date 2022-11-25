import { FC } from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';
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

    const StyledView = styled(View);
    const StyledText = styled(Text);
    const StyledMUI = styled(MaterialCommunityIcons);

    const tempLowIcon: any = `thermometer-minus`;
    const tempHighIcon: any = `thermometer-plus`;

    return (
        <StyledView className='bg-gray-300 px-1.5 pt-8 pb-8 border-b-2 border-gray-600 flex-col justify-center items-center'>

            <StyledView className='bg-gray-300 flex-row justify-center items-center'>
                <StyledMUI
                        className='pl-8 pt-10 pb-12'
                        name={tempLowIcon}
                        size={35}
                        color={fontConfig.tempMinColor.color}
                />
                <StyledText
                    style={fontConfig.fontFamilyText}
                    className='bg-gray-300 w-44 h-16 text-center text-22fz'
                    numberOfLines={3}
                >
                    {props.tempMinText}
                </StyledText>
            </StyledView>

            <StyledView className='bg-gray-300 flex-row justify-center items-center'>
                <StyledMUI
                        className='pl-8 pt-10 pb-12'
                        name={tempHighIcon}
                        size={35}
                        color={fontConfig.tempMinColor.color}
                />
                <StyledText
                    style={fontConfig.fontFamilyText}
                    className='bg-gray-300 w-44 h-16 text-center text-22fz'
                    numberOfLines={3}
                >
                    {props.tempMaxText}
                </StyledText>
            </StyledView>
        </StyledView>
    );
};

export default MinMaxTemp;
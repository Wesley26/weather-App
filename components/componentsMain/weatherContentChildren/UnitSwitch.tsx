import { FC, useContext } from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';

import { CurrentUnitContext } from '../../hooks/CurrentUnitContext';

import { 
        UnitSettingButton 
       } from '../reusableComponents/index';

/**
 * UnitSwitch child component.
 * 
 * @param - imperialUnits: Text passed from WeatherContext.js for
 * imperial units touchable opacity button label.
 * @param - metricUnits: Text passed from WeatherContext.js for
 * metric units touchable opacity button label.
 * @param - standardUnits: Text passed from WeatherContext.js for
 * standard units touchable opacity button label.
 * @param - switchHeader: Header label for this component passed
 * from WeatherContext.js
 */

interface UNIT_SWITCH {
    imperialUnits: string,
    metricUnits: string,
    standardUnits: string,
    switchHeader: string,
};

const UnitSwitch:FC<UNIT_SWITCH> = (props) => {

    const StyledView = styled(View);
    const StyledText = styled(Text);

    const { theCurrentUnit, setCurrentUnit } = useContext(CurrentUnitContext);

    return (

        <StyledView className='bg-gray-300 border-t-2 p-3 w-64 h-96'>

            <StyledText className='text-center text-22fz'>
                {props.switchHeader}
            </StyledText>

            <StyledView className='flex-1 justify-center items-center'>

                <UnitSettingButton
                    setUnit={() => {
                        if (theCurrentUnit !== "imperial") {
                            setCurrentUnit("imperial");
                        };
                        console.log(`The ${props.imperialUnits} button was pressed.`);
                    }}
                    styleTO={'my-1 rounded-50br border-3bw w-200w h-80h justify-center content-center items-center'}
                        //fontConfig.btn_BorderColor, //(revisit these, I think they need to be part of tailwind config now)
                        //fontConfig.btn_ImperialColor
                    styleText={'text-25fz py-5s'}
                        //fontConfig.fontFamilyText
                    unitText={props.imperialUnits}
                />

                <UnitSettingButton
                    setUnit={() => {
                        if (theCurrentUnit !== "metric") {
                            setCurrentUnit("metric");
                        };
                        console.log(`The ${props.metricUnits} button was pressed.`);
                    }}
                    styleTO={'my-1 rounded-50br border-3bw w-200w h-80h justify-center content-center items-center'}
                        //fontConfig.btn_BorderColor, //(revisit these, I think they need to be part of tailwind config now)
                        //fontConfig.btn_MetricColor
                    styleText={'text-25fz py-5s'}
                        //fontConfig.fontFamilyText
                    unitText={props.metricUnits}
                />

                <UnitSettingButton
                    setUnit={() => {
                        if (theCurrentUnit !== "standard") {
                            setCurrentUnit("standard");
                        };
                        console.log(`The ${props.standardUnits} button was pressed.`);
                    }}
                    styleTO={'my-1 rounded-50br border-3bw w-200w h-80h justify-center content-center items-center'}
                        //fontConfig.btn_BorderColor, //(revisit these, I think they need to be part of tailwind config now)
                        //fontConfig.btn_StandardColor
                    styleText={'text-25fz py-5s'}
                        //fontConfig.fontFamilyText
                    unitText={props.standardUnits}
                />

            </StyledView>

        </StyledView>
    );
};

export default UnitSwitch;
import { FC } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styled } from 'nativewind';

/**
 * UnitSettingButton custom TouchableOpacity reusable button
 * component.
 * 
 * @setUnit - Function for the TouchableOpacity onPress param.
 * @styleTO - Style param for TouchableOpacity component.
 * @styleText - Style param from Text component.
 * @unitText - Text inside the Text component (button label).
 */

interface UNIT_SETTING_BUTTON {
    setUnit: () => any,
    styleTO: string,
    styleText: string,
    unitText: string,
};

const UnitSettingButton:FC<UNIT_SETTING_BUTTON> = (props) => {

    const StyledView = styled(View);
    const StyledTouchableOpacity = styled(TouchableOpacity);
    const StyledText = styled(Text);

    return (
        <StyledView>
            <StyledTouchableOpacity
                className={props.styleTO}
                onPress={props.setUnit}
            >
                <StyledText className={props.styleText}>
                    {props.unitText}
                </StyledText>
            </StyledTouchableOpacity>
        </StyledView>
    );
};

export default UnitSettingButton;
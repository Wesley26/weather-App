import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

/**
 * UnitSettingButton custom TouchableOpacity reusable button
 * component.
 * 
 * @setUnit - Function for the TouchableOpacity onPress param.
 * @styleTO - Style param for TouchableOpacity component.
 * @styleText - Style param from Text component.
 * @unitText - Text inside the Text component (button label).
 */

export default UnitSettingButton = ({ setUnit,
                                      styleTO,
                                      styleText,
                                      unitText, }) => {

    return (
        <View>
            <TouchableOpacity
                style={styleTO}
                onPress={setUnit}
            >
                <Text style={styleText}>
                    {unitText}
                </Text>
            </TouchableOpacity>
        </View>
    );
};
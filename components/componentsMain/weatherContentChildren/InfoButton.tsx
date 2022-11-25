import { FC, useContext } from 'react';
import { View, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styled } from 'nativewind';

import { InfoPanelContext } from '../../hooks/InfoPanelContext';

/**
 * InfoButton child component
 * 
 * @infoPanelToggle - Inherited from InfoPanelContext.js
 * @setInfoPanelToggle - Inherited from InfoPanelContext.js
 * @infoIconName - Determines which platform (iOS/android) and displays
 * the correct IonIcon.
 * 
 * @returns - InfoButton component
 */

const InfoButton:FC = () => {

    const StyledView = styled(View);
    const StyledTouchableOpacity = styled(TouchableOpacity);
    const StyledIonicons = styled(Ionicons);

    const { infoPanelToggle, setInfoPanelToggle } = useContext(InfoPanelContext);
    const infoIconName: any = Platform.OS === 'ios' ? 'ios-information-sharp' : 'md-information';

    return (
        <StyledView className='bg-gray-300 p-3 max-w-full h-16 text-center rounded-full'>

            <StyledTouchableOpacity
                onPress={() => {
                    setInfoPanelToggle(!infoPanelToggle);
                    console.log(`Toggled info panel.`); //Uncomment for testing.
                }}
            >
                <StyledIonicons
                    name={infoIconName}
                    size={40}
                    color={"black"}
                />
            </StyledTouchableOpacity>

        </StyledView>
    );
};

export default InfoButton;
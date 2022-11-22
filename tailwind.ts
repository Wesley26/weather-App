import { Platform, StyleSheet } from 'react-native';

/**
 * Font Family and Font Color config. Export to all
 * components that require custom font settings that
 * tailwind-rn does not support.
 * All styles that use supported tailwind classes must be
 * generated from tailwind.config.js.
 */

const fontConfig = StyleSheet.create({

    //global manual font config/color styles

    fontFamilyText: { 
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir" 
    },

    /**
    //Keep this style in case switches are ever re-introduced.
    switchSize: {
        transform: [{ scaleX: 2.7 }, { scaleY: 2.7 }]
    },
    */

    loadingColor: {
        color: '#000000',
    },

    temperatureColor: {
        color: '#ef4635',
    },

    tempMinColor: {
        color: '#000000',
    },

    tempMaxColor: {
        color: '#000000',
    },

    //manual font config/color styles for UnitSwitch.js

    btn_BorderColor: {
        borderColor: `#000000`,
    },

    btn_ImperialColor: {
        backgroundColor: `#8fbc8f`,
    },

    btn_MetricColor: {
        backgroundColor: `#6495ed`,
    },

    btn_StandardColor: {
        backgroundColor: `#b0e0e6`,
    },

    btn_websiteUrlColor: {
        backgroundColor: `#90ee90`,
    },

});

export { fontConfig };
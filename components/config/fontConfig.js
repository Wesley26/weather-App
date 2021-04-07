import { Platform } from 'react-native';

/**
 * Font Family and Font Color config file. Export to all
 * components that require custom font settings that
 * tailwind-rn does not support.
 * All styles that use supported tailwind classes must be
 * generated from tailwind.config.js.
 */

export default {

    fontFamilyText: { 
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir" 
    },

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

};
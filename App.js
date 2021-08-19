import React, { useState } from 'react';

import { CurrentUnitContext } from './components/hooks/CurrentUnitContext.js';
import { InfoPanelContext } from './components/hooks/InfoPanelContext.js';

import WeatherScreen from './components/screens/WeatherScreen';

/**
 * Renders WeatherScreen.js, Context Provider for CurrentUnitContext and InfoPanelContext. 
 * Runs the entire app.
 * 
 * @theCurrentUnit - String value, inherits string Context from CurrentUnitContext.
 * @setCurrentUnit - Function, inherits empty function Context from CurrentUnitContext.
 * @infoPanelToggle - Boolean value, inherits boolean Context from InfoPanelContext.
 * @setInfoPanelToggle - Function, inherits empty function Context from InfoPanelContext.
 * All useState hooks contain a global scope for the entire app.
 */

export default App = () => {

    const [theCurrentUnit, setCurrentUnit] = useState("imperial");
    const [infoPanelToggle, setInfoPanelToggle] = useState(false);
    
    return ( 

        <CurrentUnitContext.Provider
            value={{ theCurrentUnit, setCurrentUnit }}
        >
        <InfoPanelContext.Provider
            value={{ infoPanelToggle, setInfoPanelToggle }}
        >
            <WeatherScreen />
        </InfoPanelContext.Provider>
        </CurrentUnitContext.Provider>

    );

};
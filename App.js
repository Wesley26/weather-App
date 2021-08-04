import React, { useState } from 'react';

import { CurrentUnitContext } from './components/hooks/CurrentUnitContext.js';

import WeatherScreen from './components/screens/WeatherScreen';

/**
 * Renders WeatherScreen.js, Context Provider for CurrentUnitContext. Runs the
 * entire app.
 * 
 * @theCurrentUnit - String value, inherits string Context from CurrentUnitContext.
 * @setCurrentUnit - Function, inherits empty function Context from CurrentUnitContext.
 * useState hook contains a global scope for the entire app.
 */

export default App = () => {

    const [theCurrentUnit, setCurrentUnit] = useState("imperial");
    
    return ( 

        <CurrentUnitContext.Provider
            value={{ theCurrentUnit, setCurrentUnit }}
        >
            <WeatherScreen />
        </CurrentUnitContext.Provider>

    );

};
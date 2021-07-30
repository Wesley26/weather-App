import React from 'react';

import WeatherScreen from './components/screens/WeatherScreen';

import { CurrentUnitContext } from './components/hooks/CurrentUnitContext.js';

export default App = () => { 
    
    return ( 

        <CurrentUnitContext.Provider
            value={"metric"}
        >
            <WeatherScreen />
        </CurrentUnitContext.Provider>

    );

};
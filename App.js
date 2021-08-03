import React, { useContext } from 'react';

import { CurrentUnitContext } from './components/hooks/CurrentUnitContext.js';

import WeatherScreen from './components/screens/WeatherScreen';

export default App = () => {
    
    const { theCurrentUnit, setCurrentUnit } = useContext(CurrentUnitContext);
    
    return ( 

        <CurrentUnitContext.Provider
            value={{ theCurrentUnit, setCurrentUnit }}
        >
            <WeatherScreen />
        </CurrentUnitContext.Provider>

    );

};
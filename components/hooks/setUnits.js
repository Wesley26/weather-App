import { useContext, useEffect, useState } from 'react';

import { CurrentUnitContext } from './CurrentUnitContext.js';

/**
 * @theCurrentUnit - useEffect only runs when Context 
 * theCurrentUnit's string value changes from App.js
 * @currentUnit - useState dynamically sets the current unit
 * "imperial" - °F, "metric" - °C, or "standard" - °K
 * See the OpenWeatherMap API for these unit definitions.
 */

export default setUnits = () => {

    const theCurrentUnit = useContext(CurrentUnitContext);
    const [currentUnit, setCurrentUnit] = useState(``);

    useEffect(() => {

        /**
         * currentUnit switches from theCurrentUnit 
         * useContext for "imperial" - °F, 
         * "metric" - °C, or "standard" - °K
         */

        switch (theCurrentUnit) {
            case "imperial":
                
                setCurrentUnit(`°F`);
                break;
        
            case "metric":

                setCurrentUnit(`°C`);
                break;

            default:

                setCurrentUnit(`°K`);
                break;
        };

    }, [theCurrentUnit]);

    return currentUnit;
    
};
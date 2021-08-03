import { createContext } from 'react';

/**
 * @CurrentUnitContext - create the Context for
 * CurrentUnitContext
 * 
 * @theCurrentUnit - String to initialize current unit text.
 * set "imperial" (F), "metric" (C), and "standard" (K).
 * @setCurrentUnit - Initialized as empty function. Function's
 * purpose is to set the Current Unit.
 */

export let CurrentUnitContext = createContext({

    theCurrentUnit: "metric",
    setCurrentUnit: () => {},

});

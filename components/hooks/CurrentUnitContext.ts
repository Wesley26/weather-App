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

type CURRENT_UNIT_CONTEXT = {
    theCurrentUnit: string,
    setCurrentUnit: (sCU: string) => void, 
};

export let CurrentUnitContext = createContext<CURRENT_UNIT_CONTEXT>({

    theCurrentUnit: "",
    setCurrentUnit: () => {},

});

import { createContext } from 'react';

/**
 * @InfoPanelContext - create the Context for 
 * InfoPanelContext.
 * 
 * @infoPanelToggle - Boolean which determines whether
 * the Info Panel is visible (true) or not visible
 * (false)
 * @setInfoPanelToggle - Initialized as empty function. Function's
 * purpose is to set the infoPanelToggle.
 */

export let InfoPanelContext = createContext({

    infoPanelToggle: false,
    setInfoPanelToggle: () => {},

});
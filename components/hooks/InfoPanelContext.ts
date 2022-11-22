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

type INFO_PANEL_CONTEXT = {
    infoPanelToggle: boolean,
    setInfoPanelToggle: (sIPT: boolean) => void,
};

export let InfoPanelContext = createContext<INFO_PANEL_CONTEXT>({

    infoPanelToggle: false,
    setInfoPanelToggle: () => {},

});
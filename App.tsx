import { FC, useState } from 'react';

import { CurrentUnitContext } from './components/hooks/CurrentUnitContext';
import { InfoPanelContext } from './components/hooks/InfoPanelContext';

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

const App:FC = () => {

    const [theCurrentUnit, setCurrentUnit] = useState<string>("imperial");
    const [infoPanelToggle, setInfoPanelToggle] = useState<boolean>(false);
    
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

export default App;

// import { FC } from 'react';
// import { Text, View } from 'react-native';

// const App:FC = () => {
//   return (
//     <View className="flex-1 items-center justify-center bg-white">
//       <Text>This is a test component!</Text>
//     </View>
//   );
// };

// export default App;
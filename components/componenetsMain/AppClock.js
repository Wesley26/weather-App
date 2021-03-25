import React from 'react';
import { SafeAreaView, 
        View, 
        Text, 
        } from 'react-native';

import { tailwind } from '../../tailwind.js';

import getLocalTime from '../hooks/getLocalTime.js';


const AppClock = () => {

    const theDate = getLocalTime();

    return (
        <SafeAreaView style={tailwind('h-full')}>

            <View style={tailwind('pt-12 items-center')}>
                <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
                    <Text style={tailwind('text-blue-800 font-semibold')}>
                        The current time is: {theDate.toLocaleTimeString()}
                    </Text>
                </View>
            </View>
            
        </SafeAreaView>
    );
}

export default AppClock;
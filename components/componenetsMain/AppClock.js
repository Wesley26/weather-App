import React, { useState, useEffect } from 'react';
import { SafeAreaView, 
        View, 
        Text, 
        } from 'react-native';
import { tailwind } from '../../tailwind.js';

const AppClock = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {

        let timerID = setInterval(() => tick(), 1000);

        return cleanup = () => {
            clearInterval(timerID);
        };
    });

    let tick = () => {
        setDate(new Date());
    };

    console.log(date.toLocaleTimeString());

    return (
        <SafeAreaView style={tailwind('h-full')}>

            <View style={tailwind('pt-12 items-center')}>
                <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
                    <Text style={tailwind('text-blue-800 font-semibold')}>
                        The current time is: {date.toLocaleTimeString()}
                    </Text>
                </View>
            </View>
            
        </SafeAreaView>
    );
}

export default AppClock;
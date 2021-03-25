/**
 * @AppClock - returns Date object and is
 *  exported as default for entire app
 */

import { useState, useEffect } from 'react';

const getLocalTime = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {

        let timerID = setInterval(() => tick(), 1000);

        return cleanup = () => {
            clearInterval(timerID);
        };
        
    }, []);

    let tick = () => {
        setDate(new Date());
    };

    return date;
}

export default getLocalTime;
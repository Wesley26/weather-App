import { useState, useEffect } from 'react';

/**
 * WIP custom hook.
 */

export default setUnits = () => {

    const [units, setUnits] = useState("imperial");

    useEffect(() => {

        //todo - change weather units here
        //set imperial (F), metric (C), and maybe standard (K)

    }, []);


    return units;
};
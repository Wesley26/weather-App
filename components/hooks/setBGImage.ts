import { useEffect, useState } from 'react';

/**
 * @imageBG - Object stores background images day and night
 * @backgroundImage - useState hook determines from hour Date Object
 * whether to display day or night background. Hook returns this value.
 * @settingBG - truthy determines if it is day or night hour
 */

const setBGImage = () => {
    
    const imageBG = {
        day: require("../assets/mainPhotos/Day_Clouds.jpg"),
        night: require("../assets/mainPhotos/Night_Sky.jpg"),
    };

    let hour: number = new Date().getHours();

    const [backgroundImage, setBackgroundImage] = useState();

    useEffect(() => {

        console.log(`The Current Hour is: ${hour}`); //uncomment to see current hour

        let settingBG: any = hour >= 6 && hour <= 18 ? imageBG.day : imageBG.night;
        setBackgroundImage(settingBG);

    }, [hour]);

    return backgroundImage;
};

export default setBGImage;
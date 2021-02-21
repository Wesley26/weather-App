/**
 * Application's clock JS file.
 * 
 * @param currentTime - a JS Date which is converted into 12-hour standard time.
 * @param exportHour  - exports the current hour in 24 hour time format
 * @param theTime - the current string time display exported in 12-hour format 
 * standard time.
 */

let currentTime = new Date(); //Current date for this react app.
let exportHour = currentTime.getHours();

let clockTime = currentTime => {

    /**
     * clockTime function passes in the full time from currentTime.
     * 
     * @param hour - current hour
     * @param minute - current minute
     * @param second - current second
     * @param AMPM - prints out AM or PM time of day
     * @param currentLocalHours - current Time after calculating the hours, minutes, 
     * and seconds.
     */

    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    let AMPM = "A.M.";

    if (hour > 11) { 
        AMPM = "P.M."; 
    };
    if (hour > 12) {
        hour = hour - 12;
    }
    if (hour === 0) {
        hour = 12;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    let currentLocalHours = hour + " : " + minute + 
                        " : " + second + " " + AMPM;
    
    return currentLocalHours;
};

let theTime = clockTime(currentTime);

export {
    exportHour,
    theTime,
};
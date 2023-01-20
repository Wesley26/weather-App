![Pocket Weather Icon](https://github.com/Wesley26/weather-App/blob/main/components/assets/icon.png)

# Pocket Weather React Native App

This React Native App uses the following dependencies: [React Native Docs (expo)](https://reactnative.dev/), [Expo](https://docs.expo.io/), [TailwindCSS](https://tailwindcss.com/), [NativeWind](https://www.nativewind.dev/quick-starts/expo), [Expo Icons (AntDesign, IonIcons, MaterialCommunityIcons)](https://icons.expo.fyi/), [Expo Location](https://docs.expo.io/versions/v40.0.0/sdk/location/), [expo-dev-client](https://www.npmjs.com/package/expo-dev-client), and [React Native Google Mobile Ads](https://github.com/invertase/react-native-google-mobile-ads).

Archived dependencies as of November 15th, 2022: [Tailwind-RN](https://github.com/vadimdemedes/tailwind-rn#readme)

**IMPORTANT NOTE:** Please read [this article for configuring test ads](https://support.google.com/admob/answer/9691433). [Google AdMob main page (requires google login)](https://apps.admob.com). [Updated instructions for React Native Google Mobile Ads](https://docs.page/invertase/react-native-google-mobile-ads).

Obtaining weather from [OpenWeather Map API](https://openweathermap.org/).

NOTE: android.versionCode is incremented once per android Google Play Store submission.

NOTE: For EAS build, you will need to run `npx expo customize metro.config.js`.

NOTE: as of January 20th, 2023 - run with `npx expo start`. [Review how to run the app with EAS build](https://docs.expo.dev/development/create-development-builds/). Run `expo-cli upgrade` to ensure all npm packages are up to date. Next, run `eas whoami` (or `eas login` if not logged in) to check and make sure you are logged into your Expo account. Next, run `eas build:configure` for Android. Next, run `eas build` and select Android to run an Android build. `eas build --profile development --platform android` will run an Android development build. All builds are run remotely.

[Daytime Cloud Photo Source](https://unsplash.com/photos/yQorCngxzwI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)

[Nighttime Sky Photo Source](https://unsplash.com/photos/T26KCgCPsCI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)

[Weather Icon Source (Sun Icon, the old art icon development placeholder)](https://github.com/kickstandapps/WeatherIcons/blob/master/PNG%20Files/Sun.png)

Pocket Weather (project named weather_App) reached MVP (Minimum Viable Product) stage on April 7th, 2021. Pocket Weather is a React Native app, built with Expo, compatible for both Android and iOS mobile devices.
As of September 7th, 2021, this mobile app is compatible with iOS version 14.7.1 and Android version 11 and older.
As of August 28th, 2021, this mobile app reached its production ready goal for Android Google Play Store deployment to be released as a free, ad financed app.

![Google Play Store button](https://texttofloss.com/wp-content/uploads/2021/01/Google-Play-Store-Button-300x98.png)
[Download on Google Play Store](https://play.google.com/store/apps/details?id=com.Pocket.Weather)

[Explore this app on Expo!](https://expo.io/@wesley26/projects/weather_App) Download the Expo Go app for your iOS mobile device, create an account and/or log into an existing account, and follow the instructions at the given link. Due to ads being implemented for android version, use this link **ONLY** for iOS.


## Main App Functions

This app is a simple weather App. Its main functionalities include:
- Custom hook cycles through dynamic Day/Night background images at 6am and 6pm.
- Custom hook asks user for permission to use their current mobile device's location. Current location is collected with latitude and longitude decimal coordinates.
- Custom hook fetches weather asynchronously once for each time app is opened.
- Custom hook changes the temperature units. Currently supported temperature units are Fahrenheit, Celsius, and Kelvin.

## Demo Screenshot Showcase

![Android day time](https://github.com/Wesley26/weather-App/blob/main/components/assets/demoScreenshots/weather_APP_android_Demo1.PNG)

![Android night time](https://github.com/Wesley26/weather-App/blob/main/components/assets/demoScreenshots/weather_APP_android_Demo4.PNG)

Full screenshot showcase can be found [in the components/assets/demoScreenshots folder](https://github.com/Wesley26/weather-App/tree/main/components/assets/demoScreenshots).


## Content of Repo
This app was converted from vanilla JavaScript to TypeScript React on November 20th, 2022. Content of this repo was updated since January 20th, 2023.

**components folder:**

1. assets:
- Contains all photo assets for app. Sub folder mainPhotos contains all the main background images. demoScreenshots contains demo screenshots of this app.

2. clientSecret:
- Contains all API keys used to interact with API's. The folder is hidden on this repo for security and must be manually provided. A json file named openWeather.json is required for OpenWeather Map API access. Another json file named adMob.json is required for ios/android Google AdMob API access.

3. componentsMain:
- Contains all the weather content components. `WeatherContent.tsx` is the main weather content component. All child components must be imported to this file.

- reusableComponents: Contains all reusable jsx components for this app. Index.js file exports all children components. The reusable components folder includes:
- `UnitSettingButton.tsx`: UnitSettingButton custom TouchableOpacity reusable button component. @setUnit - Function for the TouchableOpacity onPress param. @styleTO - Style param for TouchableOpacity component. @styleText - Style param from Text component. @unitText - Text inside the Text component (button label).

- weatherContentChildren: Contains all child weather content components. Index.js file exports all children components. The children weather content components folder include:
- `AdBanner.tsx`: Google AdMob child component. adMob.json is untracked for security purposes, the json requires: @AD_MOB_IOS_ID - AdMob ID imported from adMob.json for ios @AD_MOB_ANDROID_ID - AdMob ID imported from adMob.json for android @ad_ID - Platform selects which device you are currently on. Object takes the ios or android ad unit ID. PLEASE NOTE: Ensure you NEVER load a real production ad in an Android Emulator or iOS Simulator. Failure to do this can result in a ban from the AdMob program. All test ads have a test ad label.
- `AirPressure.tsx`: Air pressure text passed from WeatherContent.js
- `CityName.tsx`: The current city name de-structured from WeatherContent.js
- `CurrentTemperature.tsx`: tempText, temp: main temperature, and tempSymbol: units symbol passed from WeatherContent.js
- `FeelsLikeTemperature.tsx`:feelsLikeText: string de-structured from WeatherContent.js containing the temperature as it feels like outside.
- `Humidity.tsx`: humidityText: humidity string data passed from WeatherContent.js
- `InfoButton.tsx`: InfoButton child component @infoPanelToggle - Inherited from InfoPanelContext.js @setInfoPanelToggle - Inherited from InfoPanelContext.js @infoIconName - Determines which platform (iOS/android) and displays the correct IonIcon. @returns - InfoButton component
- `InfoPanel.tsx`: Info Panel child component. @infoPanelText - text object passed from WeatherContent.js. The text object contains the text describing the app in a brief summary to the end user, instructions on how the end user can submit feedback, and a link going back to portfolio website contact me page. NOTE: UnitSettingButton is being re-used as a Linking website URL button.Please take note of the documentation for the button and what it is doing (example: setUnit is opening a URL link instead of changing the unit settings). @returns - InfoPanel component
- `LoadingMessage.tsx`: component returns loading message if the WeatherContent component does not have any weather data. loadText: string which takes loading text to display to user. font: object to pass through font text config from WeatherContent.js component.
- `MinMaxTemp.tsx`: tempMinText: minimum temperature passed from WeatherContent.js tempMinText: maximum temperature passed from WeatherContent.js.
- `UnitSwitch.tsx`: UnitSwitch child component. imperialUnits: Text passed from WeatherContext.js for imperial units touchable opacity button label. metricUnits: Text passed from WeatherContext.js for metric units touchable opacity button label. standardUnits: Text passed from WeatherContext.js for standard units touchable opacity button label. switchHeader: Header label for this component passed from WeatherContext.js.
- `WeatherDescription.tsx`: descriptionText: Description of the main weather passed from WeatherContent.js
- `WeatherIcon.tsx`: icon: passes the icon fetched in WeatherContent.js
- `WeatherMain.tsx`: mainWeatherName: Displayed in all caps, the name of the main weather Object that is de-structured from WeatherContent.js

4. config:
- Contains placeholder.txt. This config folder will remain as a placeholder in case any back-end libraries are introduced in the future.

5. hooks:
- Contains all custom hooks. Custom hooks include:
- `CurrentUnitContext.ts`: @CurrentUnitContext - create the Context for CurrentUnitContext @theCurrentUnit - String to initialize current unit text. set "imperial" (F), "metric" (C), and "standard" (K). @setCurrentUnit - initialized as empty function. Function's purpose is to set the Current Unit.
- `getWeather.ts`: getWeather - if permission was granted in useLocation() hook, uses Object theLocation containing lat. and long. coordinates as decimal number values. Returns the currentWeather. useEffect() relies on the value of Object theLocation. @WEATHER_API_KEY - accessed from clientSecret directory, hidden for repo security and must be manually provided. @currentWeather - useState hook to store JSON result of current weather data. @baseWeatherUrl - initial OpenWeatherMap API access string @weatherUrl - Full OpenWeatherMap API access string.
- `InfoPanelContext.ts`: @InfoPanelContext - create the Context for InfoPanelContext. @infoPanelToggle - Boolean which determines whether the Info Panel is visible (true) or not visible (false) @setInfoPanelToggle - Initialized as empty function. Function's purpose is to set the infoPanelToggle.
- `setBGImage.ts`: @imageBG - Object stores background images day and night @backgroundImage - useState hook determines from hour Date Object whether to display day or night background. Hook returns this value. @settingBG - truthy determines if it is day or night hour.
- `setUnits.ts`: @theCurrentUnit - useEffect only runs when Context theCurrentUnit's string value changes from App.js @currentUnit - useState dynamically sets the current unit "imperial" - °F, "metric" - °C, or "standard" - °K See the OpenWeatherMap API for these unit definitions.
- `useLocation.ts`: @getLocation - Hook to request permission from the user to obtain the mobile device's current location. Returns the location value. @permsNotGranted - alert the user permission to use their current location is needed. @location - useState hook storing in state device's current location. @granted - Boolean value storing whether user has given their permission to obtain current location. @coords - object storing latitude and longitude decimal values.

6. screens:
- Contains all screen components. Screen components include:
- `WeatherScreen.tsx`: @WeatherScreen - Base Weather Screen component, imports WeatherContent to obtain weather data. @backgroundImage - Custom hook importing the background image set by setBGImage. @scrollViewRef - useRef hook sets a reference point so scrollToEnd() can be implemented for the scrollView's onContentSizeChange prop. @returns - Weather Screen base component.

**root folder:**

1. `App.tsx` - Renders WeatherScreen.js, Context Provider for CurrentUnitContext and InfoPanelContext.Runs the entire app. @theCurrentUnit - String value, inherits string Context from CurrentUnitContext. @setCurrentUnit - Function, inherits empty function Context from CurrentUnitContext. @infoPanelToggle - Boolean value, inherits boolean Context from InfoPanelContext. @setInfoPanelToggle - Function, inherits empty function Context from InfoPanelContext. All useState hooks contain a global scope for the entire app.
2. `tailwind.config.js` - tailwindCSS config file, generate your StyleSheet objects here in theme.extend. See the tailwindCSS documentation for more information.
3. `tailwind.ts` - create the tailwindCSS style here for react native app. Font Family and Font Color config. Export to all components that require custom font settings that tailwind-rn does not support. All styles that use supported tailwind classes must be generated from tailwind.config.js.
4. `index.tsx` - App's entry point, do not have a "main" inside package.json
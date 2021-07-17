# weather_App React Native App

This React Native App uses the following dependencies: [React Native Docs (expo)](https://reactnative.dev/), [Expo](https://docs.expo.io/), [TailwindCSS](https://tailwindcss.com/), [Tailwind-RN](https://github.com/vadimdemedes/tailwind-rn#readme), [Expo Icons (AntDesign, IonIcons, MaterialCommunityIcons)](https://icons.expo.fyi/), and [Expo Location](https://docs.expo.io/versions/v40.0.0/sdk/location/).

Obtaining weather from [OpenWeather Map API](https://openweathermap.org/).

NOTE: Use command `npx create-tailwind-rn` every time you update your tailwind.config.js file. This command is needed to create the styles.json file during development. The styles.json is un-tracked ONLY when purge is enabled.

[Daytime Cloud Photo Source](https://unsplash.com/photos/yQorCngxzwI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)

[Nighttime Sky Photo Source](https://unsplash.com/photos/T26KCgCPsCI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)

[Weather Icon Source (Sun Icon)](https://github.com/kickstandapps/WeatherIcons/blob/master/PNG%20Files/Sun.png)

weather_App reached MVP (Minimum Viable Product) stage on April 7th, 2021. weather_App is a React Native app, built with Expo, compatible for both Android and iOS mobile devices.

[Explore this app on Expo!](https://expo.io/@wesley26/projects/weather_App) Download the Expo Go app for your iOS or Android mobile device, create an account and/or log into an existing account, and follow the instructions at the given link.


## Main App Functions

This app is a simple weather App. Its main functionalities include:
- Custom hook cycles through dynamic Day/Night background images at 6am and 6pm.
- Custom hook asks user for permission to use their current mobile device's location. Current location is collected with latitude and longitude decimal coordinates.
- Custom hook fetches weather asynchronously once for each time app is opened.

## Demo Screenshot Showcase

![Android day time](https://github.com/Wesley26/weather-App/blob/main/components/assets/demoScreenshots/weather_APP_android_Demo1.PNG)

![Android night time](https://github.com/Wesley26/weather-App/blob/main/components/assets/demoScreenshots/weather_APP_android_Demo4.PNG)

Full screenshot showcase can be found [in the components/assets/demoScreenshots folder](https://github.com/Wesley26/weather-App/tree/main/components/assets/demoScreenshots).


## Content of Repo
Content of this repo was updated since April 7th, 2021.

**components folder:**

1. assets:
- Contains all photo assets for app. Sub folder mainPhotos contains all the main background images. demoScreenshots contains demo screenshots of this app.

2. clientSecret:
- Contains all API keys used to interact with API's. The folder is hidden on this repo for security and must be manually provided. A json file named openWeather.json is required.

3. componentsMain:
- Contains all the weather content components. `WeatherContent.js` is the main weather content component. All child components must be imported to this file.

- weatherContentChildren: Contains all child weather content components. Index.js file exports all children components. The children weather content components include:
- `AirPressure.js`: Air pressure text passed from WeatherContent.js
- `CityName.js`: The current city name de-structured from WeatherContent.js
- `CurrentTemperature.js`: tempText, temp: main temperature, and tempSymbol: units symbol passed from WeatherContent.js
- `FeelsLikeTemperature.js`:feelsLikeText: string de-structured from WeatherContent.js containing the temperature as it feels like outside.
- `Humidity.js`: humidityText: humidity string data passed from WeatherContent.js
- `InfoButton.js`: returns an info button component displaying information about the app author's name and API source as an alert.
- `LoadingMessage.js`: component returns loading message if the WeatherContent component does not have any weather data. loadText: string which takes loading text to display to user. font: object to pass through font text config from WeatherContent.js component.
- `MinMaxTemp.js`: tempMinText: minimum temperature passed from WeatherContent.js tempMinText: maximum temperature passed from WeatherContent.js
- `WeatherDescription.js`: descriptionText: Description of the main weather passed from WeatherContent.js
- `WeatherIcon.js`: icon: passes the icon fetched in WeatherContent.js
- `WeatherMain.js`: mainWeatherName: Displayed in all caps, the name of the main weather Object that is de-structured from WeatherContent.js

4. config:
- Contains fontConfig.js, Font Family and Font Color config file. Export to all components that require custom font settings that tailwind-rn does not support. All styles that use supported tailwind classes must be generated from tailwind.config.js.

5. hooks:
- Contains all custom hooks. Custom hooks include:
- `getWeather.js`: getWeather - if permission was granted in useLocation() hook, uses Object theLocation containing lat. and long. coordinates as decimal number values. Returns the currentWeather. useEffect() relies on the value of Object theLocation. @WEATHER_API_KEY - accessed from clientSecret directory, hidden for repo security and must be manually provided. @currentWeather - useState hook to store JSON result of current weather data. @baseWeatherUrl - initial OpenWeatherMap API access string @weatherUrl - Full OpenWeatherMap API access string.
- `useLocation.js`: @getLocation - Hook to request permission from the user to obtain the mobile device's current location. Returns the location value. @permsNotGranted - alert the user permission to use their current location is needed. @location - useState hook storing in state device's current location. @granted - boolean value storing whether user has given their permission to obtain current location. @coords - object storing latitude and longitude decimal values.

6. screens:
- Contains all screen components. Screen components include:
- `WeatherScreen.js`: @WeatherScreen - Base Weather Screen component, imports WeatherContent to obtain weather data. @imageBG - Object stores background images day and night. @backgroundImage - useState hook determines from hour Date Object whether to display day or night background. @settingBG - truthy determines if it is day or night hour. @returns - Weather Screen base component.

**root folder:**

1. App.js - renders WeatherScreen.js
2. styles.json - tailwindCSS "style sheet" in json Object format
3. tailwind.config.js - tailwindCSS config file, generate your StyleSheet objects here in theme.extend. See the tailwindCSS documentation for more information.
4. tailwind.js - create the tailwindCSS style here for react native app.
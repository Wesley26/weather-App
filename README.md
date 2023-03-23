# weather_app

Pocket Weather implementing [Dart/Flutter](https://docs.flutter.dev/).

Obtaining weather from [OpenWeather Map API](https://home.openweathermap.org/).

[Daytime Cloud Photo Source](https://unsplash.com/photos/yQorCngxzwI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)

[Nighttime Sky Photo Source](https://unsplash.com/photos/T26KCgCPsCI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)

![Google Play Store button](https://texttofloss.com/wp-content/uploads/2021/01/Google-Play-Store-Button-300x98.png)
[Download on Google Play Store](https://play.google.com/store/apps/details?id=com.Pocket.Weather) Currently implements an old build of React Native Expo. The goal is to update this app with a new version from version code 3 or higher for android utilizing Dart/Flutter. [See this article on updating the version for all platforms inside pubspec.yaml](https://stackoverflow.com/questions/53570575/flutter-upgrade-the-version-code-for-play-store). Run `flutter build apk` or `flutter run` once this number value has changed. 

[Lab: Write your first Flutter app](https://docs.flutter.dev/get-started/codelab)
[Cookbook: Useful Flutter samples](https://docs.flutter.dev/cookbook)
[Changing App Package Name](https://pub.dev/packages/change_app_package_name)

## Main App Functions

Planning to re-implement:
This app is a simple weather App. Its main functionalities include:
- Custom hook cycles through dynamic Day/Night background images at 6am and 6pm.
- Custom hook asks user for permission to use their current mobile device's location. Current location is collected with latitude and longitude decimal coordinates.
- Custom hook fetches weather asynchronously once for each time app is opened.
- Custom hook changes the temperature units. Currently supported temperature units are Fahrenheit, Celsius, and Kelvin.

## Content of Repo
This app was converted from vanilla JavaScript to TypeScript React on November 20th, 2022. This build implementing Dart/Flutter started development on March 23rd, 2023. Content of this repo was updated since March 23rd, 2023.
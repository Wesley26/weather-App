import 'package:flutter/material.dart';

import 'homescreen.dart';

import '../components/universalstyles.dart';

///Text for Weather Page
const sampleWeatherText = "Weather data page - Let's return home for now.";
const goToHomeText = "Home Page";

class WeatherScreen extends StatelessWidget {
  const WeatherScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Stack(children: <Widget>[
      Container(
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: Styles.backgroundImage,
            fit: BoxFit.cover,
          ),
        ),
      ),
      Center(
        child: Container(
          width: 300,
          height: 75,
          padding: const EdgeInsets.all(16.0),
          decoration: const BoxDecoration(
            color: Colors.lightBlueAccent,
          ),
          child: const Center(
            child: Text(sampleWeatherText, style: Styles.boldTextStyles),
          ),
        ),
      ),
      Container(
        width: 300,
        height: 50,
        margin: const EdgeInsets.only(top: 480.0, left: 46.0),
        child: ElevatedButton(
            child: const Text(goToHomeText, style: Styles.boldTextStyles),
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => const HomeScreen()),
              );
            }),
      )
    ]));
  }
}

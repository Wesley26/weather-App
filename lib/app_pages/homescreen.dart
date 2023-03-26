import 'package:flutter/material.dart';

import 'weatherscreen.dart';

import '../components/universalstyles.dart';

///Text for Home page
const sampleMainText = "Hello World! This will be weather app's home page.";
const goToWeatherText = "Weather Page";

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

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
            child: Text(sampleMainText, style: Styles.boldTextStyles),
          ),
        ),
      ),
      Container(
        width: 300,
        height: 50,
        margin: const EdgeInsets.only(top: 480.0, left: 46.0),
        child: ElevatedButton(
            child: const Text(goToWeatherText, style: Styles.boldTextStyles),
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => const WeatherScreen()),
              );
            }),
      )
    ]));
  }
}

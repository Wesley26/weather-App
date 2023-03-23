import 'package:flutter/material.dart';

/// This is for demonstration purposes to start.

void main() => runApp(const WeatherApp());

const backgroundImage = AssetImage("assets/mainPhotos/Night_Sky.jpg");

const sampleContentText = 'Hello World! This will be a weather app.';
const boldTextStyles = TextStyle(fontWeight: FontWeight.bold);

class WeatherApp extends StatelessWidget {
  const WeatherApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
            body: Stack(children: <Widget>[
      Container(
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: backgroundImage,
            fit: BoxFit.cover,
          ),
        ),
      ),
      Center(
        child: Container(
          width: 300,
          height: 50,
          padding: const EdgeInsets.all(16.0),
          decoration: const BoxDecoration(
            color: Colors.lightBlueAccent,
          ),
          child: const Center(
            child: Text(sampleContentText, style: boldTextStyles),
          ),
        ),
      ),
    ])));
  }
}

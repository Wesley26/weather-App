import 'package:flutter/material.dart';

import 'app_pages/homescreen.dart';

/// This is for demonstration purposes to start.

void main() => runApp(const WeatherApp());

class WeatherApp extends StatelessWidget {
  const WeatherApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: "Pocket Weather",
      home: HomeScreen(),
    );
  }
}

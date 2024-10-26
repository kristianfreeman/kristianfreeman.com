---
title: 'What you need to know to get started with Flutter, the cross-platform app framework'
description: ""
pubDate: 'Nov 24 2020'
tags:
  - archive
---


## **🎓 What is it?**

[Native applications for mobile, web and desktop, from a single codebase.](https://flutter.dev/)

<figure class="kg-card kg-image-card">![Flutter](https://f000.backblazeb2.com/file/bytesized-assets/images/flutter.gif)</figure>## **📌 Right now**

- Flutter is written in a language called [Dart](https://dart.dev/). It’s a bit like a strongly-typed JavaScript, and like Flutter, it’s managed by Google.
- A lot of the improvements made to Flutter happen via improvements to Dart, like the recent [null safety](https://medium.com/flutter/announcing-dart-null-safety-beta-4491da22077a) feature.
- While it’s posited as a UI framework, Flutter is similar in a lot of ways to React: mobile applications are based around user interfaces, and you can use Flutter to build [fully-featured applications](https://flutter.dev/showcase), with state management, authentication, and everything else you’d need for a production-grade application.
- Flutter is gaining support for other platforms, like the desktop ( [most recently, Linux](https://www.youtube.com/watch?v=Pzp9C0NNcZ8)), as well [as the web](https://medium.com/flutter/flutter-on-the-web-slivers-and-platform-specific-issues-user-survey-results-from-q3-2020-f8034236b2a8).
- The Flutter/Dart package manager, [pub.dev](https://pub.dev/), lists the most popular packages on a running basis. It has a great combination of well-designed UI components and low-level functionality (e.g. [Firestore integrations](https://pub.dev/packages/cloud_firestore_platform_interface), and [asynchronous request libraries](https://pub.dev/packages/http)) to help you ship apps quickly.

## **👶 Where to start**

- [AppBrewery’s Flutter bootcamp](https://www.appbrewery.co/p/flutter-development-bootcamp-with-dart) covers everything you need to write your first few Flutter apps.
- The Flutter team has provided a number of hands-on guides to get you up and running, called [CodeLabs](https://flutter.dev/docs/codelabs).
- Earlier this year, Bytesized held [Bytesized Flutter 2020](https://www.appbrewery.co/p/flutter-development-bootcamp-with-dart), the first free live-streamed Flutter conference.
- Flutter has a big following on YouTube because it’s really visual: like most UI frameworks, you can use it to quickly flesh out full application layouts. Andrea Bizzotto’s [Code With Andrea](https://www.youtube.com/channel/UCrTnsT4OYZ53l0QGKqLeD5Q) channel will teach you everything you need to know about Flutter, like state management, learning Dart, and more.

## **🤔 Why it matters**

- All cross-platform frameworks (e.g. React Native, Cordova, etc.) allow you to do more with less. Using a single codebase to build multiple applications allows you to ship your product to a larger audience without getting bogged down in specialization.
- Because of this, you’re less constrained by implementation details. You can quickly take projects from idea to app, and with the ubiquity of mobile devices, you can [reach unexpected audiences](https://7.dev/endangered-language-revitalization-with-flutter).
- Flutter compiles to native code. Unlike React Native, there’s no intermediary bridge translating your code to the device you’re running on. This means that Flutter apps [are faster](https://medium.com/swlh/flutter-vs-native-vs-react-native-examining-performance-31338f081980#:~:text=Java%20and%20Kotlin%20have%20similar,15%20times%20slower%20than%20native.) than React Native apps, but not as fast as 100% native apps.
- Flutter is in an interesting spot because there isn’t a definitive set of patterns that have been ordained as *the way to build Flutter apps*. For instance, state management remains an open question: developers have ported familiar tooling like [Redux](https://pub.dev/packages/redux) into Dart.
- Like with React, composing your Flutter components is also a wheel constantly being reinvented, though seemingly the most popular pattern right now for building them is with the [bloc](https://pub.dev/packages/bloc) package.

## **🙅‍♀️ Criticisms**

- [Flutter’s biggest problem](https://www.reddit.com/r/FlutterDev/comments/ju2zza/flutters_biggest_problem/), according to developers, is that development needs to slow down. The team has been adding more platforms and deploy targets at the expense of engine performance and the quality of first-party plugins.
- Flutter [doesn’t build native components](https://medium.com/asos-techblog/flutter-vs-react-native-for-ios-android-app-development-c41b4e038db9#:~:text=Flutter%20paints%20the%20UI%20on%20its%20own%20custom%20way,%20it%20doesn%E2%80%99t%20create%20native%20components.). It replicates them well (by providing Material UI components for Android, and the *Cupertino* library for iOS), but at the end of the day, it isn’t native, and savvy users might notice that your Flutter app feels a bit different than the other apps they use day-to-day.
- Cross-platform development as a whole remains experimental. As famously covered by Airbnb’s [“Sunsetting React Native”](https://medium.com/airbnb-engineering/sunsetting-react-native-1868ba28e30a) blog post, working with cross-platform frameworks is great *when they work*. When they don’t, it’s extremely painful, and in Airbnb’s case, it was enough for them to abandon the approach entirely.
- When you pick up a cross-platform framework, you’re heavily relying on the ecosystem and the maintainers of that framework to stay up-to-date with the underlying operating systems and platforms you’re building apps for. This means supporting new iOS and Android versions at least once a year, as well as constantly supporting new hardware and APIs. Andres Avendano cites this as a primary reason [not to build hybrid apps](https://bluefletch.com/avoid-hybrid-apps-in-2020/).

## **🙋 Who to know**

- [Andrea Bizzotto](https://twitter.com/biz84) teaches Flutter development on his YouTube channel [Code With Andrea](https://www.youtube.com/channel/UCrTnsT4OYZ53l0QGKqLeD5Q).
- The [Flutteristas](https://twitter.com/flutteristas?lang=en) are building a diverse community for Flutter developers.
- [Ryan Edge](https://twitter.com/chimon1984) is a Flutter Google Developer Expert and organizes meetups and conferences for Flutter developers.
- [CodeMagic](https://codemagic.io/) is a continuous integration platform for Flutter that compiled a list of [45 must-follow Flutter experts](https://blog.codemagic.io/top-flutter-developers-to-follow-on-twitter/).

## **🔗 Links**

- [Byteconf Flutter 2020](https://www.youtube.com/watch?v=dvUFVgymG8w) was a live-streamed Flutter conference organized by us in August 2020.
- The [/r/FlutterDev Discord server](https://discord.gg/uMya6wQ) is a community of 20k Flutter developers on Discord.
- [Flutter Community](https://medium.com/flutter-community) is the largest Flutter publication on Medium, with hundreds of articles from developers and community members.
- [Jobs In Flutter](https://www.jobsinflutter.io/) is a popular job board for Flutter developers.
- [Flutter Widget of the Week](https://www.youtube.com/playlist?list=PLjxrf2q8roU23XGwz3Km7sQZFTdB996iG) is a long-standing weekly YouTube series from the Flutter team covering the Flutter SDK and introducing various components with high-quality videos. Even if you aren’t going to pick up Flutter, it’s a fun watch!
---
title: "How to learn React Native"
description: ""
pubDate: "Mar 16 2021"
tags:
  - archive
  - bytesized
---

## 🎓 What is it?

[React Native](https://reactnative.dev/) is a tool for building desktop and mobile apps using React, the world’s most popular JavaScript framework. In a super competitive space versus tools like [Flutter](/004-flutter/), [Ionic](https://ionicframework.com/), and [Cordova](https://cordova.apache.org/), React Native differentiates itself by building on top of React’s incredible community and developer tooling.

## ⌛ The past

Developing non-web applications is tough. In particular, mobile apps have a steep learning curve and a lack of developer ergonomics. Here’s [Matthew Mombrea on why developing for mobile applications is tougher than you think](https://www.computerworld.com/article/2701225/mobile-development-is-tougher-than-people-think.html):

> The start of the difficulties is the inconsistent nature of mobile devices. I’m not talking about specs and screen sizes in this case, I’m talking about where you are and what you’re doing. The beauty of programming for these devices is that they provide all kinds of sensors and measurements, as well as a variety of network connectivity methods for use in your apps. Unfortunately you have no way of knowing what the state of these sensors or data connections will be when a user fires up your app so additional logic must be added to handle a large number of scenarios. Data connections are transient and prone to failure. If your app relies entirely on a network connection, you’ll have a lot of mitigation to deal with that you wouldn’t normally have with a web application or desktop app.
>
> And that’s just the tip of the iceberg. Apps can be shoved into the background at will. Limited storage space can dump your cache. Memory will fill up and leave no room for your software to run. Batteries dies, and so forth. Where desktops are sitting comfortably, plugged in to infinite power and a reliable internet connection, mobile phones are free wheeling through space, leaching sips of data and GPS when able while gradually marching toward battery death. It’s a hostile environment for software.

Developing for web is relatively simple — we have the DOM, an abstraction we use for reasoning about how to layout content on our websites. Besides that, we have HTML, CSS, and JavaScript, which has been rapidly transformed in the last decade.

On top of those developments, the actual high-level art of “building web applications” has been completely overhauled. React made declarative UI development the norm. Flexbox and CSS Grid have made virtually any layout possible. Frontend development continues to see rapid transformations, so much so that the day-to-day of writing frontend applications is barely recognizable from a decade ago.

As those changes have occurred, frontend developers have set their sights on other platforms. What lessons from the last ten years of web development can be brought to mobile app development, and to desktop development?

## 📌 Right now

React Native is an offshoot of React. It brings declarative UI development to desktop and mobile applications. It also brings JavaScript, which continues to grow and evolve, to new platforms, like your phone and your tablet.

React Native also brings declarative layout tools that should feel familiar to anyone who’s worked in web development. [Flexbox-like layouts are supported by default in React Native](https://reactnative.dev/docs/flexbox), as well as support for [external images](https://reactnative.dev/docs/images#network-images), like HTML’s `img` tags.

Currently, the React Native team is focused on performance and accessibility. The most recent version of React Native at time of writing, 0.64, [includes support for Facebook’s Hermes engine](https://reactnative.dev/blog/2021/03/12/version-0.64), which should improve performance on iOS. The React Native team also [announced that they’re adopting the GAAD pledge](https://reactnative.dev/blog/2021/03/08/GAAD-React-Native-Accessibility), to make React Native applications accessible and to make accessibility itself a core value of the framework.

Tools like [Expo](http://expo.io/) and [Ignite](https://github.com/infinitered/ignite) are offering comprehensive solutions to building React Native applications. Whether it’s boilerplate code for things like state management, notifications, or network requests, or full-on testing and deployment solutions, the developer experience ecosystem for React Native is thriving.

There’s also really interesting innovations happening in _where_ React Native is used. [React Native uses many high-level primitives for writing layout code](https://reactnative.dev/docs/intro-react-native-components) — for instance, instead of a `p` or `h1` tag in HTML, React Native uses the `<Text>` component, which accepts a number of props for things like colors, text size, and font weight.

These primitives make it possible to use React Native as a layout engine for _multiple platforms_, which is what makes it possible to write React Native applications both for mobile (iOS and Android), as well as Windows and Mac. In a full-circle move, one of the most popular React Native projects is [react-native-web](https://github.com/necolas/react-native-web), which substitutes React itself for React Native’s higher-level layout primitives.

We can’t talk about React Native without talking about [Flutter](https://flutter.dev/) — Google’s cross-platform mobile app framework. The competing frameworks have a number of shared pros and cons, but due to radically different approaches, they each stand on their own merits.

## 👶 Where to start

On Twitter, I asked my followers: [“How would you learn the framework if you had to start today?”](https://twitter.com/signalnerve/status/1369716732311535621) Here’s some of the answers:

_Greg Brimble, software developer and student: “First learn a chunk of regular React (arguably easier to setup and learn basics—esp. if you’re also new to JS), and then Expo. Could not recommend them highly enough! Such a slick experience and the path from React -&gt; React Native with them is so smooth.”_ [(tweet)](https://twitter.com/GregBrimble/status/1369932580343197701)

_Jamon Holgren, co-founder at Infinite Red: “I’d start with [reactnative.express](https://www.reactnative.express/), and also check out [Ignite](https://github.com/infinitered/ignite) (which supports Expo too!)”_ [(tweet)](https://twitter.com/jamonholmgren/status/1369760921044717571)

_Andrei Calazans, React Native developer at G2i: “I would start with [the Basic section of the docs](https://reactnative.dev/docs.). Then build an app that renders a list of items and opens a page, and shares something on social media. Test iOS and Android. If you can later read the remaining of the documentation, great content there.”_ [(tweet)](https://twitter.com/Andrei_Calazans/status/1369723025776664576)

_Adrian Carolli, React.js developer at G2i: “I would take[ Stephen Grider’s course on React Native](https://www.udemy.com/course/the-complete-react-native-and-redux-course/). He’s the best instructor for people who want to learn React Native. I have gotten so many people to take Stephen’s courses and they are now successful engineers.”_ [(tweet)](https://twitter.com/icookandcode/status/1369790496982372355)

If you’re looking for a complete app tutorial, Stream has an in-depth tutorial (with code and screenshots), showing you [how to build a complete chat application from scratch using React Native and Stream](https://getstream.io/chat/react-native-chat/tutorial/).

## 🙋‍♀️ Who to know

- [Adhithi Ravichandran](https://twitter.com/AdhithiRavi)
- [Mike Grabowski](https://twitter.com/grabbou)
- [Nader Dabit](https://twitter.com/dabit3)
- [Devin Abbott](https://twitter.com/dvnabbott)
- [Evan Bacon](https://twitter.com/Baconbrix)
- [Robin Heinze](https://twitter.com/robin_heinze)

## 🔗 Links

- [reactnative.express](https://www.reactnative.express/) is a complete guide to getting started with React Native, including writing React, React Native components, and working with native platform APIs on a variety of platforms.
- [Byteconf React Native 2018](https://www.youtube.com/playlist?list=PLH_Crma-Dc9OLKleEIrzuwOmxyGWuZbRW) was a virtual conference that I organized, bringing six great React Native speakers together. Check out [Adhithi Ravichandra’s excellent talk “10 Things I Learned Building React Native Apps”](https://www.youtube.com/watch?v=aUFXsHtjZUc&list=PLH_Crma-Dc9OLKleEIrzuwOmxyGWuZbRW), or [Jamon Holgren’s tutorial for using Ignite](https://www.youtube.com/watch?v=RY2TMZCO9Wo&list=PLH_Crma-Dc9OLKleEIrzuwOmxyGWuZbRW&index=2), the most popular React Native boilerplate.
- [The Complete React Native + Hooks Course](https://www.udemy.com/course/the-complete-react-native-and-redux-course) – Stephen Grider’s incredibly popular Udemy course on React Native.

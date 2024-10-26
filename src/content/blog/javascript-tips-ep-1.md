---
title: 'Three quick JavaScript tips you can start using today'
description: ""
pubDate: 'Mar 12 2021'
tags:
  - archive
---


## Use const whenever possible

`const` sets constant variables in JavaScript. This is useful when you don’t want variables to be able to change!

Below, we use `var` to set up a `name` variable. We can change that variable at any time after initialization and assignment:

```jsx
var name = "Kristian"
name = "Someone"
console.log(name) // "Someone"
```

Using `const`, we can set up a variable, and when we try to change it, we’ll get an error back:

```js
const name = "Kristian"
name = "Someone" // Uncaught TypeError: Assignment to constant variable.
```

## Use array concat to add items to an array, immutably

You can combine two or more arrays using the concat method:

```js
const arrayOne = [1]
const arrayTwo = [2, 3]
const newArray = arrayOne.concat(arrayTwo)
console.log(newArray) // [1, 2, 3]
```

`concat` is immutable — if you call `arrayOne.concat`, it doesn’t update arrayOne — it returns a new array that you can capture with a different variable:

```js
const arrayOne = [1]
arrayOne.concat([2, 3]) // [1, 2, 3]
console.log(arrayOne)   // [1]
```

The `concat` method takes an arbitrary number of arguments, so you can pass as many arrays as you’d like:

```jsx
const arrayOne = [1]
const newArray = arrayOne.concat([2, 3], [4, 5], [6, 7])
console.log(newArray) // [1, 2, 3, 4, 5, 6, 7]
```

## JSON.parse can be faster than a JS object

For large objects, it can be faster to deserialize them from a JSON string using `JSON.parse` than to have them live as raw objects:

```js
const data = { foo: 42, bar: 1337 }; // 🐌
const data = JSON.parse('{"foo":42,"bar":1337}'); // 🚀
```

This was documented by Addy Osmani’s blog post ["The cost of JavaScript in 2019"](https://v8.dev/blog/cost-of-javascript-2019#json), where performance benchmarks found that V8 and other JavaScript engines can decode an object into an object using `JSON.parse` almost 50% faster:

> Because the JSON grammar is much simpler than JavaScript’s grammar, JSON can be parsed more efficiently than JavaScript. This knowledge can be applied to improve start-up performance for web apps that ship large JSON-like configuration object literals (such as inline Redux stores). Instead of inlining the data as a JavaScript object literal.
> 
> As long as the JSON string is only evaluated once, the `JSON.parse` approach is much faster compared to the JavaScript object literal, especially for cold loads. A good rule of thumb is to apply this technique for objects of 10 kB or larger — but as always with performance advice, measure the actual impact before making any changes.
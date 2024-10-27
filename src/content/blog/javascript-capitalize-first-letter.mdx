---
title: 'How to capitalize the first letter of a string in JavaScript'
description: ""
pubDate: 'Sep 16 2020'
tags:
  - archive
---


You can capitalize the first letter of a string in JavaScript by using some simple string and array functions. Here’s the complete code sample, followed by an explanation of how it works:

```javascript
const greeting = "hello"
const capitalize = string => [
  ...string.slice(0, 1).toUpperCase(),
  ...string.slice(1)
].join("")

// Here's the same function, rewritten in long-form JavaScript
const capitalize = function(string) {
  return [
    ...string.slice(0, 1).toUpperCase(),
    ...string.slice(1)
  ].join("")
}

capitalize(greeting) // "Hello"
```

## How it works — slices and spreads

This works by using `slice` to split the string by characters into two sections: the first character—using `.slice(0, 1)`—and the remainder of the string, with `.slice(1)`. Without a second argument provided to `slice`, it will grab the rest of the string.

Strings can be coerced into arrays in JavaScript using the ES6 spread operator. By spreading the string into two sections, and calling `.toUpperCase()` on the first character, we can effectively capitalize the first letter of the string, and then join it back together inside of an array of characters. For instance:

```javascript
const greeting = "hello"
const capitalizeWithoutJoin = string => [  
  ...string.slice(0, 1).toUpperCase(),
  ...string.slice(1)
]

capitalizeWithoutJoin(greeting) // ["H", "e", "l", "l", "o"]
```

The spread operator takes both strings, and combines the array of characters from each into a single array, which is returned by the function. The original `capitalize` function takes that array of characters, and joins them back into a string.

## Capitalize multiple words in a sentence

The advantage of capitalizing the first letter of a string in this way is that you can re-use it for multiple words. For instance, if you want to capitalize the first letter of every word in a larger string, you can `map` through the words and call `capitalize` on each:

```javascript
// const capitalize = string ...
const long_string = "hello world how is it going"
const capitalized = long_string.split(" ").map(string => capitalize(string)).join(" ")  

capitalized // "Hello World How Is It Going"
```
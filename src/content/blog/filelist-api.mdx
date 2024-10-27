---
title: 'Understanding the FileList API'
description: ""
pubDate: 'Feb 03 2021'
tags:
  - archive
---


The [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList) API is used when working with HTML inputs of type `file`.

Let’s start with a basic HTML input, with an id set to `file` and type set to `file`:

```html
<input id="file" type="file" />
```

Traditionally, you would target the input (using jQuery or vanilla JavaScript’s `querySelector` functions), and use the `value` method to check for the value of the input. When doing this for a `file` input, the `value` method returns a file path:

```html
<input id="file" type="file" /><script>  const fileInput = document.getElementById("file")  console.log(fileInput.value) // "C:\fakepath\waiting-room.svg"</script>
```

This doesn’t give us any information about the file itself, and if we wanted to use the filename in our UI, we’d need to search and replace for the “fakepath” value at the beginning of the string and remove it every time.

Instead, we can use the `FileList` API to access information about our files.

The `files` method on an input of type `file` returns a `FileList` object, which contains a list of `files`:

```html
<input id="file" type="file" /><script>  const fileInput = document.getElementById("file")  console.log(fileInput.files) // [object FileList]</script>
```

## Finding the length of a FileList

Even if you have a single file attached to your input of type `file`, `FileList` still works as an object containing a *list* of files… it just has a length of one.

To find the length, or size of a `FileList` list of files, use `length` :

```html
<input id="file" type="file" /><script>  const fileInput = document.getElementById("file")  console.log(fileInput.length) // 1</script>
```

## Iterating through files in a FileList

To look at every file in a `FileList`, you can use the `item` method, which looks up a file at a specific `index`:

```html
<input id="file" type="file" /><script>  const fileInput = document.getElementById("file")  console.log(fileInput.files.item(0)) // [object File]</script>
```

You can also use an *iterator*, which makes it easier to do *something* for every file in a `FileList`:

```html
<input id="file" type="file" /><script>  const fileInput = document.getElementById("file")    for (let file of fileInput.files) {    console.log(file.name) // "logo.svg"    console.log(file.size) // 680  }</script>
```

Each instance of a file in a `FileList` uses the [File](https://developer.mozilla.org/en-US/docs/Web/API/File) API, so you have access to properties about the files like `name`, `size`, and `type`, as well as access to the contents of the file itself using methods like `text`, `arrayBuffer`, and `stream`.

## Example Codepen

I’ve included an interactive playground for messing with HTML `file` input and the `FileList` API as a Codepen embed below. Feel free to fork it and use it for your own purposes if needed!

<iframe allowfullscreen="true" allowtransparency="true" frameborder="no" height="265" loading="lazy" scrolling="no" src="https://codepen.io/imkmf/embed/wvoKexJ?height=265&theme-id=light&default-tab=js,result" style="width: 100%;" title="FileList API"> See the Pen [FileList API](https://codepen.io/imkmf/pen/wvoKexJ) by Kristian Freeman ([@imkmf](https://codepen.io/imkmf)) on [CodePen](https://codepen.io).</iframe>

Here’s a [direct link to the Codepen](https://codepen.io/imkmf/pen/wvoKexJ) if the embed doesn’t work.
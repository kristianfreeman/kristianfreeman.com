---
title: 'A brief guide to understanding Svelte.js'
description: ""
pubDate: 'Nov 10 2020'
tags:
  - archive
  - bytesized
---


## **🎓 What is it?**

[Cybernetically enhanced web apps](https://svelte.dev/).

Svelte is a JavaScript framework for building declarative user interfaces.

![Svelte demo](https://f000.backblazeb2.com/file/bytesized-assets/images/002-svelte-demo.png)

## **⌛ The past**

The frontend development world is dominated right now by frameworks. React is the most popular, but a number of “single-page” frameworks exist—where the tool is responsible for reading and writing to the DOM in order to compose a user interface.

The downside to this is that learning how to “make an app” is complicated right now. React and tools like it aren’t just about learning JavaScript—you have to start to intuit about functional programming concepts, how to integrate CSS into a JavaScript project, and more.

Frontend applications are really complex. To meet this complexity and try to mitigate it, JavaScript frameworks have begun to heavily rely on a classic programming tool: compilers.

[Compilers are the new frameworks](https://tomdale.net/2017/09/compilers-are-the-new-frameworks/). [Tom Dale](https://twitter.com/tomdale) posits that the compilers are where we should focus our efforts to see compounding returns in frontend performance:

> *My current “investment thesis” is that what we call web frameworks are transforming from runtime libraries into optimizing compilers. When it comes to eking performance out of hand-authored JavaScript and accompanying runtime libraries, we’ve reached the point of diminishing returns.*

## **📌 Right now**

Svelte is a build-time framework. You’re still writing components like in React or Vue, but instead of compiling them in browser, Svelte compiles them for you into a single bundle.js file at compilation time.

Because Svelte compiles your application, it can optimize for building imperative code that can reach in and update individual pieces of your application without needing to do complicated virtual DOM operations.

Compilers are in right now—TypeScript developers work with another powerful compiler every single day. But Svelte takes it a step further, by not just compiling JavaScript: it also compiles HTML and CSS, too.

The `.svelte` file used by Svelte applications allows you to mix modern JavaScript, scoped CSS, and HTML into a single template.

![Svelte GIF](https://f000.backblazeb2.com/file/bytesized-assets/images/002-svelte-optim.gif)

[Ryan Atkinson](https://twitter.com/ryanatkn) summarizes this approach and how Svelte feels different in [“Why Svelte”](https://github.com/feltcoop/why-svelte):

> *Svelte components are a thin layer over the DOM and naturally expose the web platform. Coding in Svelte feels like I’m moving with the grain of the web. React abstracts the DOM with functionally pure declarative rendering and provides escape hatches back to mutable imperative DOM land.*

That being said, compilers aren’t necessarily a magic bullet. Compilers are themselves a complex software project, and even if it simplifies your frontend application, there’s still complexity *somewhere*. From the same article as above:

> *Compilers may appear to magically eliminate complexity, but that’s an illusion — they shift it. The compiler architecture moves complexity from the runtime and source code to build time and tools. Behind Svelte’s simple APIs sits a beefy compiler.*

## **📈 What’s next?**

Earlier this year, Svelte landed [first-class TypeScript support](https://svelte.dev/blog/svelte-and-typescript). It was contributed via a TypeScript maintainer and a number of Svelte community members.

![Svelte + TypeScript](https://svelte.dev/media/svelte-ts.png)

Svelte continues to grow in mindshare and popularity. [In 2019’s “State of JS” survey](https://2019.stateofjs.com/front-end-frameworks/svelte/), almost 75% of surveyed developers had heard of Svelte, 45% had heard of Svelte and wanted to use it, and 7% had used it.

## **🤔 Why it matters**

Conceptually, Svelte is [rethinking reactivity](https://www.youtube.com/watch?v=AdNJ3fydeao). It does this by building a superset of JavaScript that Svelte’s compiler can understand, and baking reactivity into the language itself, instead of adding additional abstractions like lifecycle hooks.

I’m excited and interested in Svelte because I think that it presents a really different philosophy to building frontend applications. It’s good for the framework space to have diversity, and Svelte’s approach to build-time components may end up being a great bet on developer experience that will help it grow into the framework of choice for frontend developers.

## **🙋‍♀️ Who to know**

- [@rich\_harris](https://twitter.com/Rich_Harris)
- [@lihautan](https://twitter.com/lihautan)
- [@evilpingwin](https://twitter.com/evilpingwin)
- [@antony](https://twitter.com/antony)
- [@wattenberger](https://twitter.com/Wattenberger)
- [@karinesabatier](https://twitter.com/karinesabatier)
- [@swyx](https://twitter.com/swyx)

## **🔗 Links**

- [Mozilla’s collection of Svelte tutorials](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks#Svelte_tutorials)
- [My Twitter thread where I asked for Svelte resources, guides, and who to know](https://twitter.com/signalnerve/status/1313171538900930560)
- [Egghead.io’s free Svelte 3 course](https://egghead.io/playlists/getting-started-with-svelte-3-05a8541a)
- [Rich Harris, Rethinking Reactivity](https://www.youtube.com/watch?v=AdNJ3fydeao&feature=youtu.be)

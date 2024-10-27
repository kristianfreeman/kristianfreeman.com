---
title: "Get started with Tailwind CSS, the utility-first CSS framework"
description: ""
pubDate: "Feb 02 2021"
tags:
  - archive
---

[Tailwind](https://tailwindcss.com/) is a utility-first CSS framework. Unlike comprehensive frameworks like [Bootstrap](https://getbootstrap.com/) or [Foundation](https://get.foundation/), which provide solutions for things like _cards_, _forms_, and _buttons_, Tailwind allows you to _compose_ your UI out of smaller classes: for instance, the `p-4` class applies a padding of `1rem`, and the `flex` class sets up a basic flexbox layout by setting `display: flex`.

Tailwind offers a _very_ different approach to writing CSS. That approach is controversial (more on that later), but for the most part, many developers find moving to a utility-first CSS framework makes it easier to _own_ your CSS, instead of working under the constraints of CSS that’s given to you.

Let’s look at Tailwind from a few angles – first, a few video introductions to Tailwind, templates and starter kits, tools and cheat sheets, and some deep dives into the _how_ and the _why_ of Tailwind.

## Video introductions to Tailwind

### [Get started with Tailwind CSS in 15 Minutes](https://www.youtube.com/watch?v=6zIuAyLZPH0&feature=emb_title)

Chris on Code’s 15 minute intro to Tailwind covers why it matters, how it works, and how to build your first few components with it. Check out Chris’ [Beginner Tailwind course](https://beginnertailwind.com/) if you dig his teaching style and want to go more in depth with Tailwind, too!

<figure class="kg-card kg-embed-card"><iframe allowfullscreen="allowfullscreen" frameborder="0" height="113" loading="lazy" src="https://www.youtube.com/embed/6zIuAyLZPH0?feature=oembed" width="200"></iframe></figure>

### [Building interfaces with Tailwind CSS](https://www.youtube.com/watch?v=_JhTaENzfZQ)

[Adam Wathan](https://twitter.com/adamwathan), creator of Tailwind CSS, shows off the framework by recreating Netlify using 100% Tailwind classes. It’s a really great lesson in breaking down existing designs and building them back up with simple CSS primitives, and the entire series (linked as part of the video) covers rebuilds of drastically different layouts and page styles using just Tailwind. Must-watch!

<figure class="kg-card kg-embed-card"><iframe allowfullscreen="allowfullscreen" frameborder="0" height="113" loading="lazy" src="https://www.youtube.com/embed/_JhTaENzfZQ?feature=oembed" width="200"></iframe></figure>

## Templates and starter kits

### [Tailwind UI](https://tailwindui.com)

Tailwind UI is a commercial product built by the Tailwind Labs team (comprised of the Tailwind creators and engineering team), showcasing beautiful component and page layouts directly using Tailwind. An interesting development of Tailwind UI is how often it seems to contribute new features or directions back to Tailwind, the open-source framework: if you want to support the development of Tailwind UI, buying the UI library is a great place to start.

Looking for an intro to Tailwind UI itself? [This video](https://www.youtube.com/watch?v=quhvuOTlrwA) on our YouTube channel covers Tailwind UI and how to get started with it, by adding it to an existing web app.

<figure class="kg-card kg-bookmark-card"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Tailwind UI</div><div class="kg-bookmark-description">Beautiful UI components by the creators of Tailwind CSS.</div><div class="kg-bookmark-metadata">![](https://tailwindui.com/favicon-32x32.png)<span class="kg-bookmark-author">Official Tailwind CSS Components</span></div></div><div class="kg-bookmark-thumbnail">![](https://tailwindui.com/img/twitter-card.png)</div></figure>### [Tailwind Components](https://tailwindcomponents.com)

Tailwind Components is a free, open-source collection of community contributed components for Tailwind. If you have designs or layout ideas that aren’t covered in Tailwind UI, or you can’t afford Tailwind UI, this could be a great solution for filling in the gaps.

### [Tailwind Toolbox](https://www.tailwindtoolbox.com)

Tailwind Toolbox provides a different approach to Tailwind starter kits by giving you full-on templates to get started with the framework. Things like landing pages, admin dashboards, and smaller components like modals, accordions, and responsive tables are all covered, and available for free.

## Tools and cheat sheets

### [Tailwind Play](https://play.tailwindcss.com/)

Tailwind Play is Tailwind’s official online playground for the framework. Experiment with layouts and configurations and try out new designs in real-time, using the most up-to-date version of the framework.

### [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

Jay Elaraj’s cheat sheet is a great interactive site for looking at all of the classes and properties exposed by Tailwind, allowing you to search and dive directly into the corresponding docs for anything in the framework.

### [awesome-tailwindcss](https://github.com/aniftyco/awesome-tailwindcss)

This GitHub repo is a collection of tutorials, starter kits, open-source projects, and basically _anything_ built with or about Tailwind CSS. It’s open-source, and you can contribute to it yourself, so if you find a missing resource, make sure to add it!

## How and why it works

### [CSS Utility Classes and “Separation of Concerns”](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)

Adam Wathan’s original post on Tailwind CSS, where he first announced the framework, also serves as a great introduction to the _why_ of CSS utility frameworks. In the post, he argues that CSS utility class frameworks offer better consistency, less premature abstractions, and more consistent designs:

> My experience is that building things utility-first leads to _more_ consistent looking designs than working component-first, as unintuitive as it might sound at first.

### [Why Tailwind CSS](https://www.swyx.io/why-tailwind/)

Shawn Wang writes on why he changed his mind about Tailwind CSS:

> I’m not a Tailwind shill. I’m a [Guo Lai Ren](https://www.swyx.io/guo-lai-ren/) – someone who has changed their mind on it recently and am a happy user despite acknowledged tradeoffs. “Crossover people” can often be more persuasive to skeptics than born-and-bred believers. So I hope to contribute my perspective to the discussion, if you are open to it.

### [Why Tailwind Isn’t for Me](https://dev.to/jaredcwhite/why-tailwind-isn-t-for-me-5c90)

For a contrary point of view, check out Jared White’s blog post about his experience with Tailwind, and why he thinks it’s the wrong direction for CSS on the web:

> I’ve gotten into more than one heated argument on the interwebs lately over Tailwind CSS. I’m not proud of this. I don’t like being at odds with anybody. I think the folks building Tailwind are talented and nice people. But at a pure technical level, I simply don’t like Tailwind. Whoever it was built for, **it was not built for me**.

---
title: 'What is Jamstack? Exploring what you need to know, and how to get started'
description: ""
pubDate: 'Dec 08 2020'
tags:
  - archive
---


## **🎓 What is it?**

****JavaScript, APIs, Markup.****

A new (but also old) way of building apps on the web.

Per Colby Fayock, who wrote the [Jamstack Handbook](https://jamstackhandbook.com/) earlier this year:

> *The Jamstack is a modern architecture that revolves around the age-old idea of providing end users a website or application from static storage, while supplementing it with modern technologies like APIs and front end tooling to bring a more dynamic user experience.*

<figure class="kg-card kg-image-card">![The infinite jam of space and time](https://f000.backblazeb2.com/file/bytesized-assets/images/jam.gif)</figure>## **⌛ The past**

The 2010s was the era of single page applications.

In 2012, I was writing [Ruby on Rails](https://rubyonrails.org/) applications — every HTML page was compiled and dynamically rebuilt on a Ruby server, and interactive interfaces were built on the client-side using [jQuery](https://jquery.com/), or if I was feeling particularly ambitious, [Ember.js](https://emberjs.com/).

Then [React](https://emberjs.com/) hit.

Single-page applications (SPAs) showed that imperative programming techniques could build powerful user interfaces, and suddenly building frontend applications meant that you were a JavaScript developer.

Interactive user interfaces were great, but offloading everything onto the browser had downsides. Via [TakeShape](https://www.takeshape.io/articles/a-history-and-overview-of-the-jamstack/):

> *The rise of single-page applications (SPAs) has given many websites the feel of a native app, allowing for a faster transition across the site, and has been adopted by JavaScript frameworks and libraries like React, AngularJS, and Vue.js. But there are a couple key disadvantages to SPAs, particularly search engine optimization and load time. SPAs are built on JavaScript, and data and content is downloaded upon request. This makes search engine optimization difficult, as individual “pages” don’t have their own URLs, and can’t be scanned by search bots.*

At the same time as SPAs grew in popularity, another category of tools was having a big impact on how people were building websites on the web: static site generators.

In 2008, Tom Preston-Werner at GitHub built [Jekyll](https://jekyllrb.com/), a tool for combining static templates, HTML and CSS, and combining it with Markdown content to make simple blogs and websites.

The innovation here was simple: many sites didn’t need a server. The content on a simple blog, for instance, should just be generated once, when a new post is added or something changes, and then after that, you can just load it from somewhere like [GitHub Pages](https://pages.github.com/), [AWS S3](https://aws.amazon.com/s3/), or even a [CDN](https://www.glennprince.com/article/moving-my-site-onto-a-cdn/).

Jekyll was the first of *many* static site generators — instead of just pulling from Markdown content local to your machine, subsequent frameworks like [Gatsby.js](https://www.gatsbyjs.com/) went even further: what if you could pull data from *anywhere* and use it to build a static site?

Instead of exposing a [WordPress](https://wordpress.org/) instance, the associated PHP runtime, and the Apache server to sit in front of it and handle requests, what if you just grabbed all the data using an API request, and built a static version of the site to expose to your users?

## **🤔 Why it matters**

Jamstack applications lean on build tooling like [static site generators](https://jamstack.org/generators/) and content APIs to enable developers to offload their workload in two ways:

1. Let focused services do the hard stuff ([Stripe](https://stripe.com/), [Sanity.io](https://sanity.io/))
2. Move the bulk of your application’s data management to *build-time*

Here’s Colby on why Jamstack matters:

> *The fundamental qualities that Jamstack apps are trying to solve help everyone from the business owner to the customer.*
> 
> *For the business, you’re going to get a reliable app that’s cost effective that will make customers happy.*
> 
> *For a developer, you’re getting modern tooling that lets you keep working with the fun, more interesting parts, but it also inherently covers technical concerns like some security issues, performance, and maintenance, as a lot of the times, there is no maintenance with things like static storage.*
> 
> *For customers, you’re getting a fast app with a great experience that will help you solve your problems faster whether you’re making a purchase or just trying to read someone’s blog.*

## **👶 Where to start**

Khaled Garbaya on where to start:

> *Start simple and use a technology you’re most familiar with. Don’t build everything yourself — we’re not experts in everything, that’s why there’s API services.*

There’s a lot of tools to choose from in the Jamstack world: there’s basically a static site generator in *every* programming language, a number of ways to manage your content, and API services springing up every day to help you with *auth*, *developer experience*, *collaboration*, and more.

Here’s a list of a few things to check out, recommended by Colby and Khaled:

- [A curated list of courses, articles, and tips about #Jamstack](https://learnjamstack.com/)
- [WTF is Jamstack from @khaled\_garbaya on @eggheadio](https://egghead.io/lessons/gatsby-wtf-is-jamstack)
- [Jamstack Handbook](https://jamstackhandbook.com/)
- [What is the Jamstack and how do I get started? – Colby Fayock](https://www.colbyfayock.com/2020/02/what-is-the-jamstack-and-how-do-i-get-started)

## **📌 Players**

Interestingly, there’s a strong correlation between players in the Serverless and Jamstack worlds. They’re ideologically similar — reducing friction in applications, and so a lot of the same companies and services play in both spaces. [CSS Tricks’ “The Power of Serverless” micro-site](https://serverless.css-tricks.com/) secretly acts as a great resource for Jamstack players as well, with sections like:

- [Content Management Systems](https://serverless.css-tricks.com/services/cmss)
- [Forms Services](https://serverless.css-tricks.com/services/forms)
- [Static Site Generators](https://serverless.css-tricks.com/services/ssgs)

Many existing players in the CMS space are adapting to Jamstack, like WordPress and [Ghost](https://ghost.org/). Newcomers like [Sanity.io](http://sanity.io/) and [Contentful](https://www.contentful.com/) are building with a Jamstack-first approach, using modern API tooling and providing integrations with tools like Gatsby.js and [Nuxt.js](https://nuxtjs.org/).

From Colby:

> *Next.js isn’t a company, but as a tool, it’s doing a pretty great job at defining what web apps should look like from a developer point of view. [Vercel](https://vercel.com/) is the team that leads development efforts and has done a great job at pushing boundaries and listening to what developers want.*
> 
> *[Netlify](https://netlify.com/), who actually coined Jamstack as well as maintain sites like [jamstack.org](https://jamstack.org/), were one of the first companies to feature the insanely simple setup of going from GitHub repo to statically deployed app with all of the automation along side of it. They’re more fundamentally sold on statically hosted apps, but provide additional features like lambdas and now edge functions.*

## **🙅‍ Criticisms**

[Over at CSS Tricks, Brian Rinaldi debunks 5 Myths About Jamstack:](https://css-tricks.com/5-myths-about-jamstack/)

1. They’re rebranded static sites
2. Jamstack sites are fragile
3. Editing content is difficult
4. SEO is hard on Jamstack
5. Jamstack requires heavy JavaScript frameworks

[Jay Freestone offers some legitimate criticisms of Jamstack on London-based consultancy Browser’s blog](https://www.browserlondon.com/blog/2020/04/20/issues-with-jamstack-you-might-need-backend/) — from the perspectives of performance, developer experience, and dynamism:

> *There’s still a place for static sites on the web, but it’s shrinking, not growing, and likely still the domain of developer portfolios and side-projects. Sure, it’s possible to engineer a workflow in 2020 that manages to smoosh together a set of disparate 3rd parties, a version-control-system backed CMS and a bunch of template files into a working (and fast!) site, but the value is questionable. Instead of reducing complexity, the JAMStack just shifts it around.*
> 
> *It’s fitting that we have taken the simplest form of a website — static HTML — and transformed it into a complex landscape of build processes, tooling and services that more than rivals the complexity it set out to supplant.*

Here’s Colby again on incorporating Jamstack into larger stacks:

> *I haven’t experienced anything that I’d fundamentally criticize Jamstack as severely flawed, but how it’s incorporated into a full development stack can be tricky depending on the flexibility and skillsets you have for putting together a backend or what services you use to accomplish that.*

## **🙋 Who to know**

- [@biilmann](https://twitter.com/biilmann), CEO of Netlify (and originator of the Jamstack acronym)
- [@shortdiv](https://twitter.com/shortdiv), developer advocate at Netlify
- [@colbyfayock](https://twitter.com/colbyfayock), developer advocate at Applitools and author of Jamstack Handbook
- [@khaled\_garbaya](https://twitter.com/khaled_garbaya), organizer at [Jamstack Berlin](https://twitter.com/jamstackberlin)
- [@dabit3](https://twitter.com/dabit3), developer advocate at AWS
- [@kylemathews](https://twitter.com/kylemathews), founder at Gatsby
- [@kmelve](https://twitter.com/kmelve), developer relations at [Sanity.io](http://sanity.io/)
- [@debs\_obrien](https://twitter.com/debs_obrien), head of learning at Nuxt.js

## **🔗 Links**

- [A curated list of courses, articles, and tips about #Jamstack](https://learnjamstack.com/)
- [WTF is Jamstack?](https://jamstack.wtf/)
- [Jamstack Handbook](https://jamstackhandbook.com/)
- [What is the Jamstack and how do I get started? – Colby Fayock](https://www.colbyfayock.com/2020/02/what-is-the-jamstack-and-how-do-i-get-started)
- [The State of Jamstack 2020 Report](https://assets-us-01.kc-usercontent.com/4e9bdd7a-2db8-4c33-a13a-0c368ec2f108/b0df6a88-8849-4ce1-bb8d-2efd5ade3fa5/The-State-of-Jamstack-Report-2020.pdf)
- [Jamstack Conf 2020](https://jamstackconf.com/)
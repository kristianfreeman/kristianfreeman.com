---
title: 'Get started with exception monitoring'
description: ""
pubDate: 'Mar 09 2021'
tags:
  - archive
---


<div class="sponsored"><span style="color: var(--contrast); font-family: inherit; font-size: 35px; font-style: inherit; background-color: var(--base-3);">🎓 What is it?</span>

</div>Exception monitoring provides insight into why your application is failing. Unlike normal metrics, *exception monitoring* worries about error states—often including support for line-by-line code errors, user information and context, and integrations with the tools you’re already using.

Here’s Stackify on [why exception monitoring is important](https://stackify.com/exception-tracking-important/):

> Exception monitoring offers another better way of gaining early insight into production problems. By monitoring exceptions, you can trace a performance issue to its root case, thereby gaining the time and means to spot the problem before it reaches a tipping point and impacts your users or company.

<figure class="kg-card kg-image-card kg-width-full">![](https://7.dev/content/images/2021/03/giphy.gif-cid-ecf05e47odnafqyjpm1az6wk8d240zeo2xjqseqqyym1ma76-rid-giphy.gif)</figure>## ⌛ The past

Most small applications track *happy path* traffic. A request comes in, a long-running task executes, and if you’re interested in monitoring how your application is doing, you might check your logs occasionally, or even send them to a logging service.

As applications become business critical, happy path traffic becomes less crucial. Instead, *why and where things go wrong* is what becomes important to track. Logging can help with this, but it often doesn’t provide much context about what is going wrong—just that something *has* gone wrong.

Consider the following error message in your logs:

```jsx
::ffff:127.0.0.1 - - [07/Mar/2021:15:11:44 +0000] "POST / HTTP/1.1" 500 1308 "-" "curl/7.68.0"
TypeError: Cannot read property 'toString' of undefined    at /home/kristian/src/express-test/index.js:16:24    at Layer.handle [as handle_request] (/home/kristian/src/express-test/node_modules/express/lib/router/layer.js:95:5)    at next (/home/kristian/src/express-test/node_modules/express/lib/router/route.js:137:13)
```

In a single instance, this log isn’t immediately helpful—you can see what method specifically errored (`toString`), but you can’t look at the code itself, and you don’t know, for instance, that this error is occurring because of data coming from a user.

**Exception monitoring fills in the gaps in this error log.** It helps you see *data*, *user context*, and *performance characteristics* about the error you’re seeing.

<figure class="kg-card kg-image-card kg-card-hascaption">![](https://7.dev/content/images/2021/03/hb-bread.PNG)<figcaption>Error context in Honeybadger’s “Breadcrumbs” view</figcaption></figure>## 📌 Right now

Exception monitoring tools often are integrated via an SDK into your applications. Instead of just letting your app fail and output into your logs, tools like Honeybadger, Sentry, and Rollbar give line-by-line details about how your code went wrong, and in some cases, even the full context (Honeybadger calls this *breadcrumbs*) of how your code came to fail.

It’s easy to forget that humans are… fallible. When it comes to the art of reading request and error logs, we’re not usually able to recognize patterns, especially as systems grow more complex.

Exception monitoring tools track and collate your application’s errors. If you’re building something that has a ton of traffic (thus a ton of exceptions), knowing “What is the most common error in my application right now” is a really powerful way to prioritize fixes and tech debt.

Robust exception monitoring is often the sign of a functioning engineering organization. Errors in code are basically *always* going to happen—unless you believe the marketing and hype around tools like TypeScript or Rust—and it’s how you or your engineering team responds to those errors that matters.

GitHub’s 2016 blog post [“Exception Monitoring and Response”](https://github.blog/2015-06-16-exception-monitoring-and-response/) is a great look at how an organization deals with exception monitoring at scale. Using a homegrown tool, GitHub categories exceptions by “Areas of Responsibilities”, or AORs.

> Areas of Responsibility help us in a couple of ways. They define instantly recognizable high-level areas of the site, and within each of those, a set of teams generally responsible for their well being and upkeep. Beyond that, we track exception rates for AORs in Graphite, so we can see any degradation over time.

<figure class="kg-card kg-image-card kg-card-hascaption">![](https://7.dev/content/images/2021/03/github-exceptions.png)<figcaption>GitHub’s exceptions on their application, categorized by areas of responsibilities</figcaption></figure>## 👶 Where to start

Even if you don’t have a high-traffic production application, learning how to integrate an exception monitoring tool is a great exercise. For newer developers, it also reflects well on your resume or skillset to care about exception monitoring, as practically you’ll *always* work with applications that are generating exceptions.

Honeybadger, Sentry, and Rollbar are all popular exception monitoring tools, with free trials so you can begin experimenting with them. They also all have integration guides for a variety of languages, so whether you’re writing a React.js site or a Go backend API, you can integrate them into your codebase.

A great rule of thumb is to implement these best practices from Airbrake, covered in their [“Error Monitoring vs. Logging” blog post](https://airbrake.io/blog/debugging/error-monitoring-vs-logging):

> **Configuration**: Set up your system to send log data directly to your monitoring tools. This way we can get a real-time picture of what is occurring at any given point in time. Once configured, your monitoring tools will alert you to various issues before you spot them in the log.

> **Triage**: Log only data that is necessary for troubleshooting and/or compliance. Set up a series of rules for your log files to store important pieces of data and to discard the rest.

> **Structure**: Structured data such as user id, error type, operating system, and more will make it a lot easier for your monitoring tools to be able to track common problems.

I’m working on a more practical example video on my YouTube channel to show you the *how* and *why* of error monitoring and how this category of tools can help you out, so keep an eye out for that 👀

## 🙋‍♀️ Who to know

**Companies**

- [Airbrake](https://airbrake.io/)
- [Honeybadger](https://www.honeybadger.io/)
- [New Relic](https://newrelic.com/)
- [Raygun](https://raygun.com/)
- [Rollbar](https://rollbar.com/)
- [Sentry](https://sentry.io/welcome/)

**Developers**

- [Bridget Kromhout](https://twitter.com/bridgetkromhout)
- [Charity Majors](https://twitter.com/mipsytipsy)
- [Jaana Dogan](https://twitter.com/rakyll)
- [Jessica DeVita](https://twitter.com/UberGeekGirl)

## 🔗 Links

- [Browser Integration Guide (documentation)](https://docs.honeybadger.io/lib/javascript/integration/browser.html) — if you’re looking for a quick guide to using an exception monitoring tool, Honeybadger’s documentation for installing their universal JavaScript library and using it to identify users and begin reporting errors to their service can be done in just a few minutes.
- [Error Logging and Tooling for Disney+ (blog post)](https://medium.com/disney-streaming/using-sentry-on-disney-cae51b1e59e4) — Andrew Hay covers how Disney’s streaming service Disney+ uses Sentry to manage exceptions and error logging across a diverse set of platforms and programming languages
- [“Exception Monitoring and Response” (blog post)](https://github.blog/2015-06-16-exception-monitoring-and-response/) — the aforementioned guide to GitHub’s exception monitoring process dives deep into both the technical and organizational aspects of how the source code hosting tool handles exception monitoring.
- “[Monitoring and Observability” (blog post)](https://copyconstruct.medium.com/monitoring-and-observability-8417d1952e1c) — Cindy Sridharan covers the difference between monitoring and observability, and how the discipline has changed since cloud computing has become ubiquitous.
- [“Observability: A complete overview for 2021” (blog post)](https://github.blog/2015-06-16-exception-monitoring-and-response/) — Lightstep’s practical guide to observability in 2021
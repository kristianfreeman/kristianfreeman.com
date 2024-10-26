---
title: 'Redirect anything with lilredirector'
description: ""
pubDate: 'Feb 13 2021'
tags:
  - archive
---


In this video, I’ll show you how to deploy [lilredirector](https://github.com/signalnerve/lilredirector), my open-source redirect engine built for [Cloudflare Workers](https://workers.cloudflare.com/).

After six months of testing different architectures, it’s finally ready to deploy on your sites!

<figure class="wp-block-embed is-type-rich is-provider-embed-handler wp-block-embed-embed-handler wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper"><iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" frameborder="0" height="281" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/sapgxe1RuMA?feature=oembed" title="Redirect anything with Lilredirector (serverless redirect tool) - Setup Guide" width="500"></iframe></div></figure>I’ve been working on lilredirector for about seven months, and it’s gone through a number of architecture redesigns and improvements. Originally, it was built with Workers KV, Cloudflare Workers’ distributed key-value store. It worked great as a proof-of-concept, but it made setup more complicated (you need to know how to set up a Workers KV *namespace* to even do one redirect), and, like all distributed systems, it had consistency issues. Redirects could take up to a minute to show up on your local Cloudflare edge server (the server *closest* to you, running your Workers function), and it led to a general sense of redirects feeling finicky.

The new version uses plain JavaScript to store redirects. It also uses a URL parser to handle dynamic parameters, so you can do things like redirect `/blog/:post_id` to `/:post_id` by matching parameters between the two fields.

This video is a culmination of that work, showing you how to add lilredirector to an existing site in just a few minutes. I use lilredirector *everywhere*: it’s a really useful tool to overlay on pretty much any site, because it passes through to your existing origin (the server your code runs on) if no redirect is found. If a redirect *is* found, it handles it without ever touching your origin, so in that sense, it’s a sort of “low-config” approach to doing redirects on your site without adding a complicated layer on top. It’s just JavaScript (you could probably build it yourself in a few hours), but with some nice configs and URL handling, battle-tested on my own sites and on the Cloudflare Developers documentation that I’ve helped maintain for the past couple years.

Find lilredirector on GitHub: [codewithkristian/lilredirector](https://sachachua.com/blog/wp-content/uploads/2013/05/How-to-Learn-Emacs-v2-Large-640x416.png).
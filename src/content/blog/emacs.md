---
title: "How to start using Emacs, the programmer's editor"
description: ""
pubDate: "Jan 19 2021"
tags:
  - archive
  - bytesized
---

**[Emacs](https://www.gnu.org/software/emacs/) is an incredibly customizable text editor built on top of Lisp.** It has an infamous reputation among programmers and writers as being one of the most daunting tools you can pick up in the programming world, and for good reason: from top to bottom, every single piece of the editor is customizable and extensible to your liking.

It’s not just for programmers, either – here’s the science-fiction author [Neal Stephenson on Emacs](https://www.hackneys.com/docs/in-the-beginning-was-the-command-line.pdf):

> In the GNU/Linux world there are two major text editing programs: the minimalist vi (known in some implementations as elvis) and the maximalist emacs. I use emacs, which might be thought of as a thermonuclear word processor. It was created by Richard Stallman; enough said. It is written in Lisp, which is the only computer language that is beautiful. It is colossal, and yet it only edits straight ASCII text files, which is to say, no fonts, no boldface, no underlining. In other words, the engineer-hours that, in the case of Microsoft Word, were devoted to features like mail merge, and the ability to embed feature-length motion pictures in corporate memoranda, were, in the case of emacs, focused with maniacal intensity on the deceptively simple-seeming problem of editing text. If you are a professional writer – i.e., if someone else is getting paid to worry about how your words are formatted and printed – emacs outshines all other editing software in approximately the same way that the noonday sun does the stars. It is not just bigger and brighter; it simply makes everything else vanish.

Emacs has seen renewed interest in recent years because of [org-mode](https://orgmode.org/): a deceptively simple plain-text organization tool built into most Emacs distributions. Org, as most people in the Emacs community call it, is somewhere between a todo list, an interactive code execution environment, and a writing tool, all-in-one.

Throughout this month’s [Bytesized newsletters](/tag/newsletter/), I’ve been exploring text editors. Emacs is a programmer’s editor – sure, you can write and edit text, but you can also configure what it means to _write_ in Emacs, and what it means to _edit_: not just text, but things like your [emails](https://www.emacswiki.org/emacs/mu4e) or [tweets](https://www.emacswiki.org/emacs/TwitteringMode), too.

That being said – it’s daunting! While it isn’t as hard to figure out how to quit Emacs as [it is for Vim](/how-to-quit-vim/), doing anything of _minor_ complexity, especially in a terminal-based Emacs UI, can be really difficult.

In this issue of Bytesized, I’ll unpack _how_ to learn Emacs, some great setups that make it easy to get started with Emacs, and, if you’re interested in _why_ Emacs, deep dives on what it means to build and use text editors, especially ones that give you complete control over your editing experience. Enjoy!

## How to learn Emacs

### [A Hand-drawn One-pager for Beginners / A visual tutorial](https://sachachua.com/blog/2013/05/how-to-learn-emacs-a-hand-drawn-one-pager-for-beginners/)

Sacha Chua’s hand-drawn Emacs guide covers the basics of Emacs, and what to explore next. Perfect for printing out at your desk!

![Emacs guide](https://sachachua.com/blog/wp-content/uploads/2013/05/How-to-Learn-Emacs-v2-Large-640x416.png)

<span style="color: var(--contrast); background-color: var(--base-3);">via </span>[How to Learn Emacs: A Hand-drawn One-pager for Beginners, from Sacha Chua](https://sachachua.com/blog/2013/05/how-to-learn-emacs-a-hand-drawn-one-pager-for-beginners/)

### [Absolute Beginner’s Guide to Emacs](http://www.jesshamrick.com/2012/09/10/absolute-beginners-guide-to-emacs/)

Jessica Hamrick’s intro to Emacs covers the most crucial Emacs shortcuts, before diving into a conceptual overview of how the Emacs workflow works – _buffers, windows_ and _frames_.

### [emacs.sexy](https://emacs.sexy/)

Despite the kind-of ridiculous name, emacs.sexy is a great intro to Emacs, both the editor, and the community surrounding it. Find the right Emacs build for your platform, and a collection of resources to help you get started – books, screencasts, and more.

## Setups that work

### [Doom Emacs](https://github.com/hlissner/doom-emacs)

Doom Emacs is an extremely popular Emacs distribution (a term used in the community for a pre-configured Emacs environment) that has a ton of extensibility for different languages, tools, and workflows.

Doom falls into the distro category of “everything set up for you” – it gives you a few ways to customize your Emacs _outside_ of Doom, but generally, you’re going to be in the Doom ecosystem, using the plugins and primitives they set up for you in order to customize your editor.

If you’re looking for a quick set up and have some experience with Emacs, Doom might be a good fit. If you’re new to Emacs and OK with a bit of a learning curve, you’ll get a great set of defaults for working with most languages and tooling, without having to work too hard to find it.

### [Spacemacs](https://www.spacemacs.org/)

Spacemacs is the original all-in-one Emacs configuration, with a focus on combining Vim shortcuts and Emacs sensibilities into a single editor. If you’re coming from a Vim background, Spacemacs works almost identically to Vim on first launch (though, to be fair, so does Doom!) and provides a great UI for discovering new functionality through the `<leader>` (set to `space` by default) hotkey system.

### [Prelude](https://github.com/bbatsov/prelude)

Prelude is an Emacs distribution for developers who don’t want to override all of the Emacs default behavior with custom logic. It’s pure Emacs, just with some nice defaults included. [Bozhidar Batsov](https://github.com/bbatsov), the maintainer of Prelude, is also the maintainer of a number of extremely popular Emacs plugins, so he has the background in Emacs Lisp development that makes Prelude a reliable Emacs distro to work with.

## Deep dives

### [Toward a “modern” Emacs](https://lwn.net/Articles/832311/)

Jonathan Corbet explores the modern history of Emacs – the recent popularity of the editor, how the editor can change in the immediate and long-term future to attract developers, and how the community can embrace the new popularity and enthusiasm for the platform.

### [Why Emacs?](https://batsov.com/articles/2011/11/19/why-emacs/)

Bozhidar Batsov (author of the Prelude distro above) covers why he uses Emacs, and why he thinks it’s a unique editor worth learning:

> I’m an Emacs user and I’m proud of the fact. I know my reasons for using it (and loving it) for many years now. But many people don’t. I often get asked by various people the same question – “Why should I use Emacs? What makes it better than Eclipse/IntelliJ/vim/etc?”.
>
> While I wouldn’t dare to claim that Emacs is better than all the IDEs and competing editors I’ll share here the things that I think are making it great.

![](http://imgs.xkcd.com/comics/real_programmers.png)

### [How to open a file in Emacs](https://www.murilopereira.com/how-to-open-a-file-in-emacs/)

Murilo Pereira’s recent article about Lisp and Emacs is a deep dive into why Lisp and extensibility in an editor matters, and how Emacs’ _values_ are different than most editors on the market. It’s a pretty epic read (estimated at 74 minutes on his blog), but if you’re interested in the _why_ and the deeper _how_ of text editors as a tool that we all use for thousands of hours in our lives, it’s worth checking out!

---
title: "Here's what you need to learn and master Vim, the modal text editor"
description: ""
pubDate: "Jan 12 2021"
tags:
  - archive
  - bytesized
---

**Vim** (Vi IMproved) was first released in 1991 by [Bram Moolenaar](https://www.moolenaar.net/). It started as a clone of `vi`, a Unix text editor initially released in 1976.

Vim (and Vi) are _modal_ text editors: they have contextual “modes” that allow you to interact with the text in your file in different ways. Vim has modes for different situations – `insert` for when you’re writing text, `visual` for selecting text and manipulating it, `normal` for navigating through your document, and many more for ancillary situations.

[Here’s Greg Hurrell on modal text editors:](https://wincent.com/wiki/Modal_editor)

> A [modal text editor](https://wincent.com/wiki/modal_text_editor) is a, nowadays rare, text editor that offers multiple interaction modes which are optimized for specific types of action and interaction. The rationale is that each mode is a finely-tuned tool which allows the user to realize their objectives in an efficient and powerful manner. This does require more learning than you might be accustomed to as a user of a non-modal editor, but the reward is hopefully increased efficiency and power.

[Last week, we looked at the most popular editor in the world, VSCode.](/8-vscode/)

Our focus was on _productivity_ – most readers of Bytesized probably know of VSCode, and are probably using it.

The same generally can’t be said of Vim: only [25% of people surveyed in Stack Overflow’s 2019 Developer Survey](https://insights.stackoverflow.com/survey/2019#development-environments-and-tools) use Vim, and it has a notoriously hard learning curve.

I’ve used Vim for almost a decade, and even if I’m not in Vim every day, the concepts of modal editing and keyboard-based navigation have transferred over into _everything_ I do on the computer. Learning Vim is worth doing!

In this edition of [the Bytesized newsletter](/), I’ll cover both _how_ to learn Vim, by going through some great tutorials and long-form pieces on how to think about modal editing, as well as some batteries-included configurations and plugins to have a great setup quickly. The Vim ecosystem is incredibly active and there’s a ton of great developer experience improvements to be made over Vim’s default setup as well, so if you’re using Vim, you’ll still get a ton out of this newsletter. Let’s dig in!

## Learn Vim, fast

### [How to Learn Vim: A Four Week Plan](https://medium.com/actualize-network/how-to-learn-vim-a-four-week-plan-cd8b376a9b85)

Peter Jang offers a structured four-week plan to learn the fundamentals of Vim:

1. Week 1: Complete vimtutor once a day, every day
2. Week 2: Use Vim with minimal config, no plugins
3. Week 3: Use Vim with minimal plugins
4. Week 4: Compose Vim commands with verbs and nouns

### [VimTricks – weekly tips, tricks, guides, plugins, videos, screencasts, and more – all about Vim](https://vimtricks.com/)

VimTricks is a newsletter covering Vim tricks and plugins. Each week, you get a new Vim command, tip, or hack on how to work inside of Vim more effectively. Even if I’m not using Vim and I’m experimenting with a new editor or tool, I still try to catch up with VimTricks every week – it’s a great read!

### [Learn Vim For the Last Time: A Tutorial and Primer](https://danielmiessler.com/study/vim/)

Daniel Missler’s blog has a comprehensive (and up-to-date) reference to Vim, covering both the basics – working with files, changing/deleting text, etc., and more advanced topics, like repeating commands, macros. Of particular note is the section on Vim’s _editing language_ – see the video “Mastering the Vim Language” later in the newsletter for more on this.

### [vim.so: Learn and Master Vim faster with interactive exercises](https://www.vim.so/)

Kenneth Cassel is building an interactive online Vim course that’s available for just $8 at an early-bird discount.

## Instant configurations

A huge part of Vim’s culture is _sharing your configuration_. The rise of GitHub has made this super easy: there’s a ton of batteries-included Vim configurations that you can install in minutes to completely change (and hopefully enhance) your Vim workflow. Here’s some of the more popular ones:

- [amix/vimrc](https://github.com/amix/vimrc)
- [SpaceVim/SpaceVim](https://github.com/SpaceVim/SpaceVim)
- [<span style="color: var(--contrast); font-size: inherit; background-color: var(--base-3);">spf13/spf13-vim</span>](https://github.com/spf13/spf13-vim)

## Watch Vim in action

### [How to Configure Vim like VSCode](https://www.youtube.com/watch?v=gnupOrSEikQ)

Ben Awad covers his configuration to setup Vim like VSCode, including a file explorer, type-ahead suggestions, and more.

<figure class="kg-card kg-embed-card"><iframe allowfullscreen="allowfullscreen" frameborder="0" height="200" loading="lazy" src="https://www.youtube.com/embed/gnupOrSEikQ?feature=oembed" width="356"></iframe></figure>

### [THE PERFECT VIM CONFIGURATION](https://www.youtube.com/watch?v=zF9EcpYb1KE)

Sebastian Karlsson dives into his `vimrc` (the Vim configuration file), how it works, and how to install it for yourself.

<figure class="kg-card kg-embed-card"><iframe allowfullscreen="allowfullscreen" frameborder="0" height="200" loading="lazy" src="https://www.youtube.com/embed/zF9EcpYb1KE?feature=oembed" width="356"></iframe></figure>

### [Mastering the Vim Language](https://www.youtube.com/watch?v=wlR5gYd6um0)

Chris Toomey covers Vim’s editor language – a dense mapping of text objects, nouns, and verbs – that allow you to think about inserting and editing text in a way that many other editors simply can’t do.

<figure class="kg-card kg-embed-card"><iframe allowfullscreen="allowfullscreen" frameborder="0" height="200" loading="lazy" src="https://www.youtube.com/embed/wlR5gYd6um0?feature=oembed" width="356"></iframe></figure>

### [What is Neovim, and why should you care?](https://www.youtube.com/watch?v=PoHLO-b_TxA)

[Neovim ](https://neovim.io/)is an open-source project to modernize Vim and Vim’s modal editing for a new generation of programmers. In this video, the MinuteVimTricks YouTube channel covers why Neovim matters for Vim developers, and why it may be worth switching to.

<figure class="kg-card kg-embed-card"><iframe allowfullscreen="allowfullscreen" frameborder="0" height="200" loading="lazy" src="https://www.youtube.com/embed/PoHLO-b_TxA?feature=oembed" width="267"></iframe></figure>

## My favorite plugins

Like I said at the beginning of the email, I’ve been using Vim for almost a decade. Since this newsletter is getting a bit long, I narrowed down my choice picks to just three – the plugins I can’t live without when I’m in Vim.

### [Syntastic](https://github.com/vim-syntastic/syntastic)

`syntastic` is a syntax checking plugin for Vim. If you’ve only worked with VSCode or other IDEs (integrated development environments), you might be surprised to learn that Vim ships without any sort of syntax checking! This plugin hooks into your language’s checker tools (e.g. `jslint`, `rustc`, or `gcc`) and renders potential code errors right in your editor.

### [vim-airline](https://github.com/vim-airline/vim-airline)

`vim-airline` was one of the first plugins I used to make my Vim installation _look good_. It updates Vim’s tabline (the solid bar across the bottom of Vim’s UI) with better colors, as well as the ability to customize it with information from other plugins, or from your own custom scripts.

### [ctrlp](https://github.com/kien/ctrlp.vim)

`ctrlp` is a classic fuzzy file finder for Vim, used to quickly look up files in a project. This keyboard-based file finder became extremely popular via the editor TextMate, and this project seeks to bring it to Vim. Just type `<CTRL>-p` (or whatever you customize it to), write a few characters of the file you’re looking for, and press `enter`. So easy!

---
title: 'How to set up a new macOS system, using Homebrew and Brewfile'
description: ""
pubDate: 'Jun 23 2023'
tags:
  - archive
---


I recently bought a new Mac Studio. I needed a fast and organized way to set it up, and also wanted to keep a track of the software I was installing. I wanted to create a system that would allow me to easily replicate the same setup on future computers.

That is why I developed this open-source utility, which is available for everyone on GitHub. You can find it at [codewithkristian/computer](https://github.com/codewithkristian/computer).

This utility leverages [Homebrew](https://brew.sh), a software management tool for Macs, in combination with a special file known as a `Brewfile`.

In this blog post, I’ll quickly cover the `Brewfile`, which I would guess many people don’t know exists, as well as explain some of the tooling I wrote around `Brewfile` to make it easier to manage for my needs.

### Understanding the Brewfile

The purpose of the `Brewfile` is to manage all the apps and programs you install on your computer. Formatted as a simple list, each line represents an application or a package that can be installed through Homebrew. It separates brews, which are Homebrew packages, and casks, which are Mac apps installed through [homebrew-cask](https://github.com/Homebrew/homebrew-cask).

Here’s a short example of what a Brewfile looks like:

```
brew "ffmpeg"
brew "gnu-sed"
brew "mkvtoolnix"
brew "neovim"
brew "python@3.11"
brew "rclone"
cask "1password"
cask "amethyst"
cask "arq"
cask "karabiner-elements"
cask "keyboard-maestro"
cask "kitty"
cask "vlc"
```

To install the packages, you can use the `brew bundle` command.

The `Brewfile` reduces the complexity of remembering the needed commands for installation and allows that process to be automated by putting it all into one, easily managed file. This enables you to replicate your software configuration on any new system effortlessly. In this way, you ensure that your setup is consistent across different devices, saving a significant amount of time.

### Usage

My open-sourced [`computer` repository](https://github.com/codewithkristian/computer) manages two primary tasks that go above and beyond a simple `Brewfile`:

1. Track the `Brewfile` in source, preferably on GitHub.
2. Provide utilities around the `Brewfile` to make it easy to add and manage new packages.

To start with a new computer, I can clone the repository down and run `./install` in the terminal which installs all the packages.

Additional apps can be installed by using the commands `./add-brew brew-name` or `./add-cask cask-name` in the terminal, where ‘brew-name’ and ‘cask-name’ are replaced with the names of the apps.

To streamline the management of these apps, the utility comes with commands like `./sort-brewfile`, which keeps your Brewfile neat and ordered, and `./commit`, that makes a new log entry with the current time as the description. Each time I add a new `brew` or `cask` entry to `Brewfile`, the file is automatically sorted, a new commit is created, and pushed up to GitHub. This means it’s always up-to-date (without me having to manage it manually).

### Tailor it for Your Needs

As this utility is open-source, it can be cloned and modified according to your specific needs. Modify it and use it to quickly set up your new computer the way you want.

It’s worth noting that if you’re coming from an existing set up, you can “dump” your installed Homebrew brews/casks using `brew bundle dump`, which will write everything into the current directory. But for my uses, I wanted to start from scratch because my previous computers have a lot of cruft that I didn’t necessarily want to include in my new machine.

Hopefully, this utility will be of help to users wanting a systematic and customizable way to set up new computers. By recording your particular computer’s configuration, you can easily duplicate it across multiple systems, saving precious time and effort.
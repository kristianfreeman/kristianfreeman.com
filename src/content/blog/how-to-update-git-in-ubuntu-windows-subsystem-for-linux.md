---
title: "How to update Git in Ubuntu + Windows Subsystem for Linux"
description: ""
pubDate: "Mar 10 2021"
tags:
  - archive
---

Recently, the Git team [announced a vulnerability](https://github.com/git/git/security/advisories/GHSA-8prw-h3cq-mghm) in Git’s cloning mechanism. To mitigate this vulnerability, the team released version 2.30.2.

I use [Windows](/tag/windows/) Subsystem for [Linux](http://7.dev/tag/linux) (WSL), specifically the Ubuntu distribution. In this blog post, I’ll show you how to update Git on your machine (whether specifically for this vulnerability, or in the future).

## Check your Git version

To check your Git version, run `git --version` from your command-line:

```shell
$ git --version
git version 2.25.1
```

## Add git-core PPA

Ubuntu’s default package repository often doesn’t package a new version of Git for users. At time of writing, the newest version that needs to be installed is 2.30.2, but the most up-to-date version in Ubuntu’s repository is 2.15.0.

To fix this, you’ll need to add a PPA (Personal Package Archive), maintained by the Git team for Ubuntu users. Begin by adding the PPA:

```shell
$ sudo add-apt-repository ppa:git-core/ppa
```

## Install a new version of Git

Once you’ve added the git-core PPA, you can update your repository cache, and install Git from the new source:

```shell
$ sudo apt update
$ sudo apt install git
```

Once you’ve installed your new version, confirm that `git --version` returns a newer version of Git:

```shell
$ git --version
git version 2.30.2
```

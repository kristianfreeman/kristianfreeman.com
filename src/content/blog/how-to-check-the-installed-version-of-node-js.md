---
title: 'How to check the installed version of Node.js'
description: ""
pubDate: 'Jul 24 2023'
tags:
  - archive
---


Understanding your Node.js version is crucial for managing your software environment. Check it with these steps:

1. Launch your Command Line Interface (CLI), be it Command Prompt, PowerShell, or Terminal.
2. Type the following command and hit Enter:

```bash
$ node -v
```

3. Your CLI will promptly display your current Node.js version. Note that the ‘v’ denotes ‘version’.

```bash
v20.5.0
```

Most tutorials would stop here. But if you have a complex developer environment setup, what happens if that version number isn’t what you expect?

1. Check where the `node` command is coming from

```bash
$ which node
/Users/dev/.volta/bin/node
```

2. If you’re expecting that path to be somewhere else, it could be due to your `PATH`, which tells the CLI where to look for commands/executables, and importantly, *in what order*:

```bash
$ echo $PATH
/Users/dev/.volta/bin:/opt/homebrew/bin
```

3. For instructions on how to update the `$PATH` value, see our blog post ["How to permanently update your shell $PATH"](https://7.dev/update-shell-path/).
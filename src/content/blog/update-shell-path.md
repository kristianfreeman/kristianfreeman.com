---
title: 'How to permanently update your shell $PATH'
description: ""
pubDate: 'Jul 24 2023'
tags:
  - archive
---


In our blog post ["How to check the installed version of Node.js"](https://7.dev/how-to-check-the-installed-version-of-node-js/), we covered situations where your CLI could run a command from an unexpected place:

> Check where the node command is coming from

```
$ which node
> /Users/dev/.volta/bin/node

```

> If you’re expecting that path to be somewhere else, it could be due to your PATH, which tells the CLI where to look for commands/executables, and importantly, in what order:

```
$ echo $PATH
/Users/dev/.volta/bin:/opt/homebrew/bin
```

To fix this, you need to find the correct configuration file for your shell. You can usually do this (though not always, depending on your developer environment) by combining two values — your `$HOME` directory, and your current `$SHELL`:

```bash
$ echo $HOME
/Users/dev

$ echo $SHELL
/bin/zsh
```

In my case, my home directory is `/Users/dev`, and my shell is `/bin/zsh`, meaning I’m using Zsh (or Zshell). This means that my Zsh configuration file is likely `/Users/dev/.zshrc` (rc generally standing for `runtime configuration`).

Note that in most shells, your `$HOME` directory is aliased or shortened to the tilde key `~`. This means that my home directory can also be referred to `/Users/dev` *or* `~`.

Here’s a list of filenames you can look for in your home directory — one of them will probably the file you should open:

- `~/.bashrc`
- `~/.bash_proflie`
- `~/.zshrc`
- `~/.zprofile`
- `~/.config/fish/config.fish`

Find one of these files, and in the editor of your choice, you can customize the `$PATH` variable. To do this, we’ll re-export (using the `export` command) the variable, defining a new value. Each path is separated by a colon (`:`), and at the end, we can append the original `$PATH` value, so that no information is lost:

```
export PATH="/opt/homebrew/bin:/Users/dev/.volta/bin:$PATH"
```

Now, restarting your terminal and checking your `$PATH` should show an update. If you don’t see any changes, you probably edited the wrong configuration file!

```bash
$ echo $PATH
/opt/homebrew/bin:/Users/dev/.volta/bin
```

In the Node.js example at the beginning of this blog post, following this guide could change the result of `which node`, as a `node` executable in `/opt/homebrew/bin` would get picked up before the `node` executable in `/Users/dev/.volta/bin`.
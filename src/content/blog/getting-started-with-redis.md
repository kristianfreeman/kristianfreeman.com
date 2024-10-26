---
title: 'Getting started with Redis'
description: ""
pubDate: 'Feb 09 2021'
tags:
  - archive
---


**Redis is a powerful key-value database, perfect for caching and in-memory (ephemeral) storage of data.**

In this issue of Bytesized, we’ll dig into the *what*, the *why*, and the *how* of Redis, and give you the tools you need to get started deploying your first Redis instance.

Redis is highly performant: written entirely in C (and [open-source on GitHub](https://github.com/redis/redis)), it fits in the space between *databases* — persistent, rock-solid places to store the bulk of your app’s data — and in-app memory — small variables or constants you hold onto while handling a request. Instead, Redis excels at situations where you need to cache a value *between* requests or *between* users.

Let’s start with a quick introduction to Redis — how to set up your first Redis instance, and issuing commands — before looking at best practices, stories of Redis saving the day in production, and what to check out next as you master Redis and use it in your workflows.

<figure class="kg-card kg-image-card">![](https://7.dev/content/images/2021/02/anykey.gif)</figure>## A brief guide to Redis

**Installation**

Installing Redis is generally pretty easy, regardless of your platform. Using your package manager of choice (I’ll use `homebrew`, on Mac), install the Redis package:

```bash
$ brew install redis
```

With Redis installed, you’ll need to then start the Redis service on your machine. If you’re familiar with your operating system’s configuration system, you may be able to use something like macOS’s `launchctl` or any number of other [Linux](http://7.dev/tag/linux) solutions to this problem (see [“Installing Redis more properly”](https://redis.io/topics/quickstart#:~:text=Installing%20Redis%20more%20properly) in the Redis Quick Start) to start up Redis when your computer boots up. For now, we’ll just open a new shell window and run the `redis-server` command:

```bash
$ redis-server
30851:C 08 Feb 2021 11:42:00.621 
# oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
```

The easiest way to begin working with Redis is through the CLI, which allows you to issue commands directly to your Redis server from in your terminal. Run `redis-cli`, and let’s use the `PING` command to ensure that we can talk to our Redis server from the command-line client:

```bash
$ redis-cli
redis> PING
PONG
```

`PING` is the first Redis command on our list to check out today. There’s a lot more of them (see the [“Commands” page](https://redis.io/commands) — there’s 280+ to dig into!), but we’ll focus on the basic datasets and how to retrieve them in our brief lesson today.

**Setting and getting basic values**

Using the `SET` command, we can provide a key-value pair to Redis to persist. For instance, if I want to store the name of my newsletter, I’ll run:

```bash
redis> SET newsletter "Bytesized"
OK
```

In doing so, I’ve set the key `newsletter` to the value `Bytesized`. *Values in Redis are always strings* — that means that you’ll often *coerce* values into strings if you’re working with Redis as part of a larger application.

With our key set, we want to get it back from the Redis server. The `GET` command does this:

```bash
redis> GET newsletter
"Bytesized"
```

If you try to `GET` a key that doesn’t exist, you’ll get a `nil` value back:

```bash
redis> GET newsletter_name
(nil)
```

One final piece of magic with `GET` and `SET` is providing expiration values. For instance, I could set the value `currently_working_on` to some value, and expire it in 60 seconds. This is possible using a slight variation on `SET` — `SETEX`, which accepts an optional number of seconds to expire on in the format `SETEX key seconds value`:

```bash
redis> SETEX currently_working_on 60 "Writing a Redis blog post"
OK
```

Once my key is set, I can use `GET` to get the current value. I can also use `TTL` to see how many seconds there are until the key expires:

```bash
redis> GET currently_working_on
"Writing a Redis blog post"
redis> TTL currently_working_on
(integer) 20
```

Once the key expires, calling `GET` will return `nil`, as if the key wasn’t ever set:

```bash
redis> GET currently_working_on
(nil)
```

**Basic data structures**

On top of basic string values, Redis also has commands for building around more complex data structures. The most classic of those is the *list* — a set of values that can quickly be retrieved and written to. The `LPUSH` command takes a key, and a value to push onto the beginning of the list at that key. The `RPUSH` command is similar: instead of pushing to the beginning of the list, it’ll add it to the end. The response will be the total size of the list:

```bash
redis> LPUSH languages "JavaScript"
(integer) 1
redis> LPUSH languages "HTML"
(integer) 2
redis> RPUSH languages "CSS"
(integer) 3
```

The `LRANGE` command is analogous to `GET` for standard key-value pairs, allowing you to get a list of values from a key. Instead of just taking a key, it also takes a pair of indexes, `start` and `stop`, which allow you to specify how many items you want out of the list. Passing a matching pair of `start` and `stop` indexes will get a single value (for instance, `0 0` meaning “start *and* stop at the first index, `0`“), and providing negative values will start from the end of the list:

```bash
# Get the first value stored at index 0
redis> LRANGE languages 0 0
1) "HTML"

# Get the first two values, starting at index 0 and stopping at index 1
redis> LRANGE languages 0 1
1) "HTML"
2) "JavaScript"

# Get the entire list, starting at index 0 and stopping at index -1 
# (the last value in the list)
redis> LRANGE languages 0 -1
1) "HTML"
2) "JavaScript"
3) "CSS"

# Get the last value in the list
redis> LRANGE languages -1 -1
1) "CSS"

# Get the last two values in the list, starting at index -2 (the second-to-last
# value in the list) and stopping at index -1 (the last value in the list)
redis> LRANGE languages -2 -1
1) "JavaScript"
2) "CSS"
```

There’s a ton of other data structures in Redis — hashes, sets (lists that enforce unique values), and more. Check out the “Redis Data Structures” post linked below to learn more about how they differ from each other, and why you might pick one in a certain situation over the others available.

I was surprised to find out that even with Redis’ ubiquity in high-availability circles, it didn’t have many “back to basics” tutorials to show you how to write simple key-value pairs, and start to delve into data structures like lists. Now that we’ve taken a quick look at how to get up and running with it, let’s dive deeper into understanding Redis, with some tutorials and blog posts, as well as some use-cases and proof-of-concepts to show you how you might use it in production.

## Understanding Redis

### [Build a simple Twitter clone using PHP and Redis](https://redis.io/topics/twitter-clone)

This tutorial from Redis’ creator, Salvatore Sanfilippo, shows how to build a simple Twitter clone in just PHP and Redis. Even if you don’t know PHP (like me), the dive into *how* to model Twitter or something like it with Redis is a useful way to transfer existing knowledge (Twitter, and how it would be structured in a traditional database) to new things (how Redis stores and handles data).

### [Redis Crash Course](https://www.youtube.com/watch?v=Hbt56gFj998)

In this video from Traversy Media, Brad Traversy dives into the fundamentals of Redis, including understanding the Redis CLI, the data types available in the tool, and how to persist your Redis data using snapshots.

<figure class="kg-card kg-embed-card"><iframe allowfullscreen="allowfullscreen" frameborder="0" height="113" loading="lazy" src="https://www.youtube.com/embed/Hbt56gFj998?feature=oembed" width="200"></iframe></figure>### [Redis Data Structures](https://www.redisgreen.com/blog/redis-data-structures/)

On the topic of data types and structures in Redis, this blog post from RedisGreen covers the data structures in Redis, which serve different use-cases and have different performance characteristics to be aware of.

### [Rethink your Data Model](https://www.openmymind.net/2011/7/5/Rethink-your-Data-Model/)

As you begin to use Redis in earnest, you’ll learn quickly that *how* you structure your data tends to be one of the most important concerns you’ll have. This blog post covers common pitfalls with picking good keys for your data, and how to develop better instincts around key lookups as a common performance bottleneck.

## Use-cases and proof-of-concepts

### [Top 5 Redis Use-Cases](https://www.objectrocket.com/blog/how-to/top-5-redis-use-cases/)

ObjectRocket writes about the top five use-cases for Redis, using the data structures available and utilizing their performance characteristics to fit the situation:

1. Session Cache
2. Full Page Cache
3. Queues
4. Leaderboard/counting
5. Pub/sub

### [How Twitter Uses Redis To Scale – 105TB RAM, 39MM QPS, 10,000+ Instances](http://highscalability.com/blog/2014/9/8/how-twitter-uses-redis-to-scale-105tb-ram-39mm-qps-10000-ins.html)

This article from High Scability, published in 2014, outlines the details of a technical talk from a member of Twitter’s cache team. In it, she covers how Redis is used throughout Twitter to handle extreme amounts of traffic (~30 million queries per second). If you want to watch the video itself, you can find it on YouTube below:

<figure class="kg-card kg-embed-card"><iframe allowfullscreen="allowfullscreen" frameborder="0" height="113" loading="lazy" src="https://www.youtube.com/embed/rP9EKvWt0zo?feature=oembed" width="200"></iframe></figure>### [Redis clients](https://github.com/JamzyWang/awesome-redis#redis-client)

Redis works with basically *any* programming language. Because of the simple primitives it provides for interfacing with the Redis server, there’s clients for basically every language and situation. The `awesome-redis` repo has a great list of Redis clients in a variety of languages, like JavaScript, Ruby, Python, Go, and more.

<figure class="kg-card kg-bookmark-card"></figure>
---
title: 'How to use the unofficial Threads API (with code samples)'
description: ""
pubDate: 'Jul 16 2023'
tags:
  - archive
---


[Threads](https://threads.net) is [Facebook](https://7.dev/tag/facebook/)‘s new social media platform similar to Twitter. In this blog post, I’ll show you how to interact with the private API via a Python package called `threads-net` (check it out [here](https://github.com/dmytrostriletskyi/threads-net)).

*Note that this API is private, and this package is a reverse engineered implementation of how to access and interact with it. You can lose access to your Threads/Instagram account by using this. You have been warned!*

The below instructions all use the command-line.  
First, make sure you have Python installed:

```
$ python3 --version
Python 3.11.4
```

Now, install the [threads-net](https://github.com/dmytrostriletskyi/threads-net) package:

```
$ pip3 install threads-net
```

We’ll open a Python REPL to interact with the package, though you could create a new `.py` file and write a script if you’d prefer:

```
$ python3
Python 3.11.4 (main, Jun 20 2023, 17:23:00) [Clang 14.0.3 (clang-1403.0.22.14.1)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> 
```

Authentication can be tricky — you either need to pull an auth token and device information from an actual device, or use the package to generate it.

Note that depending on how you use the API from this interface, your Threads (and Instagram) account could get flagged… so be careful and be reasonable when it comes to the number of requests you’re making.

Let’s have the `threads-net` package generate authentication details for us:

```
>>> from threads import Threads
>>> threads = Threads(username='instagram_username', password='instagram_password')
```

If the login is successful, you should be able to retrieve your user id using the `get_user_id` function:

```
>>> my_id = threads.private_api.get_user_id(username='7dotdev')
>>> my_id
60801666698
```

You can use that ID to retrieve information about the user as a Python dictionary:

```
>>> me = threads.private_api.get_user(id=my_id)
>>> me['user']['follower_count']
742
>>> me['user']['biography']
'coding and memes // check out https://7.dev to learn how to code 🫡'
```

Now, let’s create a new thread using the `create_thread` function:

```
>>> created_thread = threads.private_api.create_thread(caption='Hello from the Threads API! (blog post coming soon)')
>>> created_thread
{'media': {'taken_at': ...
```

You can see that created post [here](https://www.threads.net/@7dotdev/post/Cuw120pOqla).

If you’d like to make multiple posts in a single thread, you can specify the `reply_to` parameter to indicate that a new post should be *threaded* to a previous post:

```
>>> first_post = threads.private_api.create_thread(caption='Post 1')

# The reply_to id is the 'media.pk' field on the original post
>>> second_post = threads.private_api.create_thread(caption='Post 2', reply_to=first_post['media']['pk'])
```

Finally, we can follow accounts using the `follow_user` function. In the below example, I’ll follow [@7dotdev](https://www.threads.net/@7dotdev) account — make sure to do the same 🙂

```
>>> follow_user = threads.private_api.follow_user(id=60801666698)
>>> follow_user
{'friendship_status': {'following': ...
```
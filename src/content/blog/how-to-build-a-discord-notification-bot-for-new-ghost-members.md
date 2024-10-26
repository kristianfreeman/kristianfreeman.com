---
title: "How to build a Discord notification bot for new Ghost members"
description: ""
pubDate: "Jan 14 2021"
tags:
  - archive
---

This blog is powered by [Ghost](https://ghost.org/), a great open-source blogging platform. _(Editor note: this blog is no longer powered by Ghost, but this blog post is useful, so I’ve retained it.)_

Recently, I moved the Bytesized newsletter ([subscribe by clicking this link!](/how-to-build-a-discord-notification-bot-for-new-ghost-members/#/portal)) to using Ghost’s built-in membership feature.

To know when someone new has subscribed to the site, I wanted to set up a notification bot in the [Bytesized Discord server](https://bytesized.xyz/discord) (in a private channel). Discord bots are pretty lightweight, and as long as you can make an HTTP POST request, it’s a really simple way to build out notifications for your service (think Slack a few years ago, but free!).

<figure class="kg-card kg-image-card">![Example Discord notifications using channel webhooks](/content/images/2021/01/tempsnip.png)</figure>**Here’s how I built my Ghost to Discord notification bot, using [Cloudflare Workers](https://workers.dev/) as a webhook platform!**

## Setting up the Discord bot

Discord bots are essentially unique and authenticated URLs, with the information already preset to post to a specific channel. For my use-case, I created a new channel `#newsletter-subs` and made it available to just the _Moderator_ role (so only I can read it).

Once you’ve created a new Discord channel (or picked the existing one you want to use), go to the channel settings by clicking the “Edit Channel” button on Discord’s sidebar (the gear icon when you highlight over a channel). In the channel settings, select the “Integrations” page, and then the “View webhooks” button.

<figure class="kg-card kg-image-card">![The integrations and webhooks UI in Discord's channel settings](/content/images/2021/01/webhooks.PNG)</figure>You can create a new webhook by clicking the “New Webhook” button. This will give you a few options – first, the display settings for the webhook: the image and name that messages will post as, and the channel you want to post to.

When you’re ready to use the webhook, select the “Copy Webhook URL” button, and a unique webhook URL will be saved to your clipboard. **This should be kept secret!** This URL is authenticated as your webhook and will allow anyone with access to it to post directly into your channel.

## Setting up the Ghost webhook

Now we’ll set up the Ghost webhook that will send data from your Ghost instance. Every time a new member joins your site, a special JSON payload with info about the member will be sent to a URL of your choice.

Webhooks in Ghost are part of _integrations_. To create an integration, navigate to the “Integrations” tab in your Ghost admin sidebar, and then select the (quite small) “Add custom integration” button.

<figure class="kg-card kg-image-card">![Ghost's integrations page](/content/images/2021/01/integrations.PNG)</figure>Give your integration a name, and then in your new integration page, select “Add webhook”. Call your webhook something like “New member’, and then for the *Event* (the thing happening in your Ghost blog that this webhook should fire after), select “Member added”.

You might think that your _Target URL_ – where Ghost sends the data _to_ – would be your Discord webhook URL. Instead of using that value, we’ll deploy a serverless function using [Cloudflare Workers](https://workers.dev/). This function will take the data from Ghost, and format it into a Discord message fit for posting to your channel.

For now, you can put in a random URL of your choice, and once we’ve published our serverless function, we’ll come back and fill in the right value.

## Deploying a Cloudflare Workers function to translate Ghost data for Discord

[Cloudflare Workers](https://workers.dev/) is a serverless platform built on Cloudflare’s global network that makes it super easy to deploy and manage JavaScript functions. (Disclaimer: I work as the developer advocate for Workers!)

Workers is a great platform for this kind of translation work – taking JSON in, transforming it, and sending JSON out to somewhere else.

_If you aren’t familiar with Cloudflare Workers, it’s worthwhile to spend 20-30 minutes diving through my Egghead.io course. I’ll teach you how to set up your Cloudflare account, sign up for Workers, and deploy your first project with Wrangler, our command-line tool. [Watch it for free!](https://egghead.io/courses/introduction-to-cloudflare-workers-5aa3)_

Instead of making you write the code from scratch, I’ve set up an open-source project that transforms Ghost’s JSON into a format ready for Discord. You can find it at [signalnerve/ghost-member-discord-notifications.](https://github.com/signalnerve/ghost-member-discord-notifications)

Here’s how to deploy it yourself:

1. Make sure you have [wrangler](https://github.com/cloudflare/wrangler), the Workers command-line tool, installed and authenticated. If you didn’t go through the Egghead course linked above, you can also follow [our Quick Start guide](https://developers.cloudflare.com/workers/learning/getting-started) to get wrangler up and running.
2. Clone the project locally to your computer: `git clone <a>git@github.com</a>:signalnerve/ghost-member-discord-notifications.git`
3. Update the `account_id` value in `wrangler.toml` – to find that value, you can use `wrangler whoami`, or [follow the instructions for finding it in our Quick Start](https://developers.cloudflare.com/workers/learning/getting-started#7-configure-your-project-for-deployment).
4. Publish your instance of the project using `wrangler publish` – note that it will deploy in the format `<project>.<subdomain>.workers.dev`, where `<project>` is your project’s `name` in `wrangler.toml` (defaulted to `ghost-to-discord`), and `<subdomain>` is the custom subdomain you selected when signing up for your Workers account.
5. Once published, you need to set up a few _secrets_ – values that your Workers function will use while executing – using `wrangler secret`. Your `PASSWORD` secret will be a string password that the Worker will use to validate that a request is coming from Ghost, and `DISCORD_URL` will be the webhook URL that we copied from Discord back in the first section of this guide. [See the “Configuration” section of the open-source project to learn how to set these values!](https://github.com/signalnerve/ghost-member-discord-notifications#configuration)

## Setting the Ghost webhook URL and testing

Once you’ve published your Workers project, you’ll see the URL of your serverless function in Wrangler’s output.

<figure class="kg-card kg-image-card">![](/content/images/2021/01/publish.PNG)</figure>Once you have that URL available, we can use it to build the final URL that we’ll pass to Ghost’s webhook configuration. Note that the serverless function I’ve pushed onto GitHub uses the path `/member_added` (just in case I want to handle more webhook types in the future), and that you’ll also need to pass the `key` query parameter to authenticate with the Workers function. That means that the final URL will look like this (see the screenshot below for a live example, too):

`https://<project>.<subdomain>.workers.dev/member_added?key=<password>`

Back in Ghost’s integration page, you can select your existing webhook and fill in the correct URL for your Workers function.

<figure class="kg-card kg-image-card">![A custom webhook created in Ghost's admin UI](/content/images/2021/01/webhook-in-ghost.png)</figure>Now, to test your new function, just go to your blog’s homepage and sign up with a new test email. [You can also make sure that it’s working on my end by joining the Bytesized newsletter, too](/how-to-build-a-discord-notification-bot-for-new-ghost-members/#/portal) 😁

When a new member subscribes, you should see a new message posted in your Discord channel – neat!

<figure class="kg-card kg-image-card">![An example message posted in a Discord channel using the codebase in this tutorial](/content/images/2021/01/Capture.PNG)</figure>## Discord message configuration

There’s a lot of configuration you can do with Discord notifications that are out of scope for this article – like Slack, you can do things like _embeds_ – more dynamic information presented as an attachment to a message, or simple things like customizing the name or image for the message as they get sent to Discord’s API.

I’ve exposed a few of these inside of the Workers function I’ve open-sourced. In `index.js`, the `config` object contains a function called `createBody`, which can be used to define a custom Discord message object based on the values coming from Ghost:

```js
createBody: ({
  id,
  uuid,
  email,
  name,
  note,
  geolocation,
  subscribed,
  created_at,
  updated_at,
  avatar_image,
  labels,
}) =>
  JSON.stringify({
    avatar_url: avatar_image,
    content: `${name} (${email}) just subscribed to Bytesized!`,
  });
```

[Discohook](https://discohook.org/) is a great interactive playground for testing your message content before sending it to Discord, including testing embeds, custom content and avatars, and more. Of course, [Discord’s API documentation](https://discord.com/developers/docs/intro) is a good reference as well – if you want to customize the output of this serverless function to your use-case, [check out D](https://discord.com/developers/docs/resources/webhook#execute-webhook)iscord’s [`execute-webhook` endpoint documentation](https://discord.com/developers/docs/resources/webhook#execute-webhook) to learn more about the available options.

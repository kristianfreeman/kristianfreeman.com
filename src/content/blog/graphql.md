---
title: 'Everything you need to know to start with GraphQL'
description: ""
pubDate: 'Dec 01 2020'
tags:
  - archive
  - bytesized
---


## **🎓 What is it?**

[A query language for your API](https://graphql.org/). GraphQL allows you to query any of your application’s data from a single endpoint, using a typed query language.

![GIF](https://f000.backblazeb2.com/file/bytesized-assets/images/graphql.gif)

GraphQL ****queries****, which allow you to ****request**** data, kind of look like JSON. You can query anything and everything with a single query — things like a single field or object:

![GraphQL Query](https://f000.backblazeb2.com/file/bytesized-assets/images/graphql-query.png)

You can build more complicated queries, like an object and all of the associated records it has for subfields:

![GraphQL Types](https://f000.backblazeb2.com/file/bytesized-assets/images/graphql-types.png)

*GraphQL is typed.* Everything you query in GraphQL has a definite type, like `String`, or for more complex values, you can define custom types, as seen above.

****Mutations**** describe how and what to ****change**** data in your application. They look just like queries, but with the addition of data:

![GraphQL Mutations](https://f000.backblazeb2.com/file/bytesized-assets/images/graphql-mutations.png)

GraphQL queries and mutations are handled by ****resolvers****. These are functions that are handled by your [GraphQL server](https://graphql.org/code/) and look up the corresponding data that you’re requesting.

## **⌛ The past**

GraphQL was built by Facebook as they built their News Feed feature. Per [Brenda Clark](https://levelup.gitconnected.com/what-is-graphql-87fc7687b042):

> *The main problem with Facebook’s News Feed implementation on mobile: it wasn’t as simple as retrieving a story, who wrote it, what it says, the list of comments, and who liked the post. Each story was interconnected, nested, and recursive. The existing APIs weren’t designed to allow developers to expose a rich, news feed-like experience on mobile. They didn’t have a hierarchical nature, let developers select what they needed, or the capability to display a list of heterogeneous feed stories.*

As tools like React and other powerful frontend user interface tools make it easier to build compelling, interactive applications, existing [REST APIs](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/) are increasingly a performance liability. Given the News Feed example above, a REST API might make requests for a story, the comments, and profiles of the accounts who commented on the story:

GET /stories/1 GET /stories/comments GET /users/1 GET /users/2 GET /users/3

With GraphQL, developers could just query for the story, and *everything* else they needed to render the News Feed components:

GET /graphql Body: { story(id: 1) { text url comments { body user { name avatar } } } }

From Brenda Clark’s above article:

> *Say, you have a vending machine. With traditional REST, you press one button on the vending machine and get one thing. So, you have to press lots of buttons one at a time to get everything you need. This process is slow.*   
> *But if you have special purpose buttons, you can get multiple things at once. So, for example, you could press a special purpose button and get four things from the vending machine.*   
> *A mix of these two approaches is to have a vending machine where you can press exactly the buttons you want in combination and get everything you need in one go. This is what GraphQL does.*

## **🤔 Why it matters**

GraphQL is one of many attempts to figure out what the future of APIs might look like. (For an alternative approach, read more about [HATEOAS](https://recaffeinate.co/post/what-is-hateoas/))

GraphQL is building for developer experience. This [2020 paper](https://arxiv.org/pdf/2003.04761.pdf) from the Universidade Federal de Minas Gerais in Brazil found that GraphQL offers substantial benefits in developer experience, regardless of experience level:

> *As our key finding, we found that GraphQL requires less effort to implement API queries, when compared with REST. We also showed that (i) queries whith many parameters are particularly more difficult to implement in REST than in GraphQL; (ii) we also observe that GraphQL requires less effort even for developers that have no previous experience which this technology. Also, interestingly, experts in REST APIs can also write GraphQL queries with less effort.*

GraphQL is trying to reduce the number of barriers for front-end developers to build data-driven applications. Instead of needing to rely on backend developers to build APIs, frontend developers can build full-stack apps completely on their own.

## **👶 Where to start**

- [“Learn GraphQL in 10 minutes” ](https://www.youtube.com/watch?v=HWE1zlhQiT8)on our YouTube channel.
- [How to GraphQL](https://www.howtographql.com/) is an extremely comprehensive guide to understanding GraphQL, both from the client and server perspectives.
- Eve Porcello’s upcoming [GraphQL Workshop](https://www.graphqlworkshop.com/) is poised to become a definitive resource for developers learning how to build and scale GraphQL applications.

## **📌 Players**

Here’s a crucial thing to know: ****GraphQL is a spec, not a framework.**** This means that there are competing frameworks, tools, and solutions to help you get from start to finish with your GraphQL project. Here’s some of the key players:

- The [Apollo GraphQL](https://www.apollographql.com/) team is building what is probably the most popular GraphQL implementation in use by developers. They offer a fully-featured client and a Node.js server backend for deployment, so you can go from start to finish with their great tutorial to learn how to build with GraphQL. (note: this is what I did!)
- [FaunaDB](https://fauna.com/) combines a NoSQL database with a GraphQL API to make it easy to get up and running with a production-scale database for your apps. (They also sponsored this week’s Bytesized — thanks!)
- [Hasura](https://hasura.io/) wraps a world-class database (PostgreSQL) with a GraphQL API. [Check out the demo they did on the Bytesized YouTube channel ](https://www.youtube.com/watch?v=xNcxdGaUGqI&t=432s).
- [Prisma](https://www.prisma.io/) exposes a TypeScript ORM (object-relational mapping) for managing your data in Node. It generates an [automatic GraphQL API ](https://www.prisma.io/docs/concepts/overview/prisma-in-your-stack/graphql)for querying it.
- [OneGraph](https://www.onegraph.com/docs/) is building a GraphQL service that wraps APIs like Salesforce and Stripe into a single endpoint, so you can build SaaS tools using GraphQL.

## **🙅‍♀️ Criticisms**

This Hacker News discussion covers the good, the bad and the ugly of moving to GraphQL from REST: [“Ask HN: Were you happy moving your API from REST to GraphQL?”](https://news.ycombinator.com/item?id=17565508)

LogRocket’s blog post [“5 Reasons You Shouldn’t Be Using GraphQL” ](https://blog.logrocket.com/5-reasons-you-shouldnt-be-using-graphql-61c7846e7ed3/)covers some common criticisms of GraphQL — the disadvantages around adopting a ton of new tooling, caching behaviors, and more.

The Players section above reveals something interesting about GraphQL: it’s a fairly fractured ecosystem. Apollo has a substantial advantage in developer mindshare over other GraphQL platforms. In particular, their [JavaScript client](https://github.com/apollographql/apollo-client) is *substantially* more popular than anything else available. Alternative clients like [urql](https://github.com/FormidableLabs/urql) exist, and it’s worth checking them out to bring more people to the table answering the question “What should GraphQL clients look like?”

## **🙋 Who to know**

- [Eve Porcello](https://twitter.com/eveporcello), GraphQL instructor.
- [Kyle Matthews](https://twitter.com/kylemathews), Gatsby.js founder.
- [Nader Dabit](https://twitter.com/dabit3), AWS Amplify Developer Advocate.
- [Peggy Rayzis](https://twitter.com/peggyrayzis), Apollo GraphQL Developer Experience manager.
- [Rajoshi Ghosh](https://twitter.com/rajoshighosh) and [Tanmai Gopal ](https://twitter.com/tanmaigo), founders of Hasura.
- [Sean Grove](https://twitter.com/sgrove), founder of OneGraph.
- [Shruti Kapoor](https://twitter.com/shrutikapoor08), senior software engineer at PayPal.

## **🔗 Links**

- [Byteconf GraphQL 2020](https://www.youtube.com/watch?v=IPQ-eBM9-BY) was a free, remote GraphQL conference organized by Bytesized in January 2020.
- [“GraphQL: Designing a Data Language” by Lee Byron ](https://www.youtube.com/watch?v=Oh5oC98ztvI), a talk at the Strange Loop conference in 2015 introducing GraphQL, and the motivations behind it.
- [How to GraphQL](https://www.howtographql.com/), a comprehensive tutorial to get you up and running with GraphQL.
- [GraphQL Workshop](https://www.graphqlworkshop.com/) is an upcoming comprehensive course covering everything GraphQL.

And a funny tweet to sign off this week:

![GraphQL Tweet](https://f000.backblazeb2.com/file/bytesized-assets/images/graphql-tweet.png)

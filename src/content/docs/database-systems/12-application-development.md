---
title: Application Development
sidebar:
  order: 12
---

Applications, as the intermediary between the user and database is discussed here. Can be split into 3:
- frontend
- middle layer
- backend

## Web interface

Modern, most-used interface for applications. The web is a distributed system of documents and other resources. Resources are identified by Uniform Resource Locators (URLs). HTTP is used for communication between client and server.

:::note[www]

:::

:::note[0.0.0.0]





:::

### Cookies and Sessions

Mechanisms used by web applications to maintain state and track user interactions across multiple requests. HTTP is not session aware by default.

- Cookies   
  small pieces of data stored on the user's browser. The server sends cookies to the client, which are then included in subsequent requests. Cookies can be used for authentication, storing preferences, or tracking user activity. Have attributes such as expiration, domain, and path, which control their scope and lifetime. Visible to and managed by the client.

- Sessions   
  server-side storage of user data. When a user logs in or interacts with the application, the server creates a session and assigns a unique session ID, which is typically stored in a cookie on the client. The session ID allows the server to retrieve user-specific data for each request. Sessions are commonly used for authentication and storing temporary data. Managed securely on the server.
 
When cookies and sessions are used together, persistence is enabled which then enables personalized experiences.

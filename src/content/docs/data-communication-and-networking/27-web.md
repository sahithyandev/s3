---
title: Web
sidebar:
  order: 27
slug: data-communication-and-networking/web
prev: true
next: true
---

Most popular application on the internet. A collection of interconnected documents and other resources. Servers and clients communicate using the HTTP protocol which runs on top of TCP/IP.

HTTP, by default, is stateless; no past information is stored between requests. But HTTP can be made stateful using cookies or other mechanisms on the application level.

### URL

Short for Unique Resource Locator. Unique identifier for resources on the web.

### Client

Device that is used to access the internet. Device that requests resources from a server.

### Server

Device that is used to store and serve resources to clients.

## HTTP Message

Can either be a request or a response. End of message is indicated by a blank line.

### Request

Message sent from a client to a server to request a resource.

Example:

```
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html
```

### Response

Message sent from a server to a client in response to a request.

Example:
```
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1256

<html>
  <head><title>Example</title></head>
  <body>Hello, world!</body>
</html>
```

## Verbs

Aka. HTTP methods. Defines the type of action to perform on a resource. The most common verbs are:

- OPTIONS: Retrieve information about the communication options available on the server.
- HEAD: Retrieve metadata about a resource without downloading it.
- GET: Retrieve data from the server.
- POST: Send data to the server to create a new resource.
- PUT: Update an existing resource on the server.
- DELETE: Remove a resource from the server.
- PATCH: Partially update an existing resource.

Each verb indicates the intended operation and helps servers understand how to process the request.

## Destination URL

HTTP requests specify a destination URL, which is the address of the resource being requested. It can either be an absolute URL or a relative URL. Absolute URLs include the protocol, domain name, optionally the port number, and path. Relative URLs are relative to the current URL.

Port number is an optional part of the URL that specifies the port number on which the server is listening. If not specified, the default port number for the protocol is used. HTTP uses port 80. HTTPS uses port 443.

## Version

HTTP requests specify a version number, which indicates the version of the HTTP protocol being used. The most common version is HTTP/1.1, but HTTP/2 and HTTP/3 are also supported.

HTTPS is a secure version of HTTP that uses SSL/TLS encryption to protect data in transit. It is recommended to use HTTPS whenever possible to ensure the security of data in transit.

## Headers

Key-value pairs included in an HTTP message. Provide metadata about the message and can be used to control the behavior of the message. Key and value are separated by a colon.

Some common HTTP headers include:

- Host   
  Specifies the domain name of the server (for virtual hosting).
- User-Agent   
  Identifies the client software making the request.
- Accept   
  Indicates the media types the client can process.
- Content-Type   
  Specifies the media type of the resource or data being sent.
- Content-Length   
  Indicates the size of the message body in bytes.
- Authorization   
  Contains credentials for authenticating the client with the server.
- Cookie   
  Sends stored cookies from the client to the server.
- Set-Cookie   
  Used by the server to send cookies to the client.
- Cache-Control   
  Directs caching behavior for requests and responses.
- Location   
  Used in responses to redirect the client to a different URL.

## Status

Included in the response. Indicates the outcome of a request. The most common status codes are:

- 200 OK: The request was successful.
- 301 Moved Permanently: The resource has moved permanently to a new URL.
- 400 Bad Request: The request was malformed or invalid.
- 404 Not Found: The requested resource was not found.
- 500 Internal Server Error: An error occurred on the server.
- 503 Service Unavailable: The server is currently unavailable.
- 505 HTTP Version Not Supported: The server does not support the HTTP version used in the request.

Each status code indicates the outcome of a request and helps clients understand how to handle the response.

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
The World Wide Web, which is a system of linked web pages and resources that we can access over the Internet. Used to indicate that the address is part of the World Wide Web service.
It has several benefits:
  - **Organizes content**: It helps separate web traffic from other services that might use the same domain (like mail.example.com).
  - **Eases technical management**: Web servers can be configured specifically for "www" for performance, cookies, and caching control.
  - **Supports scalability**: Allows large sites to distribute traffic across multiple servers or domains more easily.
  - **SEO and branding**: Using "www" keeps the website's URL consistent and avoids conflicts in URLs, which helps in search engine optimization (SEO) and maintains a clear brand identity.
:::

:::note[0.0.0.0]
The IP address 0.0.0.0 is a special number used in different ways:
  -  As a source address, it means the device doesn't have a real IP yet, like when it’s just starting up or asking for an IP.
  -  As a destination address, it’s mostly invalid, but can mean "all IPs" for servers to listen on all network connections or as a default route in networking.
  -  It is not used for normal communication but as a placeholder or default value.

In simple terms, 0.0.0.0 means "no specific address" when used by a device, and "all addresses" or "default" when used in server settings or routing.
:::

### Web Interfaces to Database

Limitations of Static HTML:
  - Cannot customize documents for individual users.
  - Difficult to update when many pages have replicated data.

Solution: Dynamic Generation:
  - Web pages are generated on-the-fly from database data.
  - Enables personalized content based on user data, like tailored ads or local news.
  - Ensures displayed information is always current, for example, live stock market updates.

This dynamic approach improves user experience and makes maintaining web content much easier.

## Web Servers

It's a software that respond to user requests by serving web pages. They can deliver static content (like fixed HTML files) or run programs called CGI (Common Gateway Interface) scripts. CGI programs dynamically generate HTML content based on user input or database interaction, allowing websites to provide customized, interactive responses.

CGI scripts run on the web server when a user requests a dynamic page. The server passes the request info to the CGI script, which processes it (like querying a database), then generates HTML sent back to the user's browser. This enables dynamic web services, like online forms or interactive searches.


### Cookies and Sessions

Mechanisms used by web applications to maintain state and track user interactions across multiple requests. HTTP is not session aware by default.

- Cookies
  small pieces of data stored on the user's browser. The server sends cookies to the client, which are then included in subsequent requests. Cookies can be used for authentication, storing preferences, or tracking user activity. Have attributes such as expiration, domain, and path, which control their scope and lifetime. Visible to and managed by the client.

- Sessions
  server-side storage of user data. When a user logs in or interacts with the application, the server creates a session and assigns a unique session ID, which is typically stored in a cookie on the client. The session ID allows the server to retrieve user-specific data for each request. Sessions are commonly used for authentication and storing temporary data. Managed securely on the server.

When cookies and sessions are used together, persistence is enabled which then enables personalized experiences.


### Servlets

Servlets are Java programs that run on a web/application server. They handle client requests, process them like retrieve data from a database, and generate dynamic responses such as HTML pages which are sent back to the client’s browser. Each client request spawns a new thread in the server that is closed after the request is completed. Servlets provide a powerful way to create dynamic web applications and improve upon older technologies like CGI by being more efficient and scalable.

#### Servlet Sessions:

Because HTTP is a connectionless protocol, server forgets the request after responding, servlets use sessions to track and maintain user interaction over multiple requests. The servlet API supports sessions by creating a unique session object for each user. When a user first interacts, a session is created and a cookie storing session ID is sent to the user’s browser. On later requests, this cookie identifies the session, so the server remembers data like user authentication or preferences.

#### Servlet Support:

Servlets run inside application servers such as Apache Tomcat, Glassfish, JBoss which provide the environment and services needed:

  - Loading and managing servlets
  - Handling network communications
  - Session management
  - Security and authentication
  - Deployment and monitoring

Application servers provide scalability and robustness by managing multiple servlets and concurrent client requests efficiently.


### Server-Side Scripting

Refers to the technique where executable code or SQL queries are embedded directly within an HTML document. When a user requests this document, the web server executes the embedded code to generate the actual HTML content dynamically before sending it to the client's browser.
This makes it easier to connect a web interface to a database because:

  -  Input values from HTML forms can be used directly in the embedded server-side code or SQL queries.

  -  The document returned to the client is dynamically created based on the processing and data retrieval performed on the server.

Various server-side scripting languages are used today, including:

  -  **JSP (Java Server Pages)** : It's compiled into Java + Servlets, and allows new tags to be defined, in tag libraries

  -  **PHP** : It's widely used for Web server scripting.

  -  General-purpose scripting languages like **VBScript**, **Perl**, and **Python**


### Client-Side Scripting

It refers to scripts or small programs that are sent from the web server along with the HTML document and executed directly within the user's web browser (the client).

Allows web pages to be interactive, fast, and responsive by running scripts inside the browser, reducing server load and enhancing user experience. These scripts make web pages interactive by doing tasks like animations, input validation, and changing page content without needing to reload the whole page.

Client-side scripts help make web pages "active" by executing programs on the client-side, speeding up user interaction by avoiding many round trips to the server.

To ensure security, mechanisms are in place so that malicious scripts cannot harm the client machine. For example, Java's security model prevents dangerous system calls by applets and informs users about potentially harmful actions.

Now, JavaScript is widely used in Web applications to create rich and interactive user interfaces. It performs tasks like checking user input, updating parts of a web page dynamically using the Document Object Model (DOM), and communicating with the server in the background asynchronously through AJAX, allowing page content to change without needing a full reload.


## Application Architectures

Defines how an application is structured into layers or components to organize functionality and manage complexity efficiently.
There are 3 layers in the architecture

### Presentation Layer (User Interface)
  - This layer interacts directly with users. It includes forms, graphical interfaces, and web-based front ends that display data and capture user input.
  - It uses technologies like HTML, CSS, JavaScript, and sometimes Flash or Java applets to create interactive, user-friendly interfaces.
  - It handles how information is displayed and collects user actions, then sends that input to the next layers for processing.

### Business Logic Layer
  - This middle layer encapsulates the core functionality and business rules.
  - It helps to keep the application organized by separating the core processing logic from the user interface and data storage, making the system easier to maintain, modify, and scale.
  - Key roles of the Business Logic Layer include:
    - **Validating Inputs** - Checks the data meets the required rules before processing.
    - **Enforcing Business Rules** - Applies policies like "a student can enroll only if prerequisites are met" or payment conditions.
    - **Managing Workflows** - Handles processes that involve multiple steps or participants.
    - **Processing Data** - Performs calculations, data transformations, and decision-making.
    - **Security** - Controls access and ensures data integrity

### Data Access Layer
  - This layer interacts with the database, managing storage and retrieval of data. It provides a clean interface so the business layer does not need to know database schema details directly.


## Object Relational Mapping (ORM)

It's a technique that connects object-oriented programming(OOP) languages with relational databases. Instead of writing complex SQL queries, developers work with objects in their programming language, and ORM automatically translates these operations into SQL commands.

Advantages of using ORM:
  - **Simplifies Database Interaction** - Do CRUD operations using objects without manually writing SQL.
  - **Maps Objects to Tables** - Maps program objects or classes to database tables.
  - **Manages Relationships** - Handles relationships between objects.
  - **Improves Productivity** - Developers write less code, reduce errors, and maintain applications more easily.
  - **Portability** - ORM abstracts database-specific details, making it easier to switch between different database systems.
  - **Security** - Reduces the risk of SQL injection attacks.
  - **Performance** - Implement caching to improve application performance.

:::note[]
**Hibernate ORM**: Java ORM framework that simplifies database interactions. Offers features like caching and automatic schema generation.
**Microsoft's Entity Data Model**: Uses a special query language called Entity SQL, which simplifies querying by working directly with the entity model instead of raw database tables.
:::

## Web Services

Software systems that allow different applications to communicate and exchange data over the internet using standardized protocols like HTTP or HTTPS.

Use formats like XML or JSON to send and receive information, allowing programs written in different languages on different platforms to work together seamlessly.

Act as intermediaries, enabling applications to request and provide services regardless of their underlying technologies.

Key roles in web services architecture include the service provider (hosts the service), the service requester (calls the service), and the service registry (helps find services). This enables flexible, interoperable, and distributed computing across diverse systems.

Two approaches are widely used:
  1. **Representation State Transfer (REST)** - Allows use of standard HTTP request to a URL to execute a request and return data in **XML** or **JSON** format.
  2. **Big Web Services** - uses **XML** representation for sending request data, as well as for returning results. Standard protocol layer built on top of HTTP.


## Application Performance

It's critical for providing smooth and reliable user experiences.

Busy web servers serving millions of users use methods like caching to reduce the cost of serving pages, such as connection pooling, caching database query results, and caching generated HTML pages to improve speed and efficiency.

Performance monitoring involves tracking metrics like response time, error rates, resource utilization, and uptime to ensure applications meet user expectations and service-level agreements.

Caching at both the server and client side helps boost responsiveness.

## Application Security

### SQL Injection

It's a security vulnerability where attackers insert malicious SQL code into input fields, tricking the database into executing harmful commands like data theft or deletion.
Happens when user inputs are directly concatenated into SQL queries without proper handling.

To avoid SQL injection, prepared statements (also called parameterized queries) are used. Prepared statements separate SQL code from user inputs by using placeholders
```sql
-- wrong way ❌
SELECT * FROM users WHERE username = ' " + userInput + " ';

-- correct way ✅
SELECT * FROM users WHERE username = ?;
-- and binds the user input separately, making it safe.

```

### Cross Site Scripting (XSS)

aka **Cross-Site Request Forgery (XSRF or CSRF)**

A security vulnerability in web applications where attackers inject malicious scripts, usually JavaScript, into trusted websites.
When users visit these compromised sites or pages, the malicious scripts execute in their browsers without their knowledge.
This can lead to attackers stealing sensitive data, such as cookies and session tokens, hijacking user accounts, or carrying out unauthorized actions on behalf of the victim.

There are different types of XSS attacks:
  - **Reflected XSS**: Malicious script is reflected off a web server in response to a user request.

  - **Stored XSS**: The malicious script is permanently stored on the server and executed when users view infected content.

  - **DOM-based XSS**: The vulnerability exists in client-side code, manipulating the Document Object Model in the browser.

To prevent Cross Site Scripting (XSS) attacks:
  - Validate and filter all user inputs strictly.
  - Encode user data before displaying it in web pages.
  - Sanitize or disallow HTML in user inputs.
  - Implement a Content Security Policy (CSP) to restrict script execution.
  - Use security headers to control browser behavior.
  - Keep software updated and use security tools like web application firewalls.

To protect against cross-site attacks.
  - Use HTTP Referer header to confirm requests come from the same site.
  - Use POST, not GET, for actions that change state.
  - Check if request IP matches the IP used during user authentication.


### Password Leakage

Refers to the unauthorized exposure of sensitive password information to attackers.

Can occur through various means such as hacking, phishing, data breaches, weak password practices, or accidental disclosure.

Protecting against password leakage involves strong password policies, multi-factor authentication, and regularly monitoring for breached credentials.


### Application Authentication

A process of verifying the identity of a user or system before granting access to an application. It ensures that only authorized users can access protected resources.

Common used methods for authentication:
  - Password-based authentication
  - Multi-factor authentication (MFA)
  - Token-based authentication
  - OAuth and OpenID Connect
  - Single Sign-On (SSO)


### Single Sign-On

An authentication method that allows users to log in once with a single set of credentials and gain access to multiple, related but independent applications or systems without needing to log in again for each one.

### Application-Level Authorization

The process of controlling user access and permissions within an application based on roles or attributes. After a user is authenticated, authorization determines what actions or resources they are allowed to access.
Common approaches include:
  - Role-Based Authorization
  - Attribute-Based Authorization

Proper authorization ensures data security by preventing unauthorized access and restricting users to actions allowed by their roles or attributes.

### Audit Trails

It's a detailed, chronological record of user activities and system transactions, capturing who did what, when, and where. Provides accountability, transparency, and help detect unauthorized or fraudulent activities.
Audit trails includes:
  - Source and destination of the transaction
  - Date and time of the event
  - User identification
  - Specific details of the transaction



## Encryption

Data encryption is used when database authorization is not enough for protection.
Properties of good encryption technique:
- Be easy for authorized users to encrypt and decrypt data.
- Rely on the secrecy of the encryption key, not the algorithm.
- Make it extremely hard for attackers to find the key.

1. **Symmetric-key encryption**: Uses the same key for both encryption and decryption.
2. **Public-key encryption (asymmetric)**: Uses different keys; the encryption key is public, and the decryption key is kept secret.

### Encryption Algorithms

1. **Data Encryption Standard (DES)**: A symmetric-key encryption that substitutes and rearranges characters based on a secret key shared securely with authorized users. DES uses 64-bit blocks and a 56-bit key across 16 rounds of encryption but is less secure today due to key size limitations.

2. **Advanced Encryption Standard (AES)**: The modern replacement for DES, based on the Rijndael algorithm. AES uses shared secret keys and offers stronger security and efficiency.

3. **Public-Key Encryption**: Each user has a public key for encryption and a private key for decryption. Public keys are openly shared, while private keys remain secret. The encryption is designed such that decrypting with only the public key is practically impossible.

4. **RSA Encryption**: A widely used public-key scheme whose security is based on the difficulty of factoring large numbers.

5. **Hybrid Encryption**: Combines public and private key methods to efficiently encrypt large amounts of data.

6. **Encryption Vulnerabilities**: Small values like identifiers may be vulnerable to dictionary attacks; adding random "salt bits" before encryption ensures different encrypted outputs for the same input, preventing such attacks.

:::note[Dictionary attack]
A type of cyberattack where attackers systematically try likely passwords by using a predefined list of common words, phrases, and known passwords (called a dictionary).
Instead of trying every possible character combination like brute force, dictionary attacks focus on common, easy-to-guess passwords, exploiting human tendencies to choose simple or predictable passwords.
:::

### Encryption in Databases

Databases widely support encryption to protect data.
Encryption can be applied at different levels:
  - **Disk block**: Each disk block encrypted with a key managed by database software; protects data even if disk is accessed.
  - **Relations or attributes**: Only sensitive relations or attributes are encrypted; primary/foreign key attributes cannot be encrypted.

Usually, single master key used to protect multiple encryption/decryption keys stored in database.

Alternatively, encryption/decryption can be done in the application layer before data reaches the database.

### Encryption and Authentication

- Password-based authentication is common but vulnerable to network sniffing.

- **Challenge-response systems** enhance security by avoiding password transmission:
  - Database sends a random challenge.
  - User encrypts and returns it.
  - Database verifies by decrypting the response.
  - Can use public-key encryption where DB encrypts with user’s public key, and user decrypts and returns it.

- **Digital signatures** verify data authenticity:
  - Created by encrypting data with a private key.
  - Verified by decrypting with the corresponding public key.
  - Ensure nonrepudiation, preventing the sender from denying the data creation.

These methods strengthen authentication and data integrity .

## Digital Certificates (CAs)

Digital Certificates are essential for verifying the authenticity of public keys in secure communications.

When communicating with a website, it is important to ensure that the site is genuine and not an imposter.
Digital certificates provides a signed document that verifies the website’s identity.
Browsers trust root-level Certification Authorities (CAs) whose public keys are pre-installed.
Websites get their public key and identity signed by a CA, creating a certificate.
The client verifies the certificate using the CA’s public key.
Certificates can be signed through multiple CA levels, forming a trust hierarchy.

This model ensures secure and trusted web communication.

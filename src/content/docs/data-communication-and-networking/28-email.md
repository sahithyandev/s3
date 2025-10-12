---
title: Email
sidebar:
  order: 28
slug: data-communication-and-networking/email
prev: true
next: true
---

Used to send and receive messages over the network. Receiver can be one or more users. Reliable. Low-cost. Fast. Asynchronous. Bi-directional. Open standard. Can be encrypted. Can be signed.

## Eamil Format

Defined by RFC 822.

### Envelope

Includes delivery information such as recipients, priority and security information.


### Headers

Contain information about the message.

Examples:
- From - sender's name and email address. set by the sender and cannot be relied upon.
- To -  Contains name and address of expected recipient(s). May be different from the envelope “To” header.
- Cc – Names and addresses of secondary recipients.
- Subject - Generally appears on list of received messages
- Date - Date and time the message was sent. Inserted automatically by e-mail software.
- Message-Id - A Unique string to identify this message
- Received – A set of “postmarks” inserted by each mail server through which the message travels. Useful in debugging and identifying forged messages.

### Body

The message itself (generally text).

### Attachments
Contain additional files or data related to the email message.

## Email Address

Recipients are identified by their email addresses. Each email address corresponds to a mailbox, which is managed by an SMTP server.

### Format

An email address consists of two parts separated by an `@` symbol:

- Mailbox name: The part before the `@` symbol. Can contain letters, numbers, dots (`.`), hyphens (`-`), and underscores (`_`). May be case sensitive but is often not.
- Mailserver name: The part after the `@` symbol. Represents the domain name of the SMTP server. Case insensitive.

## Structure

### Mail Client

Aka. user agent, mail reader. A device/program that allows users to send and receive email messages. Provides a user interface for composing and sending emails, as well as for reading and managing received emails. Configured with an MTA, probably using email address and password.

Uses SUBMIT protocol to send email to MTA. 

User can access their emails by directly signing into the mail server or using a mail retrieval protocol such as POP3 or Interactive Mail Access Protocol (IMAP).

### Mail Gateway

Aka. MTA. Receives email from a mail client or another mail gateway. May store a temporary sending queue if destination MTA is unavailable. May include spam filtering and virus scanning. May handle mailing lists. Mostly authenticates users. May use TLS to secure data.

The gateway looks up the domain name in the DNS. A MX record specifies the mail server responsible for handling email for a domain. Can have multiple MX records with different priorities, indicating the order in which mail servers should be tried.

:::note

Outgoing email messages may be scanned to detect and prevent the transmission of spam, malware, or sensitive information. Scanning helps protect recipients from harmful content and ensures compliance with organizational policies or legal regulations. It also helps maintain the reputation of the sending mail server by reducing the risk of being blacklisted for distributing unwanted or malicious emails.

:::

### Mailbox

Stores email messages received by the mail server. Each mailbox is associated with a specific email address.

## Mailing List

An email address specifies a special mailbox called the _list manager_.

List manager sends copies of message to each address on the list. Sender does not need to know the list of recipients.

## Protocols

### SMTP Protocol

Short for Simple Mail Transfer Protocol. A standard protocol used for sending and receiving email messages. It operates at the application layer. Responsible for transferring email messages between mail servers. Employs a client-server model. Simple. Easy to implement.

Follows command-response structure. Commands are 4 letter codes.

### POP3

A mail retrieval protocol that allows users to download email messages from a mail server to their local device.

### IMAP

An email access protocol that allows users to access and manage email messages on a mail server from multiple devices and applications.
 
More powerful than POP. Can store mail folders on the mail server. Can retrieve messages or parts of messages. Suitable for mobile users and over LAN, dial-up networks. Slower to access folders.

### MIME

Aka. Multipurpose Internet Mail Extension. Extension to RFC 822. Designed to handle binary files as SMTP initially didn't. Most SMTP implementations now can.

MIME defines a standard for encoding binary data into text format, allowing it to be transmitted over SMTP.

Introduces five new message header fields:
- MIME version
- Content type: Included in the format: `type/subtype; <parameters>`
  - text/plain – plain text
  - text/html – HTML-formatted text
  - image/jpeg – JPEG images
  - image/png – PNG images
  - application/pdf – PDF documents
  - application/msword – Microsoft Word documents
  - application/zip – ZIP archives
  - audio/mpeg – MP3 audio files
  - video/mp4 – MP4 video files
- Content transfer encoding
- Content Id
- Content Description

## Authentication

### SPF

Aka. Sender Policy Framework. Special DNS records specify IP addresses of machines authorized to send mail for a particular domain (reverse MX).  Designed to protect the envelope sender (return path). Receiver MTA checks SPF and may reject or mark as spam.

### DKIM

Aka. DomainKeys Identified Mail. Special DNS records specify public keys for a domain. Receiver MTA checks DKIM and may reject or mark as spam.

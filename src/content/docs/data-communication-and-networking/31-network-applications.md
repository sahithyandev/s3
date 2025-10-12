---
title: Network Applications
sidebar:
  order: 31
slug: data-communication-and-networking/network-applications
prev: true
next: true
---

## Storage

Files can be stored on a server in the network and accessed by clients. The server client may be integrated into the user interface to provide a seamless experience.

### FTP

Short for File Transfer Protocol. A standard network protocol used for transferring files between a client and server on a computer network. Uses TCP/IP. Uses 2 connections:
- Control connection - TCP on port 21
- Data connection - TCP on port 20

Authentication is supported using username and password.

Some FTP commands:
- USER <username> - User identification
- PASS <password> - Password for access
- LIST – List the files in the current remote dir
- RETR (or GET) <filename> - Retrieve file
- STOR (or PUT) <filename> - Upload a file to remote host

### SFTP

Short for Secure FTP. Transfers files over TLS. Can use GUI interface.

### NFS

Short for Network File System. Aka. Network Attached Storage, NAS. Allows users to access files on a remote server as if they were local files.

A set of files and folders are defined as a file system. A server can share one or more file systems. Clients can mount file system(s) as a drive. File operations are sent to the server to be performed.

###  Storage-Area Network

Storage is accessed at block level instead of at file level. High performance. Storage is shared among servers.

### Internet Storage

Storing files on the internet, as a backup or for storage space. May use WebDAV protocol.

## Domain Name System

A system to map hostnames to IP addresses. Hierarchical structure. Distributed. Translates hostnames to IP addresses, IP addresses to hostnames and hostnames to their metadata. DNS name resolution is iterative.

Hosts on the internet are identified by IP addresses. But numeric IP addresses are not human friendly. Thus, alphanumeric hostnames are used.

Initially a file (/etc/hosts) was used for this purpose. However, as the network grew it was difficult to update
the hosts file in every host.

### Name Server

A server that provides DNS services. It translates hostnames to IP addresses and vice versa.

- Authoritative DNS servers   
  Organization’s DNS servers, providing authoritative hostname to IP mappings for organization’s servers (e.g., Web and mail). Can be maintained by organization or service provider.
- Local DNS servers   
  Aka. Default DNS servers. Owned by ISPs. Acts as a cache and proxy.

## P2P

An alternative to server-client model. Any device can act as a server or a client. All peers have equal status.

Used for distributed services, file sharing, instant messaging, online gaming and more. Decentralized file sharing is a popular use case.

### BitTorrent Protocol

An efficient content distribution system using _file swarming_. Usually does not perform all the functions of a typical p2p system, like searching. Files are shared in small pieces.

To share a file or group of files, a peer creates a `.torrent` file. The file contains:
- metadata about the files to be shared
- information about the _tracker_, the computer that coordinates the file distribution

Peers first obtain a `.torrent` file, and then connect to the specified tracker, which tells them from which other peers to download the pieces of the file.

Terminology:
- Peer: A device that participates in a peer-to-peer network.
- Seeder: a peer that provides the complete file.
- Initial seeder: a peer that provides the initial copy.
- Tracker: a computer that coordinates the file distribution.
- Leecher: a peer that downloads the file from other peers.

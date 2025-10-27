---
title: Authorization
sidebar:
  order: 14
slug: database-systems/basics/authorization
prev: true
next: false
---

Refers to the process of determining what actions a user or application is permitted to perform on database objects such as tables, views, or procedures.

When a user connects to a SQL database, their identity is authenticated (verified), and then the database checks what operations they are authorized to perform. These operations can be:

- reading data (SELECT)
- modifying data (INSERT, UPDATE, DELETE)
- executing stored procedures
- altering the structure of the database (CREATE, DROP, ALTER)

Privileges are typically granted to users or roles by a database administrator or another user with sufficient authority. For example, a user might be granted permission to SELECT from a table but not to DELETE from it. Privileges can be very granular, applying to specific columns within a table or to entire schemas.

## GRANT

The process of granting privileges involves explicit commands, such as the GRANT statement in SQL. For example, to allow a user named alice to read data from the employees table, an administrator might execute:

```sql
GRANT SELECT ON employees TO alice;
```

The grantor of the privilege must already hold the required privileges on the specified item (or be the database administrator).

If a user is granted a previlege using `WITH GRANT OPTION`, they can grant the same previlege to another user.

Granting a privilege on a view does not imply granting any privileges on the underlying relations.

## REVOKE

Used to remove previously granted privileges.

```sql
REVOKE SELECT ON employees FROM alice;
```

If the same privilege was granted twice to the same user by different grantees, the user may retain the privilege after the revocation.

All privileges that depend on the privilege being revoked are also revoked.

Revoking a privilege from a user who has granted it to others can lead to cascading revocations, depending on the database system's implementation.

## Roles

Named groups of privileges that can be assigned to users or to other roles. Instead of granting privileges directly to individual users, a database administrator can grant privileges to a role and then assign that role to users.

For example, a role called `report_reader` might be granted SELECT privileges on reporting tables. Any user who is assigned the `report_reader` role will automatically inherit those privileges:

```sql
CREATE ROLE report_reader;
GRANT SELECT ON reports TO report_reader;
GRANT report_reader TO bob;
```

Roles can be hierarchical, meaning a role can be granted to another role, allowing for flexible and scalable privilege management. Revoking a role from a user removes all privileges that were inherited through that role.

Some database systems provide built-in roles with predefined privileges, such as `db_owner` or `read_only`. The specific syntax and capabilities of roles may vary between database systems.

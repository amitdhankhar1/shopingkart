# praparing the database
do the following as root
```sql
create database shopdb;
create user shoper identified by 'shoppass';
use shopdb;
 grant all privileges on shopdb to shopper;
  grant all privileges on shopdb.* to shopper;
  ```
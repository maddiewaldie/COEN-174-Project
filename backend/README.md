### Setup

Create Tables:

```
$ mysql -u USERNAME --password=PASSWORD DATABASE < sql/create_account_table.sql
$ mysql -u USERNAME --password=PASSWORD DATABASE < sql/create_task_table.sql
```

### Initialization

1. Insert appropriate login information in `config.php`
2. If not running a web server, start a PHP server (example port number: 9001):

```
$ php -S localhost:<port number>
```

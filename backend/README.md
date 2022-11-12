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

---

## Documentation

### Database Schema

The SQL database consists of the following tables:

#### Accounts

| Field    | Type             | Null | Key | Default | Extra          |
|----------|------------------|------|-----|---------|----------------|
| account_id       | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
| username     | varchar(256)     | NO   | UNI | NULL    |                |
| password | varchar(32)      | NO   |     | NULL    |                |

#### Tasks

| Field      | Type             | Null | Key | Default | Extra          |
|------------|------------------|------|-----|---------|----------------|
| task_id    | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
| account_id | int(10) unsigned | NO   | MUL | NULL    |                |
| task_name | varchar(256)     | NO   |     | NULL    |                |
| category   | varchar(256)     | NO   |     | NULL    |                |
| deadline   | date             | NO   |     | NULL    |                |
| priority   | varchar(32)          | NO   |     | NULL    |               |
| completed   | tinyint(1)          | NO   |     | 0    |               |

### Endpoint Body Guide

- This documentation is to give frontend a good idea of the JSON body that should be passed to different endpoint functions
- Legend
	- Replace `BOOL` with an approrpiate boolean value
		- **Important**: this should be an integer value (0 -> false, 1 -> true)
	- Replace `DATE` with an appropriate date value
	- Replace `INT` with an appropriate integer value
	- Replace `STRING` with an appropriate string value
	- If a line starts with `OPTIONAL`, it means that the value declared there is optional

### `create_account`

```JSON
{
	"type": "create_account",
	"params": {
		"username": STRING,
		"password": STRING
	}
}
```

- Create an account with the following credentials:
	- username = value of field `username`
	- password = value of field `password`

### `create_task`

```JSON
{
	"type": "create_task",
	"params": {
		"account_id": INT
		"task_name": STRING,
		"category": STRING,
		"deadline": DATE,
		"priority": STRING
	}
}
```

- Create a task with the following values:
	- account_id = value of field `account_id`
	- tasks_name = value of field `tasks_name`
	- category = value of field `category`
	- deadline = value of field `deadline`
	- priority = value of field `priority`

### `delete_account`

```JSON
{
	"type": "delete_account",
	"params": {
		"account_id": INT
	}
}
```

- Delete the account in the database where:
	- account_id = value of field `account_id`
- (This also deletes all of this user's tasks)

### `delete_task`

```JSON
{
	"type": "delete_task",
	"params": {
		"task_id": INT
	}
}
```

- Delete the task in the database where:
	- task_id = value of field `task_id`

### `get_tasks_from_user_id`

```JSON
{
	"type": "get_tasks_from_user_id",
	"params": {
		"account_id": INT
	}
}
```

- Return a JSON containing all task_ids where account_id = value of field `account_id`

### `get_user_id`

```JSON
{
	"type": "get_user_id",
	"params": {
		"username": STRING,
		"password": STRING
	}
}
```

- Return a JSON containing the id corresponding to the account whose username = value of field `username` AND whose password = value of field `password`

### `update_account`

- One or more of the `OPTIONAL` fields must be included

```JSON
{
	"type": "update_account",
	"params": {
		"account_id": INT,
		OPTIONAL "username": STRING,
		OPTIONAL "password": STRING
	}
}
```

- Update the account of the user identified by account_id = value of field `account_id`
	- Update this user's username to the value of field `username`
	- Update this user's password to the value of field `password`

### `update_task`

- One or more of the `OPTIONAL` fields must be included

```JSON
{
	"type": "update_task",
	"params": {
		"task_id": INT,
		OPTIONAL "account_id": INT,
		OPTIONAL "task_name": STRING,
		OPTIONAL "category": STRING,
		OPTIONAL "deadline": DATE,
		OPTIONAL "priority": STRING,
		OPTIONAL "completed": BOOL
	}
}
```

- Update the task identified by task_id = value of field `task_id`
	- Update this task's account_id to the value of field `account_id`
	- Update this task's tasks_name to the value of field `tasks_name`
	- Update this task's category to the value of field `category`
	- Update this task's deadline to the value of field `deadline`
	- Update this task's priority to the value of field `priority`
	- Update this task's completed to the value of field `completed`

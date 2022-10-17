CREATE TABLE Tasks(
	task_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	account_id INT UNSIGNED NOT NULL,
	tasks_name VARCHAR(256) NOT NULL,
	category VARCHAR(256) NOT NULL,
	deadline DATE NOT NULL,
	priority INT NOT NULL,
	FOREIGN KEY (account_id) REFERENCES Accounts(id),
	PRIMARY KEY(task_id)
);

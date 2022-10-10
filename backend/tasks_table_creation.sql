CREATE TABLE task(
	id INT NOT NULL,
	tasks_name VARCHAR(256) NOT NULL,
	category VARCHAR(256) NOT NULL,
	deadline DATE NOT NULL,
	priority INT NOT NULL,
	PRIMARY KEY(id)
);

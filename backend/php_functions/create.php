<?php 

include 'config.php';

// error would be empty submissions
function create_account($json_hash) {
	GLOBAL $db;
	$valid = true; //set to false if new account cannot be added
	$name = "";
	$password = "";
	$queries = [];

	// list of fields that must not be null
	$fields = [
		"name",
		"password"
	];

	// check validity of json
	foreach($fields as $f) {
		if(!$json_hash[$f]) {
			print "Error: $f cannot be null <br>";
			$valid = false;
		}
	}
	if(!$valid) {
		print "Query body has one or more errors <br>";
		return;
	}

	$name = mysqli_real_escape_string($db, $json_hash['name']);
	$password = mysqli_real_escape_string($db, $json_hash['password']);

	array_push(
		$queries,
		"INSERT INTO Accounts(name,password) VALUES('$name', '$password')" 
	);

	return $queries;
}

function create_task($json_hash){
	GLOBAL $db;
	$valid = true;
	$account_id = "";
	$tasks_name = "";
	$category = "";
	$deadline = "";
	$priority = "";
	$queries = [];

	// list of fields that must not be null
	$fields = [
		"account_id",
		"tasks_name",
		"category",
		"deadline",
		"priority"
	];

	// check validity of json
	foreach($fields as $f) {
		if(!$json_hash[$f]) {
			print "Error: $f cannot be null <br>";
			$valid = false;
		}
	}
	if(!$valid) {
		print "Query body has one or more errors <br>";
		return;
	}
		
	$account_id = mysqli_real_escape_string($db, $json_hash['account_id']);
	$tasks_name = mysqli_real_escape_string($db, $json_hash['tasks_name']);
	$category = mysqli_real_escape_string($db, $json_hash['category']);
	$deadline = mysqli_real_escape_string($db, $json_hash['deadline']);
	$priority = mysqli_real_escape_string($db, $json_hash['priority']);

	array_push(
		$queries,
		"INSERT INTO Tasks(account_id, tasks_name,category,deadline,priority) Values('$account_id','$tasks_name', '$category', '$deadline', '$priority')" //TODO cleanup redundancy with $fields loop
	);

	return $queries;
}

?>

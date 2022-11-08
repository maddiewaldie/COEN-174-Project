<?php

include "config.php";

function get_user_id($json_hash) {
	GLOBAL $db;
	$valid = true; //set to false if required fields are not passed
	$queries = [];

	$name = "";
	$password = "";

	// list of fields that must not be null
	$field = [
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

	$name     = mysqli_real_escape_string($db, $json_hash['name']);
	$password = mysqli_real_escape_string($db, $json_hash['password']);

	// Create queries
	array_push($queries, "SELECT id FROM Accounts WHERE name = '$name' AND password = '$password'");

	return $queries;
}

function get_tasks_from_user_id($json_hash) {
	GLOBAL $db;
	$valid = true; //set to false if required fields are not passed
	$queries = [];

	$account_id = "";

	// list of fields that must not be null
	$field = [
		"account_id"
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

	// Create queries
	array_push($queries, "SELECT task_id FROM Tasks WHERE account_id = '$account_id'");

	return $queries;
}

?>

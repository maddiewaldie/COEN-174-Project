<?php

include "config.php";

function get_id($json_hash) {
	GLOBAL $db;
	$queries = [];

	$name = "";
	$password = "";

	// Quit out if username is not passed
	if(!$json_hash['name']) {
		print "Error: missing name<br>";
		return "";
	}

	// Quit out if password is not passed
	if(!$json_hash['password']) {
		print "Error: missing password<br>";
		return "";
	}

	$name     = mysqli_real_escape_string($db, $json_hash['name']);
	$password = mysqli_real_escape_string($db, $json_hash['password']);

	// Create queries
	array_push($queries, "SELECT id FROM Accounts WHERE name = '$name' AND password = '$password'");

	return $queries;
}

?>

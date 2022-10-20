<?php

include "config.php";

// globals
$queries = []; //list of queries to be run

function update_account($json_hash) {
	GLOBAL $db;
	$need_update = false; //set to true if at least one of the fields is set
	$update_query = "";

	// list of fields (excluding id)
	$fields = [
		"name",
		"password"
	];

	// Quit out if id is not passed
	if(!$json_hash['id']) {
		print "Error: Missing id to update<br>";
		return "";
	}

	// Check if anything is passed to update
	foreach($fields as $f) {
		if(array_key_exists($f, $json_hash)) {
			$need_update = true;
			break;
		}
	}
	if(!$need_update) {
		print "Error: Missing field(s) to update<br>";
		return;
	}

	// Build query
	$update_query .= "UPDATE Accounts SET";
	foreach($fields as $f) {
		if(array_key_exists($f, $json_hash)) {
			$json_hash[$f] = mysqli_real_escape_string($db, $json_hash[$f]);
			$update_query .= " $f = '" . $json_hash[$f] . "',";
		}
	}
	$update_query = rtrim($update_query, ","); //remove trailing comma
	$update_query .= " WHERE id = " . $json_hash['id'];

	// Push query
	array_push($GLOBALS['queries'], $update_query);
}

function update_task($json_hash) {
	GLOBAL $db;
	$need_update = false; //set to true if at least one of the fields is set
	$update_query = "";

	// list of fields (excluding task_id)
	$fields = [
		"account_id",
		"tasks_name",
		"category",
		"deadline",
		"priority"
	];


	// Quit out if task id is not passed
	if(!$json_hash['task_id']) {
		print "Error: Missing task_id to update<br>";
		return;
	}

	// Check if anything is passed to update
	foreach($fields as $f) {
		if(array_key_exists($f, $json_hash)) {
			$need_update = true;
			break;
		}
	}
	if(!$need_update) {
		print "Error: Missing field(s) to update<br>";
		return;
	}

	// Build query
	$update_query .= "UPDATE Tasks SET";
	print "$update_query<br>";
	foreach($fields as $f) {
		if(array_key_exists($f, $json_hash)) {
			$json_hash[$f] = mysqli_real_escape_string($db, $json_hash[$f]);
			$update_query .= " $f = '" . $json_hash[$f] . "',";
		}
	}
	$update_query = rtrim($update_query, ","); //remove trailing comma
	$update_query .= " WHERE task_id = " . $json_hash['task_id'];

	// Push query
	array_push($GLOBALS['queries'], $update_query);
}

// Get query based off request type
switch($_REQUEST['type']) {
	case "update_account":
		update_account(json_decode($_REQUEST['body'], true));
		break;
	case "update_task":
		update_task(json_decode($_REQUEST['body'], true));
		break;
	default:
		print "Unknown request type \"" . $_REQUEST['type'] . "\"<br>";
		exit(1);
}

// Attempt to execute query(s) on database
foreach($queries as $q) {
	if(mysqli_query($db, $q)) print "Query \"$q\" succeeded<br>";
	else {
		print "Query \"$q\" failed: " . mysqli_error($db) . "<br>";
		exit(1);
	}
}

mysqli_close($db);

?>

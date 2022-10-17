<?php

include "config.php";

// globals
$queries = []; //list of queries to be run

function update_task($json_hash) {

	// Quit out if task id is not passed
	if(!$json_hash['task_id']) {
		print "Error: Missing task_id to update<br>";
		return;
	}

	// Create query
	array_push(
		$GLOBALS['queries'],
		"UPDATE Tasks SET tasks_name = '" . $json_hash['tasks_name'] . 
		"', category = '" . $json_hash['category'] . 
		"', deadline = '" . $json_hash['deadline'] . 
		"', priority = "  . $json_hash['priority'] .
		" WHERE task_id = " . $json_hash['task_id']
	);
}

function update_account($json_hash) {
	// Quit out if id is not passed
	if(!$json_hash['id']) {
		print "Error: Missing id to update<br>";
		return "";
	}

	// Create query
	array_push(
		$GLOBALS['queries'], 
		"UPDATE Accounts SET name = '" . $json_hash['name'] . 
		"', password = '" . $json_hash['password'] . 
		"' WHERE id = " . $json_hash['id']
	);
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

?>

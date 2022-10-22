<?php

include "config.php";

// globals
$queries = []; //list of queries to be run

function delete_task($json_hash) {
	// Quit out if task id is not passed
	if(!$json_hash['task_id']) {
		print "Error: Missing task_id for deletion<br>";
		return;
	}

	// Create query
	array_push($GLOBALS['queries'], "DELETE FROM Tasks WHERE task_id = " . $json_hash['task_id']);
}

function delete_account($json_hash) {
	// Quit out if id is not passed
	if(!$json_hash['id']) {
		print "Error: Missing id for deletion<br>";
		return "";
	}

	// Create queries
	array_push($GLOBALS['queries'], "DELETE FROM Tasks WHERE account_id = " .$json_hash['id']); //delete all the tasks this account had created
	array_push($GLOBALS['queries'], "DELETE FROM Accounts WHERE id = " . $json_hash['id']);
}

// Get query based off request type
switch($_REQUEST['type']) {
	case "delete_account":
		delete_account(json_decode($_REQUEST['body'], true));
		break;
	case "delete_task":
		delete_task(json_decode($_REQUEST['body'], true));
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

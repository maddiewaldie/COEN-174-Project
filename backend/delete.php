<?php

include "config.php";

// globals
$queries = []; //list of queries to be run

function delete_account($json_hash) {
	GLOBAL $db;
	$id = "";

	// Quit out if id is not passed
	if(!$json_hash['id']) {
		print "Error: Missing id for deletion<br>";
		return "";
	}

	$id = mysqli_real_escape_string($db, $json_hash['id']);

	// Create queries
	array_push($GLOBALS['queries'], "DELETE FROM Tasks WHERE account_id = '$id'"); //delete all the tasks this account had created
	array_push($GLOBALS['queries'], "DELETE FROM Accounts WHERE id = '$id'");
}

function delete_task($json_hash) {
	GLOBAL $db;
	$task_id = "";

	// Quit out if task id is not passed
	if(!$json_hash['task_id']) {
		print "Error: Missing task_id for deletion<br>";
		return;
	}

	$task_id = mysqli_real_escape_string($db, $json_hash['task_id']);

	// Create query
	array_push($GLOBALS['queries'], "DELETE FROM Tasks WHERE task_id = '$task_id'");
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

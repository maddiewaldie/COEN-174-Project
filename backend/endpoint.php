<?php

include 'config.php';
include 'php_functions/create.php';
include 'php_functions/delete.php';
include 'php_functions/get.php';
include 'php_functions/update.php';

// globals
$queries;
$return_response = false; //set to true if get request
$res = ""; //hold responses
$responses = [];
$body = json_decode(file_get_contents('php://input'), true);

// Get query based off request type
switch($body['type']) {
	case "create_account":
		$queries = create_account($body);
		break;
	case "create_task":
		$queries = create_task($body);
		break;
	case "delete_account":
		$queries = delete_account($body);
		break;
	case "delete_task":
		$queries = delete_task($body);
		break;
	case "get_tasks_from_user_id":
		$queries = get_tasks_from_user_id($body);
		$return_response = true;
		break;
	case "get_user_id":
		$queries = get_user_id($body);
		$return_response = true;
		break;
	case "update_account":
		$queries = update_account($body);
		break;
	case "update_task":
		$queries = update_task($body);
		break;
	default:
		print "Error: Unknown request type \"" . $body['type'] . "\"<br>";
		exit(1);
}

// Check that queries is an array
if(gettype($queries) != "array") {
	print "Error: queries could not be processed: " . var_dump($queries);
	exit(1);
}

// Attempt to execute query(s) on database
foreach($queries as $q) {
	if($res = mysqli_query($db, $q)) {
		if(!$return_response) print "Query \"$q\" succeeded<br>";
		array_push($responses, mysqli_fetch_all($res));
	}
	else {
		print "Error: Query \"$q\" failed: " . mysqli_error($db) . "<br>";
		exit(1);
	}
}

if($return_response) {
	foreach($responses as $r) {
		print json_encode($r);
	}
}

mysqli_close($db);

?>

<?php 

include 'config.php';

// globals
$queries = [];
$body = json_decode(file_get_contents('php://input'), true);

// error would be empty submissions
function create_account($json_hash) {
	GLOBAL $db;
	$valid = true; //set to false if new account cannot be added
	$name = "";
	$password = "";

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
		$GLOBALS['queries'],
		"INSERT INTO Accounts(name,password) VALUES('$name', '$password')" //TODO cleanup redundancy with $fields loop
	);
}

function create_task($json_hash){
	GLOBAL $db;
	$valid = true;
	$account_id = "";
	$tasks_name = "";
	$category = "";
	$deadline = "";
	$priority = "";

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
		$GLOBALS['queries'],
		"INSERT INTO Tasks(account_id, tasks_name,category,deadline,priority) Values('$account_id','$tasks_name', '$category', '$deadline', '$priority')" //TODO cleanup redundancy with $fields loop
	);

}

// Get query based off request type
// TODO remove arguments for functions, formalize across all of backend
switch($body['type']) {
	case "create_account":
		create_account($body);
		break;
	case "create_task":
		create_task($body);
		break;
	default:
		print "Error: Unknown request type \"" . $_REQUEST['type'] . "\"<br>";
		exit(1);
}

// Attempt to execute query(s) on database
foreach($queries as $q) {
	if(mysqli_query($db, $q)) print "Query \"$q\" succeeded<br>";
	else {
		print "Error: Query \"$q\" failed: " . mysqli_error($db) . "<br>";
		exit(1);
	}
}

mysqli_close($db);

?>

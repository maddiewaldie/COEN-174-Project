<?php

$hostname = "localhost"; #Change to IP if connecting to remote database
$username = 'USERNAME';
$password = '';          #Leave blank for no password
$database = 'DATABASE';

$db = mysqli_connect(
	"$hostname",
	"$username",
	"$password",
	"$database"
)

?>

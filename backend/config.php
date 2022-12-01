<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");

$hostname = "localhost"; #Change to IP if connecting to remote database
$username = 'tino';
$password = 'abcd1234';          #Leave blank for no password
$database = 'COEN174';

$db = mysqli_connect(
	"$hostname",
	"$username",
	"$password",
	"$database"
)

?>

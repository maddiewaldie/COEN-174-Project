**************************************************************************
    Program establishes connection with account table within server to obtain
    account_id of a specific user based on user credentials

Current Version:
    - obtains the one account within the database
    - directs user to task creation 

Next Version:
    - add method of credential intake 

    - add method of verification by matching credentials to entries on the table 
        (i.e name and password searched within the table to obtain the 
        corresponding account id)
        (could include more unique identifiers like email, unique username, etc.)
    
**************************************************************************
<?php

    $hostname = "localhost";
    $username = "USERNAME";
    $password = '';
    $database = 'DATABASE';
    //connects to database
    $conn = mysqli_connect($hostname, $username, $password, $database);

    //check connection
    if(!$conn){
        echo 'Connection Error:' . mysqli_connect_error();
    }
?>
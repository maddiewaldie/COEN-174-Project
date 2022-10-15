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
    //connects to database
    $conn = mysqli_connect('localhost', 'root', '9204Alex', 'coen146');

    //check connection
    if(!$conn){
        echo 'Connection Error:' . mysqli_connect_error();
    }

    session_start();

    $sql = 'SELECT account_id FROM accounts';

    $result = mysqli_query($conn, $sql);

    if(mysqli_num_rows($result) > 0)
    {
        while($row = mysqli_fetch_assoc($result)){
            $_SESSION['account_id']= $row['account_id'];
        }
    }else{
        echo '0 results';
    }

    if($_SESSION['account_id'])
    {
        header('Location: create_task.php');
    }

?>
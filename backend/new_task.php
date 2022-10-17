**************************************************************************
    Program takes in argument from the front-end interface along with the corresponding account_id 
    obtained from the db_connect file and stores the entries to the corresponding columns in the 
    tasks table within the server
    
**************************************************************************

<?php 

$errors = array('tasks_name'=>'', 'category'=>'', 'deadline'=>'', 'priority'=>'');

function new_task($json_hash){

    $account_id = $json_hash['account_id'];

    //connection
    include('connect.php');


    $tasks_name = $category = '';
    $deadline = '0000-00-00';
    $priority = 0;

    //error would be empty submissions
    

    //checks if task_name entered is empty
    if(empty($json_hash['tasks_name'])){
        $errors['tasks_name']='A Task Name is required <br />';
    } else {
        //user provided task name stored in variable $task_name
        $tasks_name = $json_hash['tasks_name'];
    }

    if(empty($json_hash['category'])){
        $errors['category']='A Category is required <br />';
    } else {
        //user provided categrory stored in variable $category
        $category = $json_hash['category'];
    }

    if(empty($json_hash['deadline'])){
        $errors['deadline']='A Deadline is required <br />';
    } else {
        //user provided deadline stored in variable $deadline
        $deadline = $json_hash['deadline'];
    }

    if(empty($json_hash['priority'])){
        $errors['priority']='A Priority is required <br />';
    } else {
        //user provided priority stored in variable $priority
        $priority = $json_hash['priority'];
    }

    //returns false when we don't have any errors
    if(array_filter($errors)){
        //if true
        echo 'One or More Areas Empty';
    }else{

        
        $task_name = mysqli_real_escape_string($conn, $json_hash['tasks_name']);
        $category = mysqli_real_escape_string($conn, $json_hash['category']);
        $deadline = mysqli_real_escape_string($conn, $json_hash['deadline']);
        $priority = mysqli_real_escape_string($conn, $json_hash['priority']);

        $sql = "INSERT INTO tasks(account_id, tasks_name,category,deadline,priority) Values('$account_id','$tasks_name', '$category', '$deadline', '$priority')";

    }
    mysqli_close($conn);
}
?>

**************************************************************************
    Program takes in argument from the front-end interface along with the corresponding account_id 
    obtained from the db_connect file and stores the entries to the corresponding columns in the 
    tasks table within the server
    
**************************************************************************

<?php 

session_start();

$account_id = $_SESSION['account_id'];

//connection
$conn = mysqli_connect('localhost', 'root', 'password', 'database');

//check connection
if(!$conn){
    echo 'Connection Error:' . mysqli_connect_error();
}

//may need to use sessions to connect to specific account

$tasks_name = $category = '';
$deadline = '0000-00-00';
$priority = 0;

//error would be empty submissions
$errors = array('tasks_name'=>'', 'category'=>'', 'deadline'=>'', 'priority'=>'');

if(isset($_POST['submit'])){

    //checks if task_name entered is empty
    if(empty($_POST['tasks_name'])){
        $errors['tasks_name']='A Task Name is required <br />';
    } else {
        //user provided task name stored in variable $task_name
        $tasks_name = $_POST['tasks_name'];
    }

    if(empty($_POST['category'])){
        $errors['category']='A Category is required <br />';

    } else {
        //user provided categrory stored in variable $category
        $category = $_POST['category'];
    }

    if(empty($_POST['deadline'])){
        $errors['deadline']='A Deadline is required <br />';
    } else {
       //user provided deadline stored in variable $deadline
       $deadline = $_POST['deadline'];
    }

    if(empty($_POST['priority'])){
        $errors['priority']='A Priority is required <br />';
    } else {
        //user provided priority stored in variable $priority
        $priority = $_POST['priority'];
    }

    //returns false when we don't have any errors
    if(array_filter($errors)){
        //if true
        echo 'One or More Areas Empty';
    }else{

        $task_name = mysqli_real_escape_string($conn, $_POST['tasks_name']);
        $category = mysqli_real_escape_string($conn, $_POST['category']);
        $deadline = mysqli_real_escape_string($conn, $_POST['deadline']);
        $priority = mysqli_real_escape_string($conn, $_POST['priority']);

        $sql = "INSERT INTO tasks(account_id, tasks_name,category,deadline,priority) Values('$account_id','$tasks_name', '$category', '$deadline', '$priority')";

        //save to db and check
        if(mysqli_query($conn, $sql)){
            //success
            //if false (no errors) redirects to new submission page 
            header('Location:create_task.php');
        } else{
            echo 'query error: ' . mysqli_error($conn);
        }

    }

}

session_commit();
mysqli_close($conn);

?>

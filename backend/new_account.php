<?php 

//change password and database accordingling
$conn = mysqli_connect('localhost', 'root', 'password', 'database');

//check connection
if(!$conn){
    echo 'Connection Error:' . mysqli_connect_error();
}


$name = $password = '';

//error would be empty submissions
$errors = array('name'=>'', 'password'=>'');

if(isset($_POST['submit'])){

    //checks if name entered is empty
    if(empty($_POST['name'])){
        $errors['name']='A Name is required <br />';
    } else {
        //user provided name stored in variable $name
        $name = $_POST['name'];
    }

    if(empty($_POST['password'])){
        $errors['password']='A Password is required <br />';

    } else {
        //user provided password stored in variable $password
        $password = $_POST['password'];
    }

    //returns false when we don't have any errors
    if(array_filter($errors)){
        //if true
        echo 'One or More Areas Empty';
    }else{

        $name = mysqli_real_escape_string($conn, $_POST['name']);
        $password = mysqli_real_escape_string($conn, $_POST['password']);

        $sql = "INSERT INTO accounts(name,password) Values('$name', '$password')";

        //save to db and check
        if(mysqli_query($conn, $sql)){
            //success
            //if false (no errors) redirects to new submission page 
            header('Location:new_account.php');
        } else{
            echo 'query error: ' . mysqli_error($conn);
        }

    }

}

?>
<?php 

//change password and database accordingling
include('connect.php');

$errors = array('name'=>'', 'password'=>'');

$name = $password = '';

function new_account($json_hash)
{
//error would be empty submissions

    //checks if name entered is empty
    if(empty($json_hash['name'])){
        $errors['name']='A Name is required <br />';
    } else {
        //user provided name stored in variable $name
        $name = $json_hash['name'];
    }

    if(empty($json_hash['password'])){
        $errors['password']='A Password is required <br />';

    } else {
        //user provided password stored in variable $password
        $password = $json_hash['password'];
    }

    //returns false when we don't have any errors
    if(array_filter($errors)){
        //if true
        echo 'One or More Areas Empty';
    }else{

        $name = mysqli_real_escape_string($conn, $json_hash['name']);
        $password = mysqli_real_escape_string($conn, $json_hash['password']);

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
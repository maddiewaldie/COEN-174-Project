<?php

$passed = $failed = 0;


#---------------testing for database connection----------------- 
include 'config.php';
echo "Connection: Successful";


#-----------------------account creation check ---------------------#
include 'php_functions/create.php';

#normal user
$user1 = array(
    $username = "Bob",
    $password = "123abc",   
);

$user1_json = json_encode($user1);
$acc_create_test = create_account($user1_json);
if($acc_create_test){
    $passed++;
}
else{
    $failed++;
}

#unexpected field
$user2 = array(
    $username = "#fn4%&",
    $password = "234hbbtg",   
);

$user2_json = json_encode($user2);
$acc_create_test = create_account($user2_json);
if($acc_create_test){
    $passed++;
}
else{
    $failed++;
}

#missing field
$user3 = array(
    $username = "",
    $password = "234hbbtg",   
);

$user3_json = json_encode($user3);
$acc_create_test = create_account($user3_json);
if($acc_create_test){
    $passed++;
}
else{
    $failed++;
}

$user3 = array(
    $username = "Karl",
    $password = "",   
);

$user3_json = json_encode($user3);
$acc_create_test = create_account($user3_json);
if($acc_create_test){
    $passed++;
}
else{
    $failed++;
}

#empty
$user4 = array(
    $username = "",
    $password = "",   
);

$user4_json = json_encode($user4);
$acc_create_test = create_account($user4_json);
if($acc_create_test){
    $passed++;
}
else{
    $failed++;
}

echo "Account Creation Test: ";
echo "Total Test Passed: " . $passed . "<br>" ;
if($failed != 0){
    echo "Test Failed: " . $failed . "<br>";
}
$passed = $failed = 0;

#-----------------------tasks creation check -----------------------#

#normal task
$task1 = array(
    $account_id = 'SELECT id FROM accounts WHERE name = user1[0], password = user1[1]',
    $task_name = 'test',
    $category = 'homework',
    $deadline = '2022-31-12',
    $priority = 'high',
);

$task1_json = json_encode($task1);
$task_create_test = create_account($task1_json);
if($task_create_test){
    $passed++;
}
else{
    $failed++;
}

#unexpected field
$task2 = array(
    $account_id = 'SELECT id FROM accounts WHERE name = user1[0], password = user1[1]',
    $task_name = '1245345g#',
    $category = 'homework',
    $deadline = '2022-31-12',
    $priority = 'high',
);

$task2_json = json_encode($task2);
$task_create_test = create_account($task2_json);
if($task_create_test){
    $passed++;
}
else{
    $failed++;
}

$task2 = array(
    $account_id = 'SELECT id FROM accounts WHERE name = user1[0], password = user1[1]',
    $task_name = 'test',
    $category = '214124#12',
    $deadline = '2022-31-12',
    $priority = 'high',
);

$task2_json = json_encode($task2);
$task_create_test = create_account($task2_json);
if($task_create_test){
    $passed++;
}
else{
    $failed++;
}

$task2 = array(
    $account_id = 'SELECT id FROM accounts WHERE name = user1[0], password = user1[1]',
    $task_name = 'test',
    $category = 'homework',
    $deadline = '2022-31-12',
    $priority = 'high',
);

$task2_json = json_encode($task2);
$task_create_test = create_account($task2_json);
if($task_create_test){
    $passed++;
}
else{
    $failed++;
}

$task2 = array(
    $account_id = 'SELECT id FROM accounts WHERE name = user1[0], password = user1[1]',
    $task_name = 'test',
    $category = 'homework',
    $deadline = '2022-31-12',
    $priority = 3,
);

$task2_json = json_encode($task2);
$task_create_test = create_account($task2_json);
if($task_create_test){
    $passed++;
}
else{
    $failed++;
}

#missing field
$task3 = array(
    $account_id = 'SELECT id FROM accounts WHERE name = user1[0], password = user1[1]',
    $task_name = '',
    $category = 'homework',
    $deadline = '2022-31-12',
    $priority = 'high',
);

$task3_json = json_encode($task3);
$task_create_test = create_account($task3_json);
if($task_create_test){
    $passed++;
}
else{
    $failed++;
}

$task3 = array(
    $account_id = 'SELECT id FROM accounts WHERE name = user1[0], password = user1[1]',
    $task_name = 'test',
    $category = '',
    $deadline = '2022-31-12',
    $priority = 'high',
);

$task3_json = json_encode($task3);
$task_create_test = create_account($task3_json);
if($task_create_test){
    $passed++;
}
else{
    $failed++;
}

$task3 = array(
    $account_id = 'SELECT id FROM accounts WHERE name = user1[0], password = user1[1]',
    $task_name = 'test',
    $category = 'homework',
    $deadline = '',
    $priority = 'high',
);

$task3_json = json_encode($task3);
$task_create_test = create_account($task3_json);
if($task_create_test){
    $passed++;
}
else{
    $failed++;
}

$task3 = array(
    $account_id = 'SELECT id FROM accounts WHERE name = user1[0], password = user1[1]',
    $task_name = 'test',
    $category = 'homework',
    $deadline = '2022-31-12',
    $priority = '',
);

$task3_json = json_encode($task3);
$task_create_test = create_account($task3_json);
if($task_create_test){
    $passed++;
}
else{
    $failed++;
}

#empty
$task4 = array(
    $account_id = 'SELECT id FROM accounts WHERE name = user1[0], password = user1[1]',
    $task_name = '',
    $category = '',
    $deadline = '',
    $priority = '',
);

$task4_json = json_encode($task4);
$task_create_test = create_account($task4_json);
if($task_create_test){
    $passed++;
}
else{
    $failed++;
}


echo "Task Creation Test: ";
echo "Total Test Passed: " . $passed . "<br>" ;
if($failed != 0){
    echo "Test Failed: " . $failed . "<br>";
}

#-----------------------task deletion check----------------------#

$dtask= array($task_id = 'SELECT * FROM tasks WHERE id= 1');
$dtask_json = json_encode($dtask);
$task_del_test = delete_task($dtesk_json);

echo "Task Deletion Test (Database after creation test should have one valid entry)";
if($task_del_test){
    echo "Deletion Successful";
}
else{
    echo "Deletion Failed";
}

#---------------------account deletion check---------------------#
include 'php_functions/delete.php';

#password casecheck
$duser= array($account_id = 'SELECT * FROM accounts WHERE password = "123ABC" ');
$duser_json = json_encode($duser);
$user_del_test = delete_task($duser_json);

echo "Account Deletion Test (Database after creation test should have one valid entry)";
if($user_del_test){
    echo "Deletion Successful";
}
else{
    echo "Deletion Failed";
}

#properly delete
$duser= array($account_id = 'SELECT * FROM accounts WHERE password = user1[1]');
$duser_json = json_encode($duser);
$user_del_test = delete_task($duser_json);

echo "Account Deletion Test (Database after creation test should have one valid entry)";
if($user_del_test){
    echo "Deletion Successful";
}
else{
    echo "Deletion Failed";
}


?>
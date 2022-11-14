/**Task-related options  */

/* current request format for testing purposes */
function updateTask (taskItem) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'update_task', task_id: taskItem.id, completed: taskItem.completed})
    };
    fetch('https://localhost:8080/endpoint.php', requestOptions);
    
}

function deleteTask (taskItem) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'delete_task', task_id: taskItem.taskID})
    };
    fetch('https://localhost:8080/endpoint.php', requestOptions);
}


function getTask (user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'get_tasks_from_user_id', account_id: user.accountID})
    };
    fetch('https://localhost:8080/endpoint.php', requestOptions);

}

function createTask (taskItem) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'create_task', taskItem})
    };
    fetch('https://localhost:8080/endpoint.php', requestOptions);

}

/*  NEW request format that will be used eventually 
*/

/*function updateTask (taskItem) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'update_task', taskItem})
    };
    fetch('https://localhost:8080/endpoint.php', requestOptions);
    
}*/

/*function deleteTask (taskItem) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'delete_task', taskItem})
    };
    fetch('https://localhost:8080/endpoint.php', requestOptions);
    
}*/

/*function getTask (user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'get_task_from_user_id', user})
    };
    fetch('https://localhost:8080/endpoint.php', requestOptions);
    
}*/


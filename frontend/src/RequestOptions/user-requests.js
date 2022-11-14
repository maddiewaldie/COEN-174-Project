/**User-related options  */

/* current request format for testing purposes */


function updateUsername (user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'update_account', account_id: user.account_id, username: user.username})
    };
    fetch('https://localhost:8080/endpoint.php', requestOptions);
    
}

function updatePassword (user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'update_account', account_id: user.account_id, password: user.password})
    };
    fetch('https://localhost:8080/endpoint.php', requestOptions);
    
}

function deleteUser (user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'delete_account', account_id: user.account_id})
    };
    fetch('https://localhost:8080/endpoint.php', requestOptions);
}

function getUser (user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'get_user_id', username: user.username, password: user.password})
    };
    fetch('https://localhost:8080/endpoint.php', requestOptions);

}

function createUser (user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'create_user', user})
    };
    fetch('https://localhost:8080/endpoint.php', requestOptions);

}

/* NEW request format that will be used eventually */ 

/*
function updateUser (user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'update_account', user})
    };
    fetch('https://localhost:8080/endpoint.php', requestOptions);
    
}*/

/*function deleteUser (user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'delete_account', user})
    };
    fetch('https://localhost:8080/endpoint.php', requestOptions);
}*/

/*function getUser (user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type:'get_user_id', username: user})
    };
    fetch('https://localhost:8080/endpoint.php', requestOptions);

}*/

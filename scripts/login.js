let master_username = "test";
let master_password = "test";
let next_page = "./solution.html";

function checkPassword() {
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    console.log(username);
    console.log(password);
    // let result = add(addend1, addend2);
    // Step 4: Assign the return value to an HTML form element with an ID of sum
    if (username == master_username && password == master_password){
        window.location.href=next_page;
    }
}
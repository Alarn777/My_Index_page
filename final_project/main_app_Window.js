let modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
let myUsername = "Michael";
let myPass = "01234";
function login() {
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    if (!myUsername.localeCompare(username.value) && !myPass.localeCompare(password.value))
    {
        // window.open("https://www.google.com");

    }
    else
        {
        alert("Username or Password is incorrect")
        }
}
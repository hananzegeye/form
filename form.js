// grabing basic info documents 
const form  = document.getElementById("form")
const username = document.getElementById("username")
const email    = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

//show input error message
function showError(input,message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}
//show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}


//EVENT istner
form.addEventListener("submit", function(e) {
e.preventDefault();

if (username.value === "") {
    showError(username, "username is required");
} else {
    showSuccess(username);
}
//email
if (email.value === "") {
    showError(email, "email is required");
} else {
    showSuccess(email);
}
// check email valid
function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// show if it is not a right email
if (email.value === "") {
    showError(email, "username is required");
} else if(!isValidEmail(email.value)) {
    showError(email, "email is not valid");
} else {
    showSuccess(email);
}
//password
if (password.value === "") {
    showError(password, "password is required");
} else {
    showSuccess(password);
}
//password2
if (password2.value === "") {
    showError(password2, "password2 is required");
} else {
    showSuccess(password2);
}
});
let email = document.getElementById('email');
let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function Check(){
    if(!email.value.match(emailRegex)){
        email.setCustomValidity('E-mail nije validan.');
    }
}
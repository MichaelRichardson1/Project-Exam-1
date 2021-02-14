const form = document.querySelector("form");
const fullName = document.querySelector("#fullName");
const nameError = document.querySelector("#input-error-name");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#input-error-subject");
const email = document.querySelector("#email");
const emailError = document.querySelector("#input-error-email");
const message = document.querySelector("#message");
const messageError = document.querySelector("#input-error-message");
const notification = document.querySelector("#notification");
const button = document.querySelector("button");
const inputError = document.querySelector(".input-error");


function submitFormCheck(event) {

    event.preventDefault();
    
    if (checkLength(fullName.value, 1) === true) {

        nameError.style.display = "none";

    } else {

        nameError.style.display = "block";

    }

    if (checkLength(subject.value, 9) === true) {

        subjectError.style.display = "none";

    } else {

        subjectError.style.display = "block";

    }

    if (validateEmail(email.value) === true) {

        emailError.style.display = "none";

    } else {

        emailError.style.display = "block";

    }

    if (checkLength(message.value, 24) === true) {

        messageError.style.display = "none";

    } else {

        messageError.style.display = "block";

    }        
    
}

fullName.addEventListener("keyup", checkInputError);
subject.addEventListener("keyup", checkInputError);
email.addEventListener("keyup", checkInputError);
message.addEventListener("keyup", checkInputError);

form.addEventListener("submit", submitFormCheck);

form.addEventListener("submit", formSuccessCheck);

function checkInputError() {

    if (checkLength(fullName.value, 1) && checkLength(subject.value, 9) && validateEmail(email.value) && checkLength(message.value, 24)) {

        notification.innerHTML = '<div class="message">Form is ready for submission!</div>';        

    } else {
        
        notification.innerHTML = '<div class="message">All fields marked with a * are mandatory.';        

    }

}

function formSuccessCheck() {
    
    if (checkLength(fullName.value, 1) && checkLength(subject.value, 9) && validateEmail(email.value) && checkLength(message.value, 24)) {

        notification.innerHTML = '<div class="messageSuccess">Submission Successful!</div>';

    } else {

        notification.innerHTML = '<div class="messageError">Submission Failed!</div>';                

    }

    form.reset();

}

function checkLength(value, len) {

    if (value.trim().length >= len) {

        return true;

    } else {

        return false;

    }

}

function validateEmail(email) {

    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const patternMatches = regEx.test(email);

    return patternMatches;

}

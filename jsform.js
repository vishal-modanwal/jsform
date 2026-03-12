let form = document.querySelector("#form");
let error = document.querySelector("#error");
let reset = document.querySelector("#reset");

reset.addEventListener("click", function () {
  error.textContent = "";
});

const Emails = new Set();

form.addEventListener("submit", function (e) {

e.preventDefault();

error.textContent = "";

let name = document.querySelector("#name").value.trim();
let email = document.querySelector("#email").value.trim();
let password = document.querySelector("#password").value;
let confirmPassword = document.querySelector("#confirmPassword").value;
let phone = document.querySelector("#phone").value.trim();
let gender = document.querySelector("#gender").value;
let skills = document.querySelectorAll('input[name="skills[]"]:checked');

if (!name || !email || !password || !confirmPassword || !phone || !gender) {
    errorHappen("Please fill all the fields");
    return;
}

if (skills.length === 0) {
    errorHappen("Please select at least one skill");
    return;
}

const validName = nameChecker(name);
const validEmail = validateEmail(email);
const validNumber = numberValidate(phone);
const validPassword = confirmPasswordCheck(password, confirmPassword);

if (validName && validEmail && validNumber && validPassword) {

    Emails.add(email);

    error.style.color = "green";
    error.textContent = "Form submitted successfully";

    form.reset();
}

});


function nameChecker(name) {

if (name.length <= 2) {
    errorHappen("Name must be more than 2 characters");
    return false;
}

return true;

}


function validateEmail(email) {

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

if (!emailRegex.test(email)) {
    errorHappen("Please enter a valid email");
    return false;
}

if (Emails.has(email)) {
    errorHappen("Email already exists");
    return false;
}

return true;

}


function numberValidate(phone) {

const phoneRegex = /^[0-9]{10}$/;

if (!phoneRegex.test(phone)) {
    errorHappen("Phone must be exactly 10 digits");
    return false;
}

return true;

}


function confirmPasswordCheck(password, confirmPassword) {

const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

if (!passwordRegex.test(password)) {
    errorHappen("Password must contain uppercase, lowercase, number and special character");
    return false;
}

if (password !== confirmPassword) {
    errorHappen("Passwords do not match");
    return false;
}

return true;

}


function errorHappen(msg) {

error.style.color = "red";
error.textContent = msg;

}
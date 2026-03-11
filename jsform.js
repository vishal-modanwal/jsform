let form = document.querySelector("form");

let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password =document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
let phone = document.querySelector("#phone");

form.addEventListener("submit" , function(e){
    e.preventDefault();

    console.log(name.value );

//    if(name.value.length <=2){
//     alert( "name is too short please entre valid name with more than 2 character ")
//    }     
nameChecker(name);
validateEmail(email);
    
    



})

function nameChecker(name){
   if(name.value.length <=2){
    alert( "name is too short please entre valid name with more than 2 character ")
   }
}

function validateEmail(email){
    const regex = ^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$;
    if(!regex.test(email)){
        alert("please entre a valid email");
    }
}
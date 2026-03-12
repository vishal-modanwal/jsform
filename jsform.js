let form = document.querySelector("form");
let name = document.querySelector("#name").value;
let email = document.querySelector("#email").value;
let password =document.querySelector("#password").value;
let confrmPassword = document.querySelector("#confirmPassword").value;
let phone = document.querySelector("#phone").value;
let error = document.querySelector("#error");

const Emails = new Set();


//prevent once , validate everything
form.addEventListener("submit" , function(e){
    e.preventDefault();

    console.log(name);

//    if(name.value.length <=2){
//     alert( "name is too short please entre valid name with more than 2 character ")
//    }     
   const validName = nameChecker(name);
   const validEmail = validateEmail(email);
   const validNumber = numberValidate(phone);
   const validPassword = confirmPassword(password , confrmPassword);

  let valid = validName && validEmail && validNumber && validPassword;
    
    

if(valid){
    form.submit();
}
    



})

function nameChecker(name){
   if(name.trim() === ""){
    errorHappen("name is empty please fill it");
    return false;
   }
   if(name.length <=2){
    errorHappen("name is too short please entre valid name with more than 2 character");
    return false;  
   }

   return true;
}

function validateEmail(email){
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if(!emailRegex.test(email)){
        errorHappen("please entre a valid email");
        return false;
    }
    if(Emails.has(email)){
        errorHappen("email was already present please add unique mail");
        return false;
    }
    Emails.add(email);
    return true;
}


function numberValidate(phone){
    const phoneRegex = /^[0-9]{10}$/;
    if(!phoneRegex.test(phone)){
      errorHappen("Phone must be 10 digits");
       return false;
    }
    return true;
  }

function confirmPassword(password , confirmPassword){
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!password || !confirmPassword) {
  errorHappen("Password fields cannot be empty.");
  return false;
}
 if (!passwordRegex.test(password)) {
    errorHappen("Password must contain 8+ characters, including uppercase, lowercase, number, and special character.");
    return false;
  }

  if (password !== confirmPassword) {
    errorHappen("Password and confirm password do not match.");
    return false;
  }
  return true;
}

function errorHappen(err){
    error.textContent = err;
}
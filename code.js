function validateForm(){

    //Validate User name
    let x = document.forms["myForm"]["fname"].value;
    let fnameError = document.getElementById("fnameError");
    if(x.length < 5){
        fnameError.style.display = "block";
        fnameError.innerText = "Name must be more than 5 character!";
        return false;
    } else {
        fnameError.style.display = "none";
    }
    
    // Validate Email-id
    let y = document.forms["myEmail"]["email"].value;
    let emailError = document.getElementById("emailError");
    if(!y.includes('@')){
        emailError.style.display = "block";
        emailError.innerText ="Enter correct Email!";
        return false;
    } else {
        emailError.style.display = "none";
    }

    // Validate phone number
    let z = document.forms["myPhone"]["phone"].value;
    let phoneError = document.getElementById("phoneError");
    if(z === "1234567890" || z.length!==10 || isNaN(z)){
        phoneError.style.display = "block";
        phoneError.innerText = "Enter a valid phone number! Phone number should not be 1234567890 and must be 10 digits!";
        return false;
    } else {
        phoneError.style.display = "none";
    }

    // Validate password
    let a = document.forms["myPassword"]["password"].value;
    let passwordError = document.getElementById("passwordError");
    if(a.length < 8){
        passwordError.style.display = "block";
        passwordError.innerText = "Password is not strong!";
        return false;
    } else {
        passwordError.style.display = "none";
    }
    
    // Validate confirm password
    let b = document.forms["confirmPwd"]["confirmPwd"].value;
    let confirmPwdError = document.getElementById("confirmPwdError");
    if( b != a){
        confirmPwdError.style.display = "block";
        confirmPwdError.innerText = "Password does not match.";
        return false;
    } else {
        confirmPwdError.style.display = "none";
    }
    
    // If all validations pass, submit the form
    alert('Form submitted successfully!');
        //Here you can add code to actually submit the form data
}
